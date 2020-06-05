var map = new BMapGL.Map("container");
var point = new BMapGL.Point(116.404, 39.915);
map.centerAndZoom(point, 15); 
console.dir(window.returnCitySN.cip)

function getLocation(){ 
    console.dir(navigator.geolocation.getCurrentPosition)
    if (navigator.geolocation){ 
      navigator.geolocation.getCurrentPosition(showPosition,showError); 
      navigator.geolocation.getCurrentPosition((position)=>{
        var lat = position.coords.latitude; //纬度 
        var lag = position.coords.longitude; //经度 
        alert('纬度:'+lat+',经度:'+lag); 
        console.log(23)
        console.log(lat,lag)
      },showError); 
    }else{ 
      alert("浏览器不支持地理定位。"); 
    } 
  } 
// 定位失败
function showError(error){ 
  switch(error.code) { 
    case error.PERMISSION_DENIED: 
      alert("定位失败,用户拒绝请求地理定位"); 
      break; 
    case error.POSITION_UNAVAILABLE: 
      alert("定位失败,位置信息是不可用"); 
      break; 
    case error.TIMEOUT: 
      alert("定位失败,请求获取用户位置超时"); 
      break; 
    case error.UNKNOWN_ERROR: 
      alert("定位失败,定位系统失效"); 
      break; 
  } 
} 
// 定位成功返回经纬度 
function showPosition(position){ 
    var lat = position.coords.latitude; //纬度 
    var lag = position.coords.longitude; //经度 
    alert('纬度:'+lat+',经度:'+lag); 
    console.log(23)
    console.log(lat,lag)
  } 

  getLocation()