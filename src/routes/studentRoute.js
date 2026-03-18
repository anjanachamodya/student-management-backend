const express = require("express");
const router = express.Router();
const{
    getStudents,
    getStudentById,
    createStudent,
    updateStudent,
    deleteStudent
} = require('../controllers/studentController');

//routes for api/students
router.route('/')
    .get(getStudents)
    .post(createStudent);

//routes get/api/students/:id
router.route('/:id')
    .get(getStudentById)
    .put(updateStudent)
    .delete(deleteStudent);

module.exports = router;