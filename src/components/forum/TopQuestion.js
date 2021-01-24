import React from 'react'
import QuestionCard from "./QuestionCard";


function TopQuestion() {
  return (
    <div className="container mb-3 h-auto h-100">

      <QuestionCard/>
      <QuestionCard/>
      <QuestionCard/>
    </div>
  )
}

export default TopQuestion

