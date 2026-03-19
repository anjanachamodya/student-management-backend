const express = require("express");
const router = express.Router();
const validateStudent = require('../middleware/studentValidator');
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
    .post(validateStudent,createStudent);

//routes get/api/students/:id
router.route('/:id')
    .get(getStudentById)
    .put(validateStudent,updateStudent)
    .delete(deleteStudent);

module.exports = router;