function toggleMobileMenu(menu) {
  menu.classList.toggle('open');
}

$('.flow-content .item').hover(
  function(){ $('.footer').addClass('hide') },
  function(){ $('.footer').removeClass('hide') }
)

// Slick Slider
$(document).ready(function(){
  $('.slider').slick({
    arrows: false,
    dots: true
  });
});