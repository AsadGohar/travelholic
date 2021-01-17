import React from 'react'
import './TrendingTopic.css'

import TopicCard from "./TopicCard";

function TrendingTopics() {
  return (
    <div>
      <div id="outer-div" className="container pt-4 pl-3 pr-3 bg-white mb-4">
        <div className="row justify-content-around">
          <TopicCard />
          <TopicCard />
          <TopicCard />
        </div>
      </div>
    </div>
  )
}

export default TrendingTopics;
