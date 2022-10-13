const mongoose = require('mongoose');

const answerSchema = new mongoose.Schema({
    userId: {
        type: String,
        required: true
    },
    questionId: {
        type: String,
        required: true
    },
    answerData: {
        type: String,
        required: true
    },
    likes: {
        type: Number,
    },
});

module.exports = mongoose.model("Answer", answerSchema);