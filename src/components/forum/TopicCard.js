import React from 'react'
import "./topic-card.css"

function TopicCard() {
  return (
    <div>
      <div id="topic" className="col mb-5">
        <div id="card-div"className="card shadow">
          <img id="topic-img" className="card-img-top rounded" src={"images/sample.jpg"} style={{height:"200px"}} alt="Card cap"/>
          <div className="card-body">
            <div className="col-12 text-center">
              <a className="btn text-dark font-weight-bold" href="x">Destinations</a>
            </div>
            {/* <h5 className="card-title text-center">Card title</h5>
          
            <a href="c" className="">Go somewhere</a> */}
          </div>
        </div>
      </div>
    </div>
  )
}

export default TopicCard
