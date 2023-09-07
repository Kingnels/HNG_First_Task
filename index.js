const BgImg = document.querySelector(".bg");
var time = new Date();
var currentDate = time.getHours();

BgImg.addEventListener('click',Dialogue);
function Dialogue(){
    console.log(currentDate);
}