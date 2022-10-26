$(document).ready(function() {
    // slick carouselclass="item"
    // $('.thumbnail-main').slick({
    //     dots: false,
    //     infinite: false,
    //     slidesToShow: 10,
    //     slidesToScroll: 1,
    //     arrows: true,
    //     autoplay:true,
    //     autoplaySpeed:100,
    //     responsive: [
    //         {
    //           breakpoint: 1024,
    //           settings: {
    //             slidesToShow: 8,
    //             slidesToScroll: 1,                
    //             dots: false
    //           }
    //         },
    //         {
    //           breakpoint: 600,
    //           settings: {
    //             slidesToShow: 4,
    //             slidesToScroll: 1
    //           }
    //         },
    //         {
    //           breakpoint: 480,
    //           settings: {
    //             slidesToShow: 4,
    //             slidesToScroll: 1
    //           }
    //         }
    //         // You can unslick at a given breakpoint now by adding:
    //         // settings: "unslick"
    //         // instead of a settings object
    //       ]
    //     });

$('.your-class').slick({
        dots: false,
        infinite: false,
        slidesToShow: 10,
        slidesToScroll: 1,
        arrows: true,
        autoplay:false,
        autoplaySpeed:100,
        asNavFor: '.slider',
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 8,
                slidesToScroll: 1,                
                dots: false
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 4,
                slidesToScroll: 1
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 4,
                slidesToScroll: 1
              }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
          ]
        });

});

$('.modal').on('shown.bs.modal', function (e) {
  $('.your-class').slick('setPosition');
  $('.thumbnail-main').addClass('open');
})