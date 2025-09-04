let inputTask = document.getElementById("inputTask");
let button = document.getElementById("button");
let taskList = document.getElementById("taskList");

button.addEventListener("click", () => {
    if (inputTask.value.trim() === "") {
        alert("Please add a task");
    } else {
        const newTask = document.createElement("li");
        newTask.textContent = inputTask.value;

        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "❌";
        deleteBtn.style.marginLeft = "10px";

        // delete event
        deleteBtn.addEventListener("click", () => {
            taskList.removeChild(newTask);
        });

        newTask.appendChild(deleteBtn);
        taskList.appendChild(newTask);

        inputTask.value = "";
    }
});
