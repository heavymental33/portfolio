$(function(){

  // Rotatation animation Skill Badges
  var $badges = $(".amg-badge i");
      
  function rotateBadge(passedBadge, speed){
    var rotateSpeed = speed / 180,
        current = 0;
      
  function badgeRotation(passedBadge){
    current = (current == 90) ? 271 : current + 1;
    passedBadge.css({
      "-webkit-transform":"rotate3d(0,1,0," + current + "deg)",
      "-moz-transform":"rotate3d(0,1,0," + current + "deg)",
      "transform":"rotate3d(0,1,0," + current + "deg)"
      });
      
      if (current == 360) {
        clearInterval(rotateInterval);
        passedBadge.removeAttr('style').removeClass('spinning');
      }
    }
      var rotateInterval = setInterval(function(){badgeRotation(passedBadge)}, rotateSpeed);
    }
      
  $badges.mouseenter(function(){
    if ($(this).hasClass('spinning')) {
      return false;
    } else {
        rotateBadge($(this), 500);
        $(this).addClass('spinning');
      }
  });
      
  jQuery('.skillbar').each(function(){
      jQuery(this).find('.skillbar-bar').animate({
          width:jQuery(this).attr('data-percent')
      },2000);
  });

  // Lien vers le projet boutique 
  $('#prj2').css( 'cursor', 'pointer' );
  $("#prj2").on("click", function(){
    window.open('projet/dignard_TRAV02_InterMobile/index.html', '_blank');
  });

  // Scrolling footer
  $('.SmoothTop').click(function(){
    $("html, body").animate({ scrollTop: 0 }, 1000);
      return false;
  }); 
  
  $('.navTrigger').click(function () {
    $(this).toggleClass('active');
    console.log("Clicked menu");
    $("#mainListDiv").toggleClass("show_list");
    $("#mainListDiv").fadeIn();

  });

  $(document).ready(function() {
    $(".menu-icon").on("click", function() {
          $("nav ul").toggleClass("showing");
    });
  });

// Scrolling Effect

  $(window).on("scroll", function() {
      if($(window).scrollTop()) {
        $('nav').addClass('black');
      } else {
        $('nav').removeClass('black');
      }
  });

});
// FIN section JQuery

// Animation scrolling pour les liens du menu (Js vanilla)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
      e.preventDefault();

      document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
      });
  });
});