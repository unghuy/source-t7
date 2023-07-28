function toggleMobileMenu(menu) {
  menu.classList.toggle('open');
}

// Slick Slider
$(document).ready(function(){
  $('.slider').slick({
    arrows: false,
    dots: true
  });
});