//sticky menu while scrolling -----------------------
window.onscroll = function() {myFunction()};
var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;

function myFunction() {
	if (window.pageYOffset >= 1) {
	navbar.classList.add("sticky")
	} 
	else {
	navbar.classList.remove("sticky");
	}
}

// Image Screen load --------------------------------------
$( window ).on( 'load', function(){
	$( '.screen' ).scrollImage();
})


$(".menu-line-btn, .view-demo").click(function() {
  $('html, body').animate({
      scrollTop: $("#demos").offset().top
  }, 2000);
});


// preloader --------------------------------------
$(window).on('load', function () {
  $('#status').fadeOut();
  $('#preloader').delay(350).fadeOut('slow');
  $('body').delay(350).css({
    'overflow': 'visible'
  });
})
// animation --------------------------------------
AOS.init();
AOS.init({
  disable: 'mobile'
});
AOS.init({
  once: true
});
