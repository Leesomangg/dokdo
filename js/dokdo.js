window.onload = function () {
  // 독도 행사 swiper
  var swiper = new Swiper(".sw-event", {
    slidesPerView: 4,
    loop: true,
    spaceBetween: 30,
    freeMode: true,
    pagination: {
      el: ".swiper-pagination-event",
      clickable: true,
    },
  });
  // 독도 md swiper
  var swiper = new Swiper(".sw-md", {
    slidesPerView: 4,
    loop: true,
    spaceBetween: 30,
    freeMode: true,
    pagination: {
      el: ".swiper-pagination-md",
      clickable: true,
    },
  });
};
