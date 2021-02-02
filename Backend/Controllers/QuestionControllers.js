const QuestionModel = require('../Models/Question');

const createQuestion = async(user,statement,description,reported)=>{
  let question = QuestionModel()
  question.user=user
  question.statement =statement
  question.description=description
  question.reported=reported
  await question.save()
  return question
}
module.exports.createQuestion  = createQuestion;

const getQuestions = async(user,statement,description,reported)=>{
  let questions = await QuestionModel.find()
  return questions
}
module.exports.getQuestions  = getQuestions;

const updateQuestionbyId = async(id,statement)=>{
  let question = await QuestionModel.findByIdAndUpdate(id,{statement:statement})
  return question
}
module.exports.updateQuestionbyId  = updateQuestionbyId;
