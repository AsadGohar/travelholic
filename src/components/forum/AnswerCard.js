import React from 'react'

function AnswerCard() {
  return (
    <div>
      <div className="row mb-2 ">
        <div className="card mx-4 mt-3 rounded" style={{border:"0"}} >
          <div className="row no-gutters">
            <div className="col-md-2 mt-2 ml-2 mb-2" >
              <img src={"images/2.jpg"} className="card-img" alt="TBD"></img>
            </div>
            <div className="col mr-1" > 
              <div className="card-body">
                <div className="row ml-3 " >
                
                  <div className="row">
                  <h5 className="">Safa Naeem</h5>
                    <p className="card-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled</p>
                  </div>
                  <div className="row mt-2">
                    <span className="font-weight-bold" style={{color:"green"}}>Answered : <span style={{color:"black"}} >19-25-1598</span></span>
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
