
const Student = require("../models/Student");

// Calculate Result
const calculateResult = (marks) => {
    const totalMarks =
        Number(marks.english) +
        Number(marks.maths) +
        Number(marks.science) +
        Number(marks.computer);

    const percentage = totalMarks / 4;

    let grade;

    if (percentage >= 90) {
        grade = "A+";
    } else if (percentage >= 80) {
        grade = "A";
    } else if (percentage >= 70) {
        grade = "B";
    } else if (percentage >= 60) {
        grade = "C";
    } else if (percentage >= 40) {
        grade = "D";
    } else {
        grade = "F";
    }

    return { totalMarks, percentage, grade };
};


// Add New Student
const addStudent = async (req, res) => {
    try {
        const { name, rollNumber, className, marks } = req.body;

        if (!name || !rollNumber || !className || !marks) {
            return res.status(400).json({
                message: "Please fill all fields"
            });
        }

        const result = calculateResult(marks);

        const student = await Student.create({
            name,
            rollNumber,
            className,
            marks,
            ...result
        });

        res.status(201).json({
            message: "Student added successfully!",
            student
        });

    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
};


// Get All Students
const getAllStudents = async (req, res) => {
    try {
        const students = await Student.find().sort({
            createdAt: -1
        });

        res.status(200).json(students);

    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
};


// Get Student By ID
const getStudentById = async (req, res) => {
    try {
        const student = await Student.findById(req.params.id);

        if (!student) {
            return res.status(404).json({
                message: "Student not found"
            });
        }

        res.status(200).json(student);

    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
};


// Update Student
const updateStudent = async (req, res) => {
    try {
        const { name, rollNumber, className, marks } = req.body;

        const student = await Student.findById(req.params.id);

        if (!student) {
            return res.status(404).json({
                message: "Student not found"
            });
        }

        if (name) student.name = name;
        if (rollNumber) student.rollNumber = rollNumber;
        if (className) student.className = className;

        if (marks) {
            student.marks = marks;

            const result = calculateResult(marks);

            student.totalMarks = result.totalMarks;
            student.percentage = result.percentage;
            student.grade = result.grade;
        }

        await student.save();

        res.status(200).json({
            message: "Student updated successfully!",
            student
        });

    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
};


// Delete Student
const deleteStudent = async (req, res) => {
    try {
        const student = await Student.findByIdAndDelete(req.params.id);

        if (!student) {
            return res.status(404).json({
                message: "Student not found"
            });
        }

        res.status(200).json({
            message: "Student deleted successfully!"
        });

    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
};


// Export Controllers
module.exports = {
    addStudent,
    getAllStudents,
    getStudentById,
    updateStudent,
    deleteStudent
};
