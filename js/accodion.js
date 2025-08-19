window.addEventListener("load", function () {
  const menus = this.document.querySelectorAll(".menu");
  const submenus = this.document.querySelectorAll(".submenu");
  menus.forEach(function (menu, index) {
    // console.log(menu, index);
    menu.addEventListener("click", function () {
      // console.log("메뉴클릭");
      const subcurrent = submenus[index];
      // console.log(subcurrent);
      // 이미 열려있으면 닫기
      if (subcurrent.classList.contains("active")) {
        subcurrent.classList.remove("active");
      } else {
        // 열려있는 메뉴는 닫기
        submenus.forEach(function (sub) {
          console.log(sub);
          sub.classList.remove("active");
        });
        // active가 없으면 열기
        subcurrent.classList.add("active");
      }
    });
  });
});
