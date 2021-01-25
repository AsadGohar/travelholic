import React from 'react'

//TopQuestion components imported here
import QuestionCard from "./QuestionCard";


function TopQuestions() {
  return (
    <div className="container mb-3 h-auto h-100">
      <QuestionCard detail="false"/>
      <QuestionCard detail="false"/>
      <QuestionCard detail="false"/>
    </div>
  )
}

export default TopQuestions

