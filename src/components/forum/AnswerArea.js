import React from 'react'

function AnswerArea() {
  return (
    <div>
      <form>
        <div class="form-group">
          <h5  >Answer Question</h5>
          <textarea class="form-control"  rows="4"></textarea>
          <button type="button" className="btn mt-2" style={{backgroundColor:"#114B5F",color:"white"}} >Submit</button>
        </div>
      </form>
    </div>
  )
}

export default AnswerArea
