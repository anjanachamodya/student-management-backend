const Student = require('../models/student');

//@desc Create a new student
//@route POST/api/Students
const createStudent = async (req,res) => {
    try{
        //req body contains the student data send by the user
        const student = await Student.create(req.body);
        req.status(201).json(student);
    }
    catch(err){
        res.status(400).json({message:"invalid data", error: err.message});
    }
};

//@desc Get all students
//@route GET/api/Students
const getStudents = async (req,res) => {
    try{
        const student = await Student.find();
        res.status(200).json(student);
    }
    catch(err){
        res.status(400).json({message:"invalid data", error: err.message});
    }
};

//@desc Get single students
//@route GET/api/students/id
const getStudentById = async (req,res) => {
    try{
        const students = await Student.findById(req.params.id);
        if(!Student){
            return res.status(404).json({message: "Student not found"});
        }
        res.status(200).json(Student);
    }
    catch(err){
        res.status(400).json({message:"Invalid ID format"});
    }
};

//@desc Update student
//@route PUT/api/students/id
const updateStudent = async (req,res) => {
    try{
        const student = await Student.findByIdAndUpdate(req.params.id,req.body,{new:true});
        if(!Student){
            return res.status(404).json({message: "Student not found"});
        }
        res.status(200).json(student);
    }
    catch(err){
        res.status(400).json({message:err.message});
    }
};

//@desc DELETE student
//@route DELETE/api/students/id
const deleteStudent = async (req,res) => {
    try{
        const student = await Student.findByIdAndDelete(req.params.id);
        if(!Student){
            return res.status(404).json({message: "Student not found"});
        }
        res.status(200).json({message: "Student deleted successfully"});
    }
    catch(err){
        res.status(400).json({message:err.message});
    }
};

module.exports = {createStudent,getStudents,getStudentById,updateStudent,deleteStudent};