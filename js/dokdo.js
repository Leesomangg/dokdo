window.addEventListener("load", function () {
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
