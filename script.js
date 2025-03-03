function addTask() {
    let taskInput = document.getElementById("taskInput");
    let taskList = document.getElementById("taskList");

    if (taskInput.value.trim() === "") {
        alert("Please enter a task!");
        return;
    }

    let li = document.createElement("li");
    li.innerHTML = `${taskInput.value} <button class="delete-btn" onclick="deleteTask(this)">Delete</button>`;

    taskList.appendChild(li);
    taskInput.value = ""; // Clear input after adding
}

function deleteTask(button) {
    button.parentElement.remove();
}
