const questionModel = require('../models/questionModel');

const express = require('express');

const router = express.Router();

router.post('/addQuestion', async(req, res)=>{
    try{
      const question = await questionModel.create({
        userId: req.body.userId,
        questionData: req.body.questionData,
        likes: req.body.likes,
        isAnswered: req.body.isAnswered,
        questionTag:req.body.questionTag
      });
      res.json(question);
    }catch(e){
      console.log(e.message);
      res.status(404).json(e.message);
    }
});

router.get('/getQuestions', async(req, res)=>{
    try{
      const question = await questionModel.find().sort({questionTime: 'descending'});
      //For an ascending sort, you can use "ascending".
      res.json(question);
    }catch(e){
      console.log(e.message);
      res.status(404).json(e.message);
    }
});
  
router.get('/getQuestion/:id', async(req, res)=>{
    try{
      const question = await questionModel.find({_id: req.params.id});
      res.json(question[0]);
    }catch(e){
      console.log(e.message);
      res.status(404).json(e.message);
    }
});
  
router.put('/updateQuestion/:id', async(req, res)=>{
    try{
      const question = await questionModel.findByIdAndUpdate(
        req.params.id, {
          userId: req.body.userId,
          questionData: req.body.questionData,
          likes: req.body.likes,
          isAnswered: req.body.isAnswered,
          answerId : req.body.answerId
        },
        {new: true},
      );
      res.json(question);
    }catch(e){
      console.log(e.message);
      res.status(404).json(e.message);
    }
});
  
router.delete('/deleteQuestion/:id', async (req, res)=>{
    try{
      await questionModel.findByIdAndDelete(req.params.id);
      res.json("Deleted Successfully");
    }catch(e){
      console.log(e.message);
      res.status(404).json(e.message);
    }
});

module.exports = router;
  