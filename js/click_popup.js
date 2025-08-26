window.addEventListener("load", function () {
  const overLay = this.document.querySelector("#overlay");
  const openBTN = this.document.querySelector("#openBtn");
  const closeBTN = this.document.querySelector("#closeBtn");
  openBTN.addEventListener("click", function () {
    overLay.classList.add("open");
  });
  closeBTN.addEventListener("click", function () {
    overLay.classList.remove("open");
  });
});
