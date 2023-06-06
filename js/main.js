"use strict"

//Modal window
const modalIcon = document.querySelector('.modal-icon');
const modalNav = document.querySelector('.modal__nav');
document.querySelector('.modal-icon').addEventListener('click', function () {
  this.classList.toggle('modal-icon--active');
  modalNav.classList.toggle('modal__nav--active');  
})


function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}
 
  window.onclick = function(e) {
    if (!e.target.matches('.dropbtn')) {
    var myDropdown = document.getElementById("myDropdown");
      if (myDropdown.classList.contains('show')) {
        myDropdown.classList.remove('show');
      }
    }
}


$(document).ready(function(){
    $("#project-carousel").owlCarousel({      
      margin:10,
        loop: true,        
        responsive: {
         0:{
            items:1
        },
        360:{
          items:2
        },
        600:{
            items:3
        },
        768:{
          items:4
        },
        1000:{
            items:4
        }
        }
    });
    $("#apartaments-carousel").owlCarousel({      
      margin:10,
        loop: true,
        /*nav: true,
        navText: ['Prev', 'Next'],*/       
        responsive: {
         0:{
            items:1
        },
        360:{
          items:2
        },
        600:{
            items:3
        },
        768:{
          items:4
        },
        1000:{
            items:4
        }
        }
    });    
});

  const swiper = new Swiper('.swiper', {
    // Optional parameters
    effect: "coverflow",
    grabCursor: true,
    direction: 'horizontal',
    loop: true,
    centeredSlides:true,
    slidesPerView: 2.5,    
    spaceBetween: 30,
    coverflowEffect: {
      rotate: 0,
      stretch: 0,
      depth: 100,
      modifier: 3,
      slideShadows: true,
    },
    breakpoints: {      
      0: {
        slidesPerView: 1.5,
        spaceBetween: 10
      },
      320: {
        slidesPerView: 1.5,
        spaceBetween: 20
      },
      480: {
        slidesPerView: 2,
        spaceBetween: 20
      },
      640: {
        slidesPerView: 2.5,
        spaceBetween: 30
      }      
    }      
  }); 

  
  