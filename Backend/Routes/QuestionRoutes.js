const express = require ('express');
const router = express.Router();

const {createQuestion,getQuestions} = require('../Controllers/QuestionControllers')

router.post('/post-question',async(req,res)=>{
  const {user,statement,description,reported} = req.body;
  const question = await createQuestion(user,statement,description,reported)
  res.send(question)
})

module.exports=router

router.get('/get-questions',async(req,res)=>{
  const questions = await getQuestions()
  res.send(questions)
})

