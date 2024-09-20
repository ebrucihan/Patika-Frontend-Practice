// Selecting elements
const addBtn = document.getElementById("addBtn");
const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");
const toast = new bootstrap.Toast(document.getElementById("liveToast"));
const toastMessage = document.getElementById("toastMessage");

// Task Addition Function
function addTask() {
  const taskValue = taskInput.value.trim();
  if (taskValue === "") {
    showToast("Please enter a task!", "danger");
  } else {
    const li = document.createElement("li");
    li.className =
      "list-group-item d-flex justify-content-between align-items-center";
    li.innerHTML = `
      <span>${taskValue}</span>
      <div>
        <button class="btn btn-success btn-sm me-2 complete-btn">Done</button>
        <button class="btn btn-danger btn-sm delete-btn">Delete</button>
      </div>
    `;
    taskList.appendChild(li);
    showToast("Task added!", "success");
    taskInput.value = "";
  }
}

// Toast Display Function
function showToast(message, type) {
  toastMessage.textContent = message;
  toastMessage.className = `toast-body text-white bg-${type}`;
  toast.show();
}

// Task Deletion and Marking as Completed
taskList.addEventListener("click", function (e) {
  if (e.target.classList.contains("delete-btn")) {
    e.target.parentElement.parentElement.remove();
    showToast("Task deleted!", "warning");
  }

  if (e.target.classList.contains("complete-btn")) {
    const taskItem = e.target.parentElement.parentElement;
    taskItem
      .querySelector("span")
      .classList.toggle("text-decoration-line-through");
    showToast("Task marked as done!", "info");
  }
});

// Adding task when Add button is clicked
addBtn.addEventListener("click", addTask);

// Adding task when Enter key is pressed
taskInput.addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    addTask();
  }
});
