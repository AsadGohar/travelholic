const AnswerModel = require('../Models/Answer');

const createAnswer = async(user,text,reported)=>{
  let answer = AnswerModel()
  answer.user=user
  answer.text=text
  answer.reported=reported
  await answer.save()
  return answer
}
module.exports.createAnswer  = createAnswer;

const getAnswers = async()=>{
  let answers = await AnswerModel.find()
  return answers
}

module.exports.getAnswers  = getAnswers;

const deleteAnswerbyId =  async(id) =>{
  let answer = await AnswerModel.findByIdAndDelete(id)
  console.log(answer)
  return answer
}

module.exports.deleteAnswerbyId  = deleteAnswerbyId;

const getAllReportedAnswers = async()=>{
  const reportedAnswers =  await AnswerModel.find({reported:true})
  return reportedAnswers
}

module.exports.getAllReportedAnswers  = getAllReportedAnswers;

const updateAnswerbyUserId = async(id,text)=>{
  const answer = await AnswerModel.findOneAndUpdate
  return answer
}

module.exports.updateAnswerbyUserId  = updateAnswerbyUserId;
