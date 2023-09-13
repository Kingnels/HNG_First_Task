const BgImg = document.querySelector(".bg");
var day = document.querySelector(".day")
var currentime = document.querySelector(".curtime")

var time = new Date();
var curday = time.getUTCDay();
const utc = time.getUTCHours(); 
const utcmin = time.getUTCMinutes(); 

if(curday == 1){ 
    day.append("Monday!")
}
else if(curday == 2){
    day.append("Tuesday!")
}
else if(curday == 3){
    day.append("Wednesday!")
}
else if(curday == 4){
    day.append("Thursday!")
}
else if(curday == 5){
    day.append("Friday!")
}
else if(curday == 6){
    day.append("Saturday!")
}else{
    day.append("Sunday!")
}
if(utc >= 12){
    currentime.append(utc + ":" + utcmin + "PM" + " UTC")
}else{
    currentime.append(utc + ":" + utcmin + "AM" + " UTC")
}
BgImg.addEventListener('click',Dialogue);
function Dialogue(){
    console.log(time);
};
