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

// mail..................................................................................................................................



(function(){
    emailjs.init("user_Zlj4X0CYY9s8R3IoUHwAD");
 })();

function sendEmail() { 
    let nameOfSender = document.querySelector('#name').value;
    let addressOfSender = document.querySelector('#email').value;
    let messageOfSender = document.querySelector('#message').value;

    var templateParams = {
        from_name: nameOfSender,
        name: nameOfSender,
        email: addressOfSender,
        message: messageOfSender
    };

    emailjs.send('service_1nzml0j', 'template_gc4nyug', templateParams)
            .then(function(response) {
            console.log('SUCCESS!', response.status, response.text);
            }, function(error) {
            console.log('FAILED...', error);
            });
} 