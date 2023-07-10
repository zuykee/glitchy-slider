// const galleryContainer = document.querySelector('.slider-items');
// const galleryControlsContainer = document.querySelector('.slider-navigation');
// const galleryControls = ['previous', 'next'];
// const galleryItems = document.querySelectorAll('.slider-item');

// const swiper = new Swiper('.swiper', {
//     speed: 400,
//     spaceBetween: 100,
//   });

const swiper = new Swiper('.swiper', {
        // slidesPerView: 3,
        loop: true, 

        effect: 'creative',
        creativeEffect: {
          prev: {
            // will set `translateZ(-400px)` on previous slides
            translate: ["5%", 0, 0],
          },
          next: {
            // will set `translateX(100%)` on next slides
            translate: ["5%", 0, 0],
          },
        },
  
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    
  });