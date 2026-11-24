
// Backend API URL
const API_URL = "http://localhost:5000/api/students";

// HTML Elements
const studentForm = document.getElementById("studentForm");
const studentTableBody = document.getElementById("studentTableBody");
const searchInput = document.getElementById("searchInput");

// Store all students
let allStudents = [];


// Get Students From Backend
async function getStudents() {
    try {
        const response = await fetch(API_URL);

        if (!response.ok) {
            throw new Error("Unable to fetch students");
        }

        allStudents = await response.json();

        displayStudents(allStudents);

    } catch (error) {
        console.error("Error:", error);
        alert("Backend connection failed!");
    }
}


// Display Students In Table
function displayStudents(students) {

    studentTableBody.innerHTML = "";

    if (students.length === 0) {
        studentTableBody.innerHTML = `
            <tr>
                <td colspan="7">No students found</td>
            </tr>
        `;
        return;
    }

    students.forEach(student => {

        const row = document.createElement("tr");

        row.innerHTML = `
            <td>${student.name}</td>
            <td>${student.rollNumber}</td>
            <td>${student.className}</td>
            <td>${student.totalMarks}</td>
            <td>${student.percentage}%</td>
            <td>${student.grade}</td>
            <td>Added</td>
        `;

        studentTableBody.appendChild(row);
    });
}


// Add New Student
studentForm.addEventListener("submit", async (e) => {

    e.preventDefault();

    const studentData = {
        name: document.getElementById("name").value.trim(),

        rollNumber: document.getElementById("rollNumber").value.trim(),

        className: document.getElementById("className").value.trim(),

        marks: {
            english: Number(document.getElementById("english").value),
            maths: Number(document.getElementById("maths").value),
            science: Number(document.getElementById("science").value),
            computer: Number(document.getElementById("computer").value)
        }
    };

    const marks = Object.values(studentData.marks);

    if (marks.some(mark => !Number.isFinite(mark) || mark < 0 || mark > 100)) {
        alert("Please enter marks between 0 and 100.");
        return;
    }

    try {

        const response = await fetch(`${API_URL}/add`, {
            method: "POST",

            headers: {
                "Content-Type": "application/json"
            },

            body: JSON.stringify(studentData)
        });

        const result = await response.json();

        if (!response.ok) {
            throw new Error(result.message || "Failed to add student");
        }

        alert("Student added successfully!");

        studentForm.reset();

        getStudents();

    } catch (error) {

        console.error("Error:", error);
        alert(error.message);

    }

});


// Search Students
searchInput.addEventListener("input", () => {

    const searchValue = searchInput.value.toLowerCase();

    const filteredStudents = allStudents.filter(student => {

        return (
            student.name.toLowerCase().includes(searchValue) ||
            student.rollNumber.toLowerCase().includes(searchValue)
        );

    });

    displayStudents(filteredStudents);

});


// Load Students When Page Opens
getStudents();
