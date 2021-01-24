import React from 'react'
import "./AnswerArea.css"

function AnswerArea() {
  return (
    <div>
      <form>
        <div className="form-group">
          <h5  >Answer Question</h5>
          <textarea className="form-control"  rows="4"></textarea>
          <button id="sub-btn" type="button" className="btn submit-question-btn">Submit</button>
        </div>
      </form>
    </div>
  )
}

export default AnswerArea
