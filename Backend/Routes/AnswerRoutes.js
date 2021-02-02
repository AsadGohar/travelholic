const express = require ('express');
const router = express.Router();

const {createAnswer,getAnswers,deleteAnswerbyId,getAllReportedAnswers,updateAnswerbyUserId} = require('../Controllers/AnswerControllers')

router.post('/post-answer', async (req,res)=>{
  const {user,text, reported} = req.body
  const answer = await createAnswer(user,text,reported);
  res.send(answer)
})

router.get('/get-answers', async (req,res)=>{
  const answers = await getAnswers()
  res.send(answers)
})

router.delete('/delete/:id', async (req,res)=>{
  const answer = await deleteAnswerbyId(req.params.id);
  res.send(answer)
})

router.get('/get-reported', async(req,res)=>{
  const reportedAnswers = await getAllReportedAnswers()
  res.send(reportedAnswers)
})

router.put('/update-answer', async (req,res)=>{
  const {id,text} =req.body
  const updatedAnswer = await updateAnswerbyUserId(id,text)
  res.send(updatedAnswer)
})

module.exports = router;
