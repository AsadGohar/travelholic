import React from 'react'
import "./TopicCard.css"

import { Link } from 'react-router-dom'

function TopicCard(props) {
  // console.log(props.name)
  return (
    <div>
      <div id="topic" className=" mb-5 ">
        <div id="card-div" className="card shadow">
          {/* topic image here */}
          <img id="topic-img" className="card-img-top rounded" src={`images/${props.name}.jpg`}  alt="Card cap" />
          <div className="card-body">
            <div className="col-12 text-center">
              {/* topic name here */}
              <Link className="btn text-dark font-weight-bold" to={`/topic/${props.name}`}>{props.name}</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TopicCard
