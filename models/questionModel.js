const mongoose = require('mongoose');

const questionSchema = new mongoose.Schema({
    userId: {
        type: String,
        required: true
    },
    questionData: {
        type: String,
        required: true
    },
    answerId: {
        type: String,
        default: 0
    },
    likes: {
        type: Number,
        default: 0
    },
    isAnswered:{
        type: Boolean,
        default: false
    },
    questionTag:{
        type: String,
        default: "",
        required: true,
    },
    questionTime : { 
        type : Date,
        default : Date.now
    }
});

module.exports = mongoose.model("Question", questionSchema);