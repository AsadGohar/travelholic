import React from 'react'
import "./ask-question.css"
import Searchbar from "../header/Searchbar";

function AskQuestion() {
  return (
    <div className="container">
      <Searchbar/>
      <div className="container mt-5 bg-white mb-5 pb-4 h-auto h-100">
        <h3 className ="pt-2 mb-3">Ask A Question</h3>
        <hr className="mt-2 mb-3 border-darken" style={{borderWidth:"2px"}}/>
        <form>
        <div className="form-group">
          <h6>Question Title</h6>
          <input type="text" className="form-control" />
        </div>
        <div className="form-group">
          <h6>Answer Question</h6>
          <textarea className="form-control mb-2"  rows="4"></textarea>
          <button id="sub-btn" type="button" className="btn">Submit</button>
        </div>
       
      </form>
      </div>
      
    </div>
  )
}

export default AskQuestion
