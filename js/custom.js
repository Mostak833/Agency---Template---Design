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
    'wrapAround': true,
  })
//  >>>>>>>>>>>>>>>> for slick-slider <<<<<<<<<<<<<<<<//
$('.center').slick({
    centerMode: true,
    centerPadding: '0px',
    slidesToShow: 3,
    autoplay: true,
    loop: true,
    autoplayspeed:1500,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '0px',
          slidesToShow: 1,
        }
      },
      {
        breakpoint: 605,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '0px',
          slidesToShow: 1,
        }
      }
    ]
  });
