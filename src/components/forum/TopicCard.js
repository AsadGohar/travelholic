import React from 'react'
import "./TopicCard.css"

function TopicCard() {
  return (
    <div>
      <div id="topic" className=" mb-5 ">
        <div id="card-div" className="card shadow">
          {/* topic image here */}
          <img id="topic-img" className="card-img-top rounded" src={"images/demo2.jpg"}  alt="Card cap" />
          <div className="card-body">
            <div className="col-12 text-center">
              {/* topic name here */}
              <a className="btn text-dark font-weight-bold" href="x">Topic Name</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TopicCard
