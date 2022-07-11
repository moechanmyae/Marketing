

$(window).on("load" , function(){
  $(".loader-container").fadeOut(500 , function(){
    $("this").remove();
  })
})

$("document").ready(function(){
  let screenHeight = $(window).height();
  console.log(screenHeight)

  $(window).scroll(function(){
    let currentPosition = $(this).scrollTop();
    if (currentPosition >= screenHeight-100){
      $(".site-nav").addClass("site-nav-scroll")
    }else{
      $(".site-nav").removeClass("site-nav-scroll")
    }
    // console.log(currentPosition)
  })
})



new WOW().init();
$('.pricing-slide').slick({
    arrows : false,
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          // infinite: true,
          // dots: true
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  });


