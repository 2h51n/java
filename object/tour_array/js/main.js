window.addEventListener("load", function () {
    let itemList = [];
    const addBtn = this.document.querySelector("#add");
    addBtn.addEventListener("click", addList);

    // 항목을 추가하는 함수
    function addList() {
      const item = document.querySelector("#item").value;
      if (item !== "") {
        itemList.push(item); // 빈 배열에 추가
        document.querySelector("#item").value = ""; // 입력된 내용을 지움
        document.querySelector("#item").focus(); // 텍스트 필드에 포커스 설정
      }
      // 항목을 보여주는 함수를 실행
      showList();
    }

    // 추가된 내용을 보여주는 함수
    function showList() {
      let list = `<ul>`; // ul 태그 시작
      // itemList 복사본을 역순으로 정렬
      let reverseList = itemList.slice().reverse();
      // li 목록 생성
      reverseList.forEach(function (item, index) {
        // 실제 itemList 의 인덱스 계산
        const reIndex = itemList.length - 1 - index;
        list += `<li>${item} <span class="close" id="${reIndex}"> X </span>  </li> `;
      });
      list += `</ul>`; // ul 태그 닫기
      // html itemList에 추가
      document.querySelector("#itemList").innerHTML = list; // ul을 목록에 추가하여 화면에 표시
      // 삭제 기능 추가
      let remove = document.querySelectorAll(".close"); // 삭제 버튼 선택
      remove.forEach(function (button) {
        button.addEventListener("click", removeList); // 각 버튼에 삭제 이벤트 추가
      });
    }

    // 버튼 삭제 기능 함수
    function removeList() {
      let id = this.getAttribute("id");
      itemList.splice(id, 1);
      showList();
    }
});
