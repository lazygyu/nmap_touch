# Enable touch events for naver map javascript APIs

## What is this?

This script will treat a touch event (aka tap) likes a click event with Naver map javascript APIs. 

## Usage:
```html
<script type='text/javascript' src='touchmap.js'></script>
<script type='text/javascript'>
  touchmap.init('YOUR_NAVER_API_KEY_HERE');
  touchmap.ready(function(){
      var oMap = new nhn.api.map.Map(...);
      
      touchmap.enable(oMap);
    });
</script>
```

## License

BSD license

---

# 네이버 지도 js API 에서 터치로 클릭 이벤트 사용 가능하게 하기

## 이거 뭐임?

이 스크립트는 네이버 지도 API 에서 터치(탭)을 클릭 이벤트로 취급하도록 해줍니다.

## 사용법:

 상단 참조
 
## 라이센스

BSD 라이센스
