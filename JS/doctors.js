//appling innerHeight of browser to section 1.............................................................................................

document.querySelector('.section-1').style.height = window.innerHeight + 'px';

//calculating height for section 1 when broweser resize...................................................................................

function windowResize() {
    document.querySelector('.section-1').style.height = window.innerHeight + 'px';
}