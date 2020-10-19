const Note = require('../../models/student');

module.exports = {
    index,
    delete: deleteOne,
    create,
    update
};

async function index(req, res) {
    try {
        const students = await Student.find({});
        res.status(200).json(students);
    } catch (err) {
        res.status(404).json(err)
    }
}

async function create(req, res) {
    try {
        req.body.userID = req.user._id
        const student = await Student.create(req.body);
        res.status(201).json(student);
    } catch (err) {
        res.status(404).json(err)
    }
}

async function deleteOne(req, res) {
    const deletedStudent = await Student.findByIdAndRemove(req.params.id);
    res.status(200).json(deletedStudent);
}

async function update(req, res) {
    const updatedStudent = await Student.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.status(200).json(updatedStudent);
}