import React from 'react'
import QuestionCard from "./QuestionCard";


function TopQuestion() {
  return (
    <div className="container mb-3 h-auto h-100">

      <QuestionCard detail="false"/>
      <QuestionCard detail="false"/>
      <QuestionCard detail="false"/>
    </div>
  )
}

export default TopQuestion

