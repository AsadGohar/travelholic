import React from 'react'

//TopQuestion components imported here
import QuestionCard from "./QuestionCard";

function TopQuestions() {
  const bool = false
  return (
    <div className="container mb-3 h-auto h-100">
      <QuestionCard detail={`${bool}`} />
      <QuestionCard detail={`${bool}`}/>
      <QuestionCard detail={`${bool}`}/>
    </div>
  )
}

export default TopQuestions

