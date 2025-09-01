// ---------------- CLASS ----------------
class Student {
  constructor(name, age, course) {
    this.name = name;
    this.age = age;
    this.course = course;
  }

  getInfo() {
    return `${this.name} (${this.age}) - ${this.course}`;
  }
}

// ---------------- DOM ELEMENTS ----------------
const nameInput = document.getElementById("nameInput");
const ageInput = document.getElementById("ageInput");
const courseInput = document.getElementById("courseInput");
const addBtn = document.getElementById("addBtn");
const studentList = document.getElementById("studentList");

// ---------------- ARRAY TO STORE OBJECTS ----------------
const students = [];

// ---------------- EVENT ----------------
addBtn.addEventListener("click", () => {
  const name = nameInput.value.trim();
  const age = ageInput.value.trim();
  const course = courseInput.value.trim();

  if (!name || !age || !course) {
    alert("Please fill all fields");
    return;
  }

  // Create Student object
  const newStudent = new Student(name, age, course);

  // Add to array
  students.push(newStudent);

  // Show on UI
  const li = document.createElement("li");
  li.innerText = newStudent.getInfo();
  studentList.appendChild(li);

  // Clear inputs
  nameInput.value = "";
  ageInput.value = "";
  courseInput.value = "";
});
