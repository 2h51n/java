window.addEventListener("load", function() {
    const pics = document.querySelectorAll(".pic");
    const lightbox = document.querySelector("#lightbox");
    const lightboxImg = document.querySelector("#lightboxImage");
    // 각 이미지에 클릭 이벤트 추가
    pics.forEach(function(pic) {
        pic.addEventListener("click", function() {
            // 클릭된 이미지의 data-src를 라이트박스 이미지의 src로 설정
            const imgSrc = pic.getAttribute("data-src");
            lightboxImg.setAttribute("src", imgSrc);
            // 라이트박스를 표시
            lightbox.style.display = "flex";
        });
    });
    // 라이트박스 클릭 시 닫기
    lightbox.addEventListener("click", function() {
        lightbox.style.display = "none";
    });
    // console.log("라이트박스가 준비되었습니다.");
});
