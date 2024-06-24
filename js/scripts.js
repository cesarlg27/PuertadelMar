/*!
* Start Bootstrap - Personal v1.0.1 (https://startbootstrap.com/template-overviews/personal)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-personal/blob/master/LICENSE)
*/
// This file is intentionally blank
// Use this file to add JavaScript to your project

let currentIndex = 0;

const slides = document.querySelectorAll('.carousel-item');
const totalSlides = slides.length;

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.remove('active');
        if (i === index) {
            slide.classList.add('active');
        }
    });
}

function nextSlide() {
    currentIndex = (currentIndex + 1) % totalSlides;
    showSlide(currentIndex);
}

function prevSlide() {
    currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
    showSlide(currentIndex);
}

// Auto slide functionality
setInterval(nextSlide, 3000); // Change image every 3 seconds

// Initial display
showSlide(currentIndex);

// function sendMail(){
//     let params = {
//         from_name : document.getElementById("name").value,
//         reply_to : document.getElementById("email").value,
//         phone : document.getElementById("phone").value,
//         message : document.getElementById("message").value,
//     }
//     alert("enviado 1")
//     console.log("is it even clicking?")
//     preventDefault()
//     emailjs.send("service_67kk2ri","template_vxi6t2e", params).then(alert("Mensaje Enviado!"))
//     alert("enviado 2")
// }

const btn = document.getElementById('button');

document.getElementById('form')
 .addEventListener('submit', function(event) {
   event.preventDefault();

   btn.value = 'Sending...';

   const serviceID = 'default_service';
   const templateID = 'template_vxi6t2e';

   emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
      btn.value = 'Send Email';
      alert('Enviado!');
    }, (err) => {
      btn.value = 'Send Email';
      alert(JSON.stringify(err));
    });
});