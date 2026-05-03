document.addEventListener("DOMContentLoaded", function () {

  document.querySelector(".addBtn").onclick = newElement;

  function newElement() {
    var input = document.getElementById("myInput");
    var value = input.value.trim();

    if (value === "") {
      alert("“Don’t skip your progress! Write at least one task to move forward 💪”");
      return;
    }

    var li = document.createElement("li");

    var text = document.createElement("span");
    text.textContent = value;
    li.appendChild(text);

    // ❌ DELETE BUTTON
    var close = document.createElement("span");
    close.textContent = "×";
    close.className = "close";
    close.onclick = function () {
      li.remove();
    };
    li.appendChild(close);

    // ✏ EDIT BUTTON
    var editBtn = document.createElement("button");
    editBtn.textContent = "Edit";
    editBtn.className = "edit";

    editBtn.onclick = function (e) {
      e.stopPropagation();

      var newText = prompt("Make it better 💡", text.textContent);

      if (newText !== null && newText.trim() !== "") {
        text.textContent = newText;
      }
    };

    li.appendChild(editBtn);

    document.getElementById("myUL").appendChild(li);
    input.value = "";
  }

});