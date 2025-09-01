const taskInput = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList"); // ✅ spelling fix

// Event listener lagana
addBtn.addEventListener("click", addTask)


function addTask() {
  const taskText = taskInput.value.trim(); // ✅ value lena



  if (taskText === "") {
    alert("Please enter a task");
    return;
  }

  const li = document.createElement("li");

  const span = document.createElement("span");
  span.innerText = taskText;

  const delBtn = document.createElement("button");
  delBtn.innerText="❌";

  delBtn.addEventListener("click",()=>{
    li.remove();
  })

  li.appendChild(span);
  li.appendChild(delBtn);

  taskList.appendChild(li);
  taskInput.value='';
}
