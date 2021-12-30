//  >>>>>>>>>>>>>>>> for owl-carousel <<<<<<<<<<<<<<<<//
$(document).ready(function () {
    $(".owl-carousel").owlCarousel({
      items: 1,
      autoplay: true,
      loop: true,
      nav: true,
    });
  });
//  >>>>>>>>>>>>>>>> for wow-animation <<<<<<<<<<<<<<<<//
new WOW().init();
//  >>>>>>>>>>>>>>>> for scroll-bar <<<<<<<<<<<<<<<<//
AOS.init({
    duration:800,
});
//  >>>>>>>>>>>>>>>> for light-box <<<<<<<<<<<<<<<<//
lightbox.option({
    'resizeDuration': 200,
    'wrapAround': true
  })
//  >>>>>>>>>>>>>>>> for slick-slider <<<<<<<<<<<<<<<<//
$('.center').slick({
    centerMode: true,
    centerPadding: '0px',
    slidesToShow: 3,
    autoplay: true,
    loop: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 3
        }
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 1
        }
      }
    ]
  });
