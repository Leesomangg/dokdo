document.addEventListener("DOMContentLoaded", function () {
  function smoothScroll(targetId) {
    var targetSection = document.querySelector(targetId);
    var targetTop = targetSection.offsetTop;
    var headerHeight = document.querySelector("header").offsetHeight;
    var adjustedTop = targetTop - headerHeight;
    window.scrollTo({
      top: adjustedTop,
      behavior: "smooth",
    });
  }
  document.querySelectorAll(".gnb a, .gnb-m a").forEach(function (menuLink) {
    menuLink.addEventListener("click", function (e) {
      e.preventDefault();
      smoothScroll(this.getAttribute("href"));
    });
  });
});
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
  //메뉴
  let nav = this.document.querySelector(".nav-m");
  let btMenu = this.document.querySelector(".bt-menu");
  let navClose = this.document.querySelector(".nav-close");
  btMenu.addEventListener("click", () => {
    nav.classList.add("nav-m-active");
  });
  navClose.addEventListener("click", function () {
    nav.classList.remove("nav-m-active");
  });
  nav.addEventListener("mouseleave", () => {
    nav.classList.remove("nav-m-active");
  });
  // 스와이퍼 적용
  const swReason = new Swiper(".swReason", {
    direction: "vertical",
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    loop: true,
    speed: 500,
    autoplay :{
      delay: 2500,
      disableOnInteraction: false,
    },      
    })


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
  // ============= footer family-site
  var dokdoPlus = document.querySelector(".dokdo-plus");
  var dokdoPlusIcon = dokdoPlus.querySelector("i.fa-angle-down");
  var dokdoPlusUl = document.querySelector(".family ul");
  var familyDiv = document.querySelector(".family");
  var isClicked = false; // 클릭 상태를 저장할 변수를 추가합니다.
  dokdoPlus.addEventListener("click", function (event) {
    event.preventDefault(); // 링크의 기본 동작을 방지합니다.
    dokdoPlusUl.classList.toggle("show"); // ul 요소의 클래스를 토글하여 보이거나 숨깁니다.
    // 아이콘의 회전 각도를 변경하여 화살표 모양을 토글합니다.
    dokdoPlusIcon.classList.toggle("rotate-180");
    // 클릭 상태를 변경합니다.
    isClicked = !isClicked;
    // 클릭 상태에 따라 테두리 모양을 변경합니다.
    if (isClicked) {
      familyDiv.style.borderRadius = "0 0 10px 10px"; // 클릭된 경우 테두리 모양 변경
    } else {
      familyDiv.style.borderRadius = ""; // 클릭되지 않은 경우 테두리 모양 원래대로
    }
  });
});
