window.addEventListener("load", function () {
  const menuItems = this.document.querySelectorAll(".menu > li");
  menuItems.forEach(function (item) {
    // console.log(item);
    const submenu = item.querySelector(".submenu");

    item.addEventListener("mouseenter", function () {
      submenu.style.display = "block";
    });
    item.addEventListener("mouseleave", function () {
      submenu.style.display = "none";
    });
  });
});
