import mongoose from "mongoose";


const StudentSchema = new mongoose.Schema({
<<<<<<< HEAD
    name: { type: String, require: true , valida },
    rollNo: { type: String, require: true, unique: true ,sparse: true , minlength},
=======
    name: { type: String, require: true },
    rollNo: { type: String, require: true, unique: true, sparse : true , minlength : 10, maxlength : 15 },
>>>>>>> 64180361c39d66a894c861187656c61b530b2d01
    branch: { type: String, require: true },
    contact: { type: String, unique: true, default: null, sparse: true },
    cr: { type: Boolean, default: false },
    sem: { type: Number },
    isAdmin: { type: Boolean, default: false }
})

const Student = mongoose.model("Student", StudentSchema)

export default Student
