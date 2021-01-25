import React from 'react'

//QuestionDetails components imported here
import QuestionCard from "./QuestionCard";
import Searchbar from "../header/Searchbar";
import AnswerCard from "./AnswerCard";
import AnswerArea from "./AnswerArea";

function QuestionDetail() {
  return (
    <div className="container">
      <Searchbar />
      {/* question details starts here */}
      <div className="container mt-5 bg-white mb-5 pb-1 h-auto h-100">
        {/* question here */}
        <QuestionCard detail={true} />
        <hr className="mt-2 mb-3 border-darken" />
        {/* answer section starts here */}
        <div className="row">
          <div className="col-md-10">
            <AnswerCard />
            <AnswerCard />
          </div>
        </div>
        {/* answer section starts here */}
      </div>
      {/* question details starts here */}
      <AnswerArea />
    </div>
  )
}

export default QuestionDetail               
