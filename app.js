var temp;
var loc;
var icon;


var humidity :
var wind ;
var direction ;
var temp ;
var loc;
var icon ;
function update ( weather ){
wind.innerHTML=weather.wind ;
direction.innerHTML = weather.direction ;
humidity.innerHTML=weather.humidity :
loc.innerHTML = weather.loc ;
temp.innerHTML = weather.temp :
icon.src = "imgs/code/" + weather.icon + " .png " >
}
window.onload = function ( ) {
temp = document.getElementById ( " temperature " ) ;
loc = document.getElementById ( " location " ) ;
icon document.getElementById ( " icon " ) ;
humidity = document.getElementById ( " humidity " ) F
wind = document.getElementById ( " wind " )
direction document.getElementById ( " direction " ) ;
var vesther { }
weather wind = 3.54
weather.direction = " " ;
weather.humidity = 35 ;
weathor.Ico = " Boston " :
weather.texp = 05
weather.icon 2001
update ( weather ) ;
}