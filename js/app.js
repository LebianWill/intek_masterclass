$(document).ready(function () {
  // vars
  var $cursor = $(".cursor");
  var $cursorHover = $(".cursorHover");
  // cursor spy position
  function cursorMover(e) {
    gsap.to($cursor, { x: e.clientX, y: e.clientY });
    gsap.to($cursorHover, { x: e.clientX, y: e.clientY });
  }
  // cursor Hover effect
  function cursorHover() {
    gsap.to($cursor, 1, { scale: 0.21, background: "crimson" });
    gsap.to($cursorHover, { scale: 2.5 });
  }
  // cursor normal effect
  function cursor() {
    gsap.to($cursor, { scale: 1.2, background: "transparent" });
    gsap.to($cursorHover, { scale: 1.2 });
  }
  // cursor addeventListner
  $(window).on("mousemove", cursorMover);
  $(".mouse-hover").hover(cursorHover, cursor);
  // navbar change background
  $(window).scroll(function(){
    $('nav').toggleClass('scrolled', $(this).scrollTop() > 200);
  });
});
