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
    centerMode:true,
    slidesToShow: 3,
    variableWidth: true,
  });
});