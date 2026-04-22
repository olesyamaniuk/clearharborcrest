$(function () {
  $(".o-i-gallery-list").slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true,
    autoplay: true,
    autoplaySpeed: 3500,
    speed: 1000,
    dots: false,
    centerMode: true,
    cssEase: "linear",
    prevArrow: ".o-i-gallery-list-left",
    nextArrow: ".o-i-gallery-list-right",
  });
});
