document.addEventListener("DOMContentLoaded", function () {
  function checkOnlyOne(element) {
    const checkboxes = document.getElementsByName("ok");
    Array.from(checkboxes).forEach((cb) => {
      cb.checked = false;
    });
    element.checked = true;
  }
  // 각 체크박스에 대한 이벤트 리스너 추가
  const checkboxes = document.getElementsByName("ok");
  checkboxes.forEach((checkbox) => {
    checkbox.addEventListener("click", function () {
      checkOnlyOne(this);
    });
  });
});
