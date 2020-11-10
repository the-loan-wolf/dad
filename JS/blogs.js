//appling innerHeight of browser to section 1 and section 2.............................................................................................

document.querySelector('#section-1').style.height = window.innerHeight + 'px';
document.querySelector('#section-2').style.height = window.innerHeight + 'px';

//calculating height for section 1 and section 2 when browser resize...................................................................................

function windowResize() {
    document.querySelector('#section-1').style.height = window.innerHeight + 'px';
    document.querySelector('#section-2').style.height = window.innerHeight + 'px';
}