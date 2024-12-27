const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
    title : {
        type: String,
        required: true
    },
    description : {
        type: String,
        required: true
    },
    completed : {
        type: Boolean,
        default: false
    },
},   { timestamps : true}); //createdAt et updateAt

module.exports = mongoose.model('task', taskSchema);