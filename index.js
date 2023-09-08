const BgImg = document.querySelector(".bg");
var day = document.querySelector(".day")
var time = new Date();
var currentDate = time.getHours();
var curday = time.getDay();

if(curday == 1){ 
    day.append(Monday)
}
else if(curday == 2){
    day.append("Tuesday")
}
else if(curday == 3){
    day.append("Wednesday")
}
else if(curday == 4){
    day.append("Thursday")
}
else if(curday == 5){
    day.append("Friday")
}
else if(curday == 6){
    day.append("Saturday")
}else{
    day.append("Sunday")
}

BgImg.addEventListener('click',Dialogue);
function Dialogue(){
    console.log(time);
};
