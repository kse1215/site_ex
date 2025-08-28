window.addEventListener("load", function () {
  const pics = document.querySelectorAll(".pic"); // 썸네일 이미지들
  const lightBox = document.querySelector("#lightBox");
  const lightBoxImg = document.querySelector("#lightBoxImg");
  // 모든 썸네일에 이벤트 클릭
  pics.forEach((pic) => {
    // console.log(pic);
    pic.addEventListener("click", () => {
      // console.log("click");
      const bigSrc = pic.dataset.src;
      console.log(bigSrc);
      lightBoxImg.src = bigSrc;
      console.log(lightBoxImg);
      lightBox.style.display = "block";
    });
    lightBox.addEventListener("click", () => {
      lightBox.style.display = "none";
    });
  });
});
