import React from 'react'
import "./AnswerCard.css"

function AnswerCard(props) {
  const {user,text,createdAt} = props.data
  return (
    <div>
      <div className="row mb-2 ">
        <div className="card mx-4 mt-3 rounded card-border" >
          <div className="row no-gutters">
            <div id="img-div" className="col-md-1" >
              <img id="ac-img" src={`http://localhost:4000/public/images/users/${user.display_image_name}`} className="card-img" alt="TBD"></img>
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
          </div>
        </div>
      </div>
    </div>
  )
}

export default AnswerCard
