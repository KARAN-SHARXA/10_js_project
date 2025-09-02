const notesContainer = document.querySelector(".notes-container");
const createBtn = document.querySelector(".btn");

// Save notes
function updateStorage() {
   removeEmptyNotes();
  localStorage.setItem("notes", notesContainer.innerHTML);
}

// Load notes
function showNotes() {
  notesContainer.innerHTML = localStorage.getItem("notes") || "";
  removeEmptyNotes();
}
showNotes();

// Create note
createBtn.addEventListener("click", () => {
  let inputBox = document.createElement("p");
  let img = document.createElement("img");

  inputBox.className = "input-box";
  inputBox.setAttribute("contenteditable", "true");

  img.src = "bin.gif";
  img.alt = "delete";

  inputBox.appendChild(img);
  notesContainer.appendChild(inputBox);

  updateStorage();
});

// Delete note
notesContainer.addEventListener("click", function (e) {
  if (e.target.tagName === "IMG") {
    e.target.parentElement.remove();
    updateStorage();
  }
});

// Update on typing
notesContainer.addEventListener("input", () => {
  updateStorage();
});

// remove empty notes

function removeEmptyNotes(){
    const notes = notesContainer.querySelectorAll(".input-box");
    notes.forEach(notes=>{
        if(notes.innerHTML.trim() === ""){
            notes.remove();
        }
    })
}
