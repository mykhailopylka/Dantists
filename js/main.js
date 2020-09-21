// slick slider
$(document).ready(function () {
  $(".welcome-descriptiopn__slider").slick({
    arrows: true,
    prevArrow:
      '<button type="button" class="slick-prev"><img src="images/left-arrow-b.svg" alt="arrow"></button>',
    nextArrow:
      '<button type="button" class="slick-next"><img src="images/right-arrow-b.svg" alt="arrow"></button>',
  });
});
// testimonials------------------------
$(document).ready(function () {
  $(".testimonials-slider").slick({
    arrows: true,
    prevArrow:
      '<button type="button" class="slick-prev"><img src="images/left-arrow-w.svg" alt="arrow"></button>',
    nextArrow:
      '<button type="button" class="slick-next"><img src="images/right-arrow-w.svg" alt="arrow"></button>',
  });
});
// трансформація бутербродного меню в хрестик і назад
$(function () {
  document.querySelector(".menu-icon-wrapper").onclick = function () {
    document.querySelector(".menu-icon").classList.toggle("menu-icon-active");
  };
});
// виїзд меню при натисканні на іконку бутербодного меню
$(function () {
  $(".menu-icon-wrapper").on("click", function () {
    $(".menu-list").slideToggle(300, function () {
      if ($(this).css("display") === "block") {
        // $(this).removeAttr("style");
      }
    });
  });
});

// анімація lotti
var elem = document.getElementById("main-invitation__svgContainer");
var animData = {
  container: elem,
  renderer: "svg",
  loop: false,
  autoplay: true,
  path: "../js/TextAnimation_1.json",
};
anim = lottie.loadAnimation(animData);
