//appling innerHeight of browser to section 1 and section 2.............................................................................................

document.querySelector('#section-1').style.height = window.innerHeight + 'px';
document.querySelector('#section-2').style.height = window.innerHeight + 'px';

//calculating height for section 1 and section 2 when browser resize...................................................................................

function windowResize() {
    document.querySelector('#section-1').style.height = window.innerHeight + 'px';
    document.querySelector('#section-2').style.height = window.innerHeight + 'px';
}

// map javaScript code start from here.....................................................................................................

var map =  L.map('map').setView([25.6082129, 85.1566429], 15);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    	attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);
    
L.marker([25.6082129, 85.1566429]).addTo(map)
.bindPopup('PDC')
.openPopup();