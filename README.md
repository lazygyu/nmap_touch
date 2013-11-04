# Enable touch events for naver map javascript APIs

## What is this?

This script will treat a touch event (aka tap) like a click event with Naver map javascript APIs. 

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
