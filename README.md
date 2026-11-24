# Student Result Management System

## About the Project

The Student Result Management System is a full-stack web application developed to manage student information and academic results.

The main purpose of this project is to make student record management easier. It allows users to add student details, store subject marks, calculate total marks, percentage and grade, and view student records.

This project is built using HTML, CSS, JavaScript, Node.js, Express.js and MongoDB.

## Features

- Add new student records.
- View all student records.
- Search students by name or roll number.
- Automatically calculate total marks.
- Automatically calculate percentage and grade.
- Store student information in MongoDB.
- Backend API for managing student records.

## Technologies Used

### Frontend
- HTML
- CSS
- JavaScript

### Backend
- Node.js
- Express.js

### Database
- MongoDB
- Mongoose

## Project Structure

```text
StudentResultSystem/
│
├── backend/
│   ├── config/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── server.js
│   └── package.json
│
├── frontend/
│   ├── index.html
│   ├── style.css
│   └── script.js
│
└── README.md
```

## Installation and Setup

### 1. Clone the Repository

```bash
git clone YOUR_GITHUB_REPOSITORY_URL
```

### 2. Open the Project Folder

```bash
cd StudentResultSystem
```

### 3. Install Backend Dependencies

```bash
cd backend
npm install
```

### 4. Start MongoDB

Make sure MongoDB Community Server is installed and running on your system.

### 5. Start the Backend Server

```bash
node server.js
```

The backend server will run on:

```text
http://localhost:5000
```

### 6. Run the Frontend

Open the `frontend/index.html` file using the VS Code Live Server extension.

## API Endpoints

| Method | Endpoint | Description |
|---|---|---|
| POST | /api/students/add | Add a student |
| GET | /api/students | Get all students |
| GET | /api/students/:id | Get student by ID |
| PUT | /api/students/:id | Update student |
| DELETE | /api/students/:id | Delete student |

## Result Calculation

The system calculates the result using marks from four subjects:

- English
- Mathematics
- Science
- Computer

The total marks, percentage and grade are calculated automatically.

## Future Improvements

- Edit student records through the frontend.
- Delete student records through the frontend.
- Improve dashboard design.
- Add user authentication.
- Deploy the application online.

## Author

Developed as a full-stack web development project.