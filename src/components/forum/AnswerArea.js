import React,{useState} from 'react'
import axios from 'axios'
import {isLoggedIn,getLoggedInUser} from '../Authentication/auth'
import { useParams } from 'react-router-dom';
import "./AnswerArea.css"
import { toast } from 'react-toastify';

function AnswerArea() {
  const {id}=useParams()
  const [answer,setAnswer] = useState()
  
  const sendAnswer = (e) =>{
    e.preventDefault()
    if (isLoggedIn()) {
      const user =getLoggedInUser().id
      axios.post(`http://localhost:4000/api/answers/`,{user,question:id,text:answer})
        .then(res=>{
          toast.success("Answer Submitted", {
            position: toast.POSITION.TOP_CENTER
          });
          window.location.reload();
          console.log(res.data)
        })
        .catch(err=>{
          console.log(err)
        }) 
    }
    else {
      toast.warning("Please login to Answer", {
        position: toast.POSITION.TOP_CENTER
      });
    }
  }
  return (
    <div>
      <form>
        <div className="form-group">
          <h5  >Answer Question</h5>
          <textarea className="form-control" onChange={e=>{setAnswer(e.target.value)}}  rows="4"></textarea>
          <button id="sub-btn" type="button" onClick={sendAnswer} className="btn submit-question-btn">Submit</button>
        </div>
      </form>
    </div>
  )
}

export default AnswerArea
