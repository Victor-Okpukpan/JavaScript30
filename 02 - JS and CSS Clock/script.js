const secondHand = document.querySelector('.second-hand');
const minHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');

function timeHandler(){
    const now = new Date();
    
    const seconds = now.getSeconds();
    const secondsDegree = ((seconds / 60) * 360) + 90;
    if(secondsDegree == 0) {
        secondHand.style.transform = "rotate(360deg)";
        setTimeout(function() {
          secondHand.style.transition = "0s";
          secondHand.style.transform = "rotate(0deg)";
          secondHand.style.transition = "";
        },50);
      } else {
        secondHand.style.transform = `rotate(${secondsDegree}deg)`;
      }

    const mins = now.getMinutes();
    const minsDegree = ((mins / 60) * 360) + ((seconds/60)*6) + 90;
    if(minsDegree == 0) {
        minHand.style.transform = "rotate(360deg)";
        setTimeout(function() {
          minHand.style.transition = "0s";
          minHand.style.transform = "rotate(0deg)";
          minHand.style.transition = "";
        },50);
      } else {
        minHand.style.transform = `rotate(${minsDegree}deg)`;
      }

    const hours = now.getHours();
    const hoursDegree = ((hours / 12) * 360)  + ((mins/60)*30) + 90;
    if(hoursDegree == 0) {
        hourHand.style.transform = "rotate(360deg)";
        setTimeout(function() {
          hourHand.style.transition = "0s";
          hourHand.style.transform = "rotate(0deg)";
          hourHand.style.transition = "";
        },50);
      } else {
        hourHand.style.transform = `rotate(${hoursDegree}deg)`;
      }

}


setInterval(timeHandler, 1000);

window.onload = timeHandler();