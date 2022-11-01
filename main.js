$('.p-menuBtn').on('click', function(){
  $('.p-menu').toggleClass('is-active');
});
$('.p-menu__exit').on('click', function(){
  $('.p-menu').removeClass('is-active');
});

/*slick*/
$(function(){
  $('.p-slider__box').slick({
    autoplay:true,
    autoplaySpeed:2000,
    dots:true,
    dotsClass:'slide-dots',
    arrows:true,
    prevArrow:'.arrowsP',
    nextArrow:'.arrowsN',
    centerMode:true,
    variableWidth: true,
    responsive: [
      {
        breakpoint: 960,
        settings: {
          centerMode:true,
          centerPadding: '0',
          slidesToShow: 1,
        },
      },
    ],
  })
});

/*pagetop*/
$(function(){
  var pagetop = $('.u-pagetop');
  pagetop.hide();
  $(window).scroll(function () {
    if ($(this).scrollTop() > 300) {
          pagetop.fadeIn();
    } else {
          pagetop.fadeOut();
    }
  });
  pagetop.click(function () {
    $('body, html').animate({ scrollTop: 0 }, 500);
    return false;
  });
});