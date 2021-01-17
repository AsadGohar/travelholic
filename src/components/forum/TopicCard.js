import React from 'react'
import "./topic-card.css"

function TopicCard() {
  return (
    <div>
      <div id="topic" className=" mb-5 ">
        <div id="card-div" className="card shadow">
          <img id="topic-img" className="card-img-top rounded" src={"images/demo2.jpg"}  alt="Card cap" />
          <div className="card-body">
            <div className="col-12 text-center">
              <a className="btn text-dark font-weight-bold" href="x">Trending Topic</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TopicCard
