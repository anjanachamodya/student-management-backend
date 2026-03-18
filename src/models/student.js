const mongoose = require("mongoose");

const studentSchema = mongoose.Schema({
    name: {
        type:String,
        required:[true,"Please add a studen name"],
    },

    email:{
        type:String,
        required:[true,"Add an email address"],
        unique:[true,"email address already taken"],
    },

    age:{
        type:Number,
        required:[true,"Please add student age"],
    },

    course:{
        type:String,
        required:[true,"Add a course name"],
    },
},
{
    timestamps:true,
}

);

module.exports = mongoose.model("Student",studentSchema);