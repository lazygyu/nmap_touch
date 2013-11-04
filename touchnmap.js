(function(exports){
	if( !window.jindo ) window.jindo = {};
	var touchNMapInit = function(apikey){
		var mapscr = document.createElement("script");
		mapscr.src = "http://openapi.map.naver.com/openapi/naverMap.naver?ver=2.0&key=" + apikey;
		var head = document.getElementsByTagName("head")[0] || document.documentElement;
		var done = false;
		mapscr.onload = mapscr.onreadystatechange = function(){
			if( !done && (!this.readyState || this.readState === "loaded" || this.readyState === "complete") ){
				done = true;
				for(var i=0,fn;fn=loaded[i++];){
					if(typeof fn === "function") fn();
				}
				mapscr.onload = mapscr.onreadystatechange = null;

			}
		}
		head.appendChild(mapscr);

	};

	var nm_touchEvent = {};

	var nm_touchStart=function(oEvent){
		nm_touchEvent.moved = false;
	}

	var nm_touchEnd = function(oEvent){
		if(!nm_touchEvent.moved){
			var oPoint = this._getEventOccuredPoint(oEvent);
			var elEl = oEvent.element;
			var sUniq = nhn.mapcore.Util.mapGetParentByClass(elEl, "_nmap_uid")&&RegExp.$0;
			var oObj=sUniq?nhn.api.map.Map._objectManager._getMapObjectByUID(sUniq):this;
			this._launchHandlers("click", {event:oEvent, point:oPoint}); 
		}
		nm_touchEvent.moved = false;

	};

	var nm_touchMove = function(oEvent){
		nm_touchEvent.moved = true;
	};

	var touchEnable = function(mapObj){
		jindo.$Fn(nm_touchStart, mapObj).attach(mapObj._elWrap, "touchstart");
		jindo.$Fn(nm_touchMove, mapObj).attach(mapObj._elWrap, "touchmove");
		jindo.$Fn(nm_touchEnd, mapObj).attach(mapObj._elWrap, "touchend");
	};

	var loaded = [];

	var mapLoaded = function(fn){
		loaded.push(fn);
	}

	exports.init = touchNMapInit;
	exports.enable = touchEnable;
	exports.ready = mapLoaded;
})(typeof exports === 'undefined'?this['touchmap']={}:exports);