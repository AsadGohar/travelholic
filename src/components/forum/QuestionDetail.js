import React from 'react'


import QuestionCard from "./QuestionCard";
import Searchbar from "../header/Searchbar";
import AnswerCard from "./AnswerCard";
import AnswerArea from "./AnswerArea";

function QuestionDetail() {
  return (
    <div className="container">
      <Searchbar />
      <div className="container mt-5 bg-white mb-5 pb-1 h-auto h-100">
        <QuestionCard detail={true} />
        <hr className="mt-2 mb-3 border-darken" style={{ borderWidth: "2px" }} />
        <div className="row">
          <div className="col-md-1"></div>
          <div className="col-md-10">
          <div className="col-md-1"></div>
          <AnswerCard />
          <AnswerCard />
          </div>
        </div>
      </div>
      <AnswerArea />
    </div>
  )
}

export default QuestionDetail               
