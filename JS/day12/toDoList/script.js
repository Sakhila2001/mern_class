const toDoForm = document.querySelector("#toDoForm");
const toDoInput = document.querySelector("#toDoInput");
const toDoList = document.querySelector("#toDoList");

toDoForm.addEventListener("submit", function (e) {
  e.preventDefault(); // prevent page refresh
  const task = toDoInput.value; // get input value
  if (task.trim() === "") {
    alert("Please enter a task");
    return;
  }

  const listItem = document.createElement("li"); // Create list item
  const taskText = document.createElement("span"); // Create task text
  taskText.textContent = task; // Create task text
  const buttonGroup = document.createElement("div"); // Create button container
  const checkBtn = document.createElement("button"); // Check button
  checkBtn.textContent = "Check";
  checkBtn.classList.add("check-btn");
  checkBtn.addEventListener("click", function () {
    taskText.classList.toggle("completed");
  });

  const deleteBtn = document.createElement("button"); // Delete button
  deleteBtn.textContent = "Delete";
  deleteBtn.classList.add("delete-btn");
  deleteBtn.addEventListener("click", function () {
    listItem.remove();
  });
  buttonGroup.appendChild(checkBtn); // Append buttons
  buttonGroup.appendChild(deleteBtn);
  listItem.appendChild(taskText); // Append elements to li
  listItem.appendChild(buttonGroup);
  toDoList.appendChild(listItem); // Append li to ul
  // Clear input
  toDoInput.value = "";
});
