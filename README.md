# 📚 Student Management System API

## 📌 Project Description
This project is a **Student Management System REST API** built using **Node.js**, **Express**, and **MongoDB**. It follows **Clean Architecture principles** to ensure scalability, maintainability, and separation of concerns.

The API allows users to perform full **CRUD (Create, Read, Update, Delete)** operations on student records.

---

## 🚀 Features
- Create a new student
- Retrieve all students
- Retrieve a student by ID
- Update student details
- Delete a student
- Middleware for validation, security, and error handling

---

## 🛠️ Tech Stack
- Node.js
- Express.js
- MongoDB
- Mongoose

---

## 📁 Project Structure

src/
├── controllers # Handle request/response logic
├── services # Business logic layer
├── routes # API routes
├── models # Mongoose schemas
├── middleware # Custom middleware
├── config # Configuration files
└── app.js # Entry point


---

## ⚙️ Setup Instructions

### 1. Clone the repository
```bash
git clone <your-repo-url>
cd student-management-api
2. Install dependencies
npm install
3. Create .env file

Create a .env file in the root directory and add:

PORT=5000
MONGO_URI=your_mongodb_connection_string
4. Run the server
npm run dev

or

node src/app.js
🌐 API Endpoints
📌 Create Student
POST /api/students

Body:

{
  "name": "John Doe",
  "email": "john@example.com",
  "age": 20,
  "course": "Computer Science"
}
📌 Get All Students
GET /api/students
📌 Get Student by ID
GET /api/students/:id
📌 Update Student
PUT /api/students/:id

Body (example):

{
  "name": "Updated Name",
  "age": 22
}
📌 Delete Student
DELETE /api/students/:id