$(document).ready(function () {
  $("#slider").bxSlider({
    auto: true,
    minSlides: 1,
    maxSlides: 1,
    slideWidth: 250,
    slideMargin: 10,
    randomStart: true,
    pager: true,
    moveSlides: 1,
    pagerType: "short",
    speed: 300,
    captions: true,
    pagerCustom: "#pager",
  });
});
