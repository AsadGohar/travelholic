import React from 'react'
import './TrendingTopic.css'

//TrendingTopics components imported here
import TopicCard from "./TopicCard";

function TrendingTopics() {
  return (
    <div>
      <div id="outer-div" className="container pt-4 pl-1 mb-3">
        <div className="row d-flex justify-content-center">
          <div className="col-md-4">
            <TopicCard />
          </div>
          <div className="col-md-4">
            <TopicCard />
          </div>
          <div className="col-md-4">
            <TopicCard />
          </div>
        </div>
      </div>
    </div>
  )
}

export default TrendingTopics;
