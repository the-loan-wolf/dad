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

//calculating available height to apply on section 1 and 2..............................................................................

let innerHeight = window.innerHeight;
let headerHeight = document.querySelector('.header').offsetHeight;
let imageHeight = innerHeight - headerHeight;
document.querySelector('.section-1').style.height = imageHeight + 'px';
document.querySelector('.section-2').style.height = innerHeight + 'px';



function windowResize() {
let innerHeight = window.innerHeight;
    let headerHeight = document.querySelector('.header').offsetHeight;
    let imageHeight = innerHeight - headerHeight;
    if (/Mobile/i.test(navigator.userAgent) != true) {
        document.querySelector('.section-1').style.height = imageHeight + 'px';
    }
    document.querySelector('.section-2').style.height = innerHeight + 'px';
}


//unused code...........................................................................................................................
// let check;
// if (/Mobile/i.test(navigator.userAgent)) {
//     check = false;
// }

// millisecondsToWait = 10000; 
// setTimeout(function() { 

// }, millisecondsToWait); 


