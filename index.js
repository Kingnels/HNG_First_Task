const BgImg = document.querySelector(".bg");
const time = newDate()

BgImg.addEventListener('click',Dialogue);
function Dialogue(){
    alert("you just clicked the background")
    console.log(time);
}