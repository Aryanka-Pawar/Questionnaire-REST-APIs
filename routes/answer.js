const answerModel = require('../models/answerModel')

const express = require('express');

const router = express.Router();

router.post('/addAnswer',async (req,res) =>{
    try{

        let data = {
            userId : req.body.userId,
            questionId : req.body.questionId,
            answerData : req.body.answerData,
            likes : req.body.likes,
        };

        const answer = await answerModel.create(data);

        res.json(answer);
    }
    catch(e){
        console.log(e)
        res.status(404).json(e.message);
    }
});

router.get('/getAnswer/:id', async (req,res) =>{
    try{
        const answer=await answerModel.find({_id : req.params.id});
        res.json(answer[0]);
    }
    catch(e){
        console.log(e)
        res.status(404).json(e.message);
    }
});

router.put('/updateAnswer/:id', async(req, res)=>{
    try{
      const answer = await answerModel.findByIdAndUpdate(
        req.params.id, {
            answerData : req.body.answerData,
            likes : req.body.likes,
        },
        {new: true},
      );
      res.json(answer);
    }catch(e){
      console.log(e.message);
      res.status(404).json(e.message);
    }
});

router.delete('/deleteAnswer/:id', async (req, res)=>{
    try{
      await answerModel.findByIdAndDelete(req.params.id);
      res.json("Deleted Successfully");
    }catch(e){
      console.log(e.message);
      res.status(404).json(e.message);
    }
});

module.exports = router;

