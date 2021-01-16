import React from 'react'
import "./answer-card.css"

function AnswerCard() {
  return (
    <div>
      <div className="row mb-2 ">
        <div className="card mx-4 mt-3 rounded card-border" >
          <div className="row no-gutters">
            <div id="img-div" className="col-md-1" >
              <img id="ac-img" src={"images/2.jpg"} className="card-img" alt="TBD"></img>
            </div>
            <div className="col mr-1" > 
              <div className="card-body">
                <div className="row ml-3 " >
                
                  <div className="row">
                    <span id="name" className="">Safa Naeem</span>
                    <p className="card-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled</p>
                  </div>
                  <div className="row mt-2">
                    <span className="posted-text">Posted : <span className="date" >19-25-1598</span></span>
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
