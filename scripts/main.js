const html = document.querySelector("html");
const darkmodeBtn = document.querySelector(".darkmode-btn input");
const itypedText = document.querySelector(".ityped-text");
ityped.init(itypedText, { strings: ['در حال تعمیر است'] });

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

