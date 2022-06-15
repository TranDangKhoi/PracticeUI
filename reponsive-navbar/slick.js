$(document).ready(function () {
  $(".image-slider").slick({
    autoplay: true,
    autoplaySpeed: 6000,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    pauseOnHover: true,
    cssEase: "linear",
    speed: 300,
    dots: true,
    prevArrow:
      '<button class="PrevArrow"><i class="fa-solid fa-angle-left"></i></button>',
    nextArrow:
      '<button class="NextArrow"><i class="fa-solid fa-angle-right"></i></button>',
  });
});
