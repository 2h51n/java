window.addEventListener("load", function () {
    const btn = this.document.getElementById("btn");
    const addValue = this.document.getElementById("addValue");
    const result = this.document.getElementById("result");
    const allClear = this.document.getElementById("allClear");
    // 추가버튼 클릭했을때 함
    btn.addEventListener("click", addTodo);
    function addTodo() {
      const value = addValue.value.trim();
      // console.log(value);
      if (value === "") {
        alert("내용을 입력하세요!");
        return //함수 종료
      }
      const list = document.createElement("li");
  
      list.innerHTML = ` ${value} <button class="del-btn">X</button>   `;
      // console.log(list);
      result.insertBefore(list, result.firstChild);
      addValue.value = "";
      addValue.focus();
      const delBtn = document.querySelector(".del-btn");
      delBtn.addEventListener("click", deleteList);
      list.addEventListener("click", function () {
        list.classList.toggle("completed");
      });
    }
    // del-btn\  삭제하기 함수
    function deleteList(e) {
      e.target.parentElement.remove();
    }
    //   enter input에 value가 출력되게 하는 함수
    addValue.addEventListener("keypress", function (e) {
  
      if (e.key === "Enter") {
        e.preventDefault();
        addTodo();
      }
    });
    //   모두 삭제하기 함수
    allClear.addEventListener("click", allClearList);
    function allClearList() {
      if (confirm("정말 삭제 하시겠습니까?")) {
        if (result.innerHTML === "") {
          alert("삭제할 목록이 없습니다.");
        } else {
          result.innerHTML = ""; //빈배열로 만들기
        }
      }
    }
  });
  