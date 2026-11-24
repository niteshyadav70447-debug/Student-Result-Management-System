
const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },

    rollNumber: {
        type: String,
        required: true,
        unique: true
    },

    className: {
        type: String,
        required: true
    },

    marks: {
        english: {
            type: Number,
            required: true
        },

        maths: {
            type: Number,
            required: true
        },

        science: {
            type: Number,
            required: true
        },

        computer: {
            type: Number,
            required: true
        }
    },

    totalMarks: {
        type: Number,
        required: true
    },

    percentage: {
        type: Number,
        required: true
    },

    grade: {
        type: String,
        required: true
    }

}, { timestamps: true });

module.exports = mongoose.model("Student", studentSchema);
