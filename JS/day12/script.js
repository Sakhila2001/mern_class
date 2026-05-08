 const input = document.getElementById("nameInput");
      const text = document.getElementById("text");

      input.addEventListener("input", function () {
        text.textContent = input.value;
      });

      // Keydown event
      const keyboard = document.getElementById("keyboard");
      const keyResult = document.getElementById("keyResult");

      keyboard.addEventListener("keydown", function (e) {
        keyResult.textContent = "You Pressed " + e.key;
      });

      // Mouseover event
      const box = document.getElementById("box");

      box.addEventListener("mouseover", function () {
        box.style.backgroundColor = "red";
      });

      // Submit event
      const submit = document.getElementById("myform");

      submit.addEventListener("submit", function (e) {
        e.preventDefault();
        alert("Form submitted");
      });