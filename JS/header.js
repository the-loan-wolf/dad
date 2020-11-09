//all code below is for menu button for mobile version....................................................................................

//when user click on menu button hide it and show close button
document.querySelector(".menu-icon").onclick = function() { 
  
    document.querySelector(".menu-icon").style.display = "none";
    document.querySelector(".close-icon").style.display = "block";
    document.querySelector(".nav").style.display = "block";

} 

document.querySelector(".close-icon").onclick = function() { 
  
    document.querySelector(".close-icon").style.display = "none";
    document.querySelector(".menu-icon").style.display = "block";
    document.querySelector(".nav").style.display = "none";

} 