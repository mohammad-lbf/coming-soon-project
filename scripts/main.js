// *****************************************---dark-light mode section scripts---**************************************
const html = document.querySelector("html");
const darkmodeBtn = document.querySelector(".darkmode-btn input");
darkmodeBtn.addEventListener("click" , ()=>{    
if(darkmodeBtn.checked == true){
    html.classList.add("dark");
    localStorage.setItem("darkmode" , "dark")
}
else{
    html.classList.remove("dark")
    localStorage.setItem("darkmode" , "light")
}
})
document.addEventListener("DOMContentLoaded" , () =>{
 let localStorageDarkmode =  localStorage.getItem("darkmode");
  if(localStorageDarkmode == "dark"){
      html.classList.add("dark")
      darkmodeBtn.checked = true;
  } 
  else{
      html.classList.remove("dark")
  } 
});
// *****************************************---ityped scripts---**************************************************
const itypedText = document.querySelector(".ityped-text");
ityped.init(itypedText, { strings: ['در حال تعمیر است'] });
// *****************************************---count down section scripts---***************************************************************
let countdownDay = document.querySelector(".countdown-day .countdown-num")
let countdownHour = document.querySelector(".countdown-hour .countdown-num")
let countdownMinutes = document.querySelector(".countdown-minutes .countdown-num")
let countdownSeconds = document.querySelector(".countdown-seconds .countdown-num")


let willTime = new Date(2022,3,15).getTime();

setInterval(function(){
    let nowTime = new Date().getTime();
    let time = willTime - nowTime;
    if(time >= 0){
        countdownDay.innerText = Math.floor(time / (1000 * 60 * 60 * 24));
        countdownHour.innerText= Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
           countdownMinutes.innerText = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
           countdownSeconds.innerText = Math.floor((time % (1000 * 60)) / 1000);
        
    }
    if(countdownDay.innerText < 10){
        countdownDay.innerText = `0${countdownDay.innerText}`
    }
    if(countdownHour.innerText < 10){
        countdownHour.innerText = `0${countdownHour.innerText}`
    }
    if(countdownMinutes.innerText < 10){
        countdownMinutes.innerText = `0${countdownMinutes.innerText}`
    }
    if(countdownSeconds.innerText < 10){
        countdownSeconds.innerText = `0${countdownSeconds.innerText}`
    }
   
},1000)
// **********************************************---map---*********************************************************************
let map = L.map('map').setView([35.673641, 51.489171], 17);
L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'your.mapbox.access.token'
}).addTo(map);
