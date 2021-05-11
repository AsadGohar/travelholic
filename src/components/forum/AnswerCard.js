import React from 'react'
import "./AnswerCard.css"
import {useSelector } from 'react-redux';
import axios from "../support-components/axios";


function AnswerCard(props) {
  const userLogin = useSelector(state => state.userLogin)
  const { userInfo } = userLogin
  const {_id,user,text,createdAt} = props.data
  const getAnswers = props.onDelete

  const deleteAnswer = () =>{
    axios.delete(`/answers/${_id}`)
    .then(res=>{
      getAnswers()
    })
    .catch(err=>{
      console.log(err)
    })
  }

  return (
    <div>
      <div className="row mb-2 ">
        <div className="card mx-4 mt-3 rounded card-border" >
          <div className="row no-gutters">
            <div id="img-div" className="col-md-1" >
              <img id="ac-img" src={`http://localhost:4000/uploads/users/${user.display_image_name}`} className="card-img" alt="TBD"></img>
            </div>
            <div className="col mr-1" > 
              <div className="card-body">
                <div>
                  <div className="card-body">
                    <div>
                      <span id="name" className="">{user.name}</span>
                    </div>
                    <div>
                      <p id="question">{text}</p>
                    </div>
                    <div id="info" >
                      <span className="posted-text">Posted : <span className="date"> {createdAt.substring(0,10)}</span></span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {
              userInfo && userInfo._id === user._id ?
              (
                <div className="dropdown border-0 float-right">
              <button id="triple-dot-menu"  className=" border-0" type="button"  data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <svg className="float-right bi bi-three-dots-vertical" xmlns="http://www.w3.org/2000/svg" width="16" h eight="16" fill="currentColor"  viewBox="0 0 16 16">
                  <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z" />
                </svg>
              </button>
              <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                {/* dropdown items here */}
                <button onClick={deleteAnswer} className="dropdown-item" href="7">Delete Answer</button>
              </div>
            </div>
              ):
              (<p></p>)
              
            }
           
          </div>
        </div>
      </div>
    </div>
  )
}

export default AnswerCard
