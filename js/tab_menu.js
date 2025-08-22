window.addEventListener("load", function () {
  const popupBtn = this.document.querySelector(".popup-btn");
  const popText = this.document.querySelector(".pop-text");
  const popupLink = this.document.querySelector(".popup-btn .inner a");
  popupBtn.addEventListener("click", function () {
    // popText.style.display = "none";
    // 삼항연산자
    // popText.style.display = popText.style.display === "none" ? "block" : "none";
    if (popText.style.display === "none") {
      popText.style.display = "block";
      popupLink.classList.remove("active");
    } else {
      popText.style.display = "none";
      popupLink.classList.add("active");
    }
  });
  //   탭기능
  const tabTitles = this.document.querySelectorAll(".tab-nav > li > a ");
  const tabItems = this.document.querySelectorAll(".tabitem");
  //   처음 탭 내용 활성화
  tabTitles[0].classList.add("active");
  tabItems[0].style.display = "block";

  tabTitles.forEach((element, index) => {
    element.addEventListener("click", () => {
      // 모든 탭과 내용을 초기화하는 코드
      tabTitles.forEach((item) => {
        item.classList.remove("active");
      });
      tabItems.forEach((tab) => {
        tab.style.display = "none";
      });

      // 모든 탭과 내용을 보이게하는 코드
      element.classList.add("active");
      tabItems[index].style.display = "block";
    });
  });
});
