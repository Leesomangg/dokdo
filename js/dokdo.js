window.onload = function () {
  // 독도 행사 swiper
  var swiper = new Swiper(".sw-event", {
    slidesPerView: 4,
    loop: true,
    spaceBetween: 10,
    freeMode: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });
};
