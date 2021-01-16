import React from 'react'
import QuestionCard from "./QuestionCard";


function TopQuestion() {
  return (
    <div className="container mb-3 h-auto h-100">
      <h2 className="text-center">Top Questions</h2>
      {/* <div className="row">
        <div className="col-lg-3 text-center">
          <h2 className="">Top Questions</h2>
        </div>
          <div className="col-lg-9">
            <Link className="btn float-right" style={{backgroundColor:"#114B5F",color:"white"}} to="/postquestion">Ask A Question</Link>
          <button type="button" className="btn float-right" >Ask A Question</button>
          </div>
      </div> */}
      <QuestionCard/>
      <QuestionCard/>
      <QuestionCard/>
    </div>
  )
}

export default TopQuestion

