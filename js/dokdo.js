window.addEventListener("load", function () {
  // AOS적용
  AOS.init();
  //언어 펼침 기능
  const langWord = document.querySelector(".language-word");
  const Languge = document.querySelector(".languge");
  const langli = document.querySelector(".language li");
  langWord.addEventListener("click", function () {
    Languge.classList.toggle("languge-box-active");
  });
  // 헤더
  let scy = 0;
  let scActive = 50;
  scy = window.document.documentElement.scrollTop;
  let header = document.querySelector("header");
  let logoW = document.querySelector(".logo-w");
  let logoB = document.querySelector(".logo-b");
  let nav = document.querySelectorAll("nav");

  header.addEventListener("mouseenter", () => {
    header.classList.add("header-active");
    logoW.style.display = "none";
    logoB.style.display = "block";
  });
  header.addEventListener("mouseleave", () => {
    header.classList.remove("header-active");
    logoW.style.display = "block";
    logoB.style.display = "none";
  });
  window.addEventListener("scroll", () => {
    scy = window.document.documentElement.scrollTop;
    if (scy > scActive) {
      header.classList.add("header-active");
      logoW.style.display = "none";
      logoB.style.display = "block";
    } else {
      header.classList.remove("header-active");
      logoW.style.display = "block";
      logoB.style.display = "none";
    }
  });

  //__________________________________________________________________________________________
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
});
