import React from 'react'
import './TrendingTopic.css'

import TopicCard from "./TopicCard";

function TrendingTopics() {
  return (
    <div>
      <div className="container mt-4 bg-white mb-4 h-auto h-100"  >
        <h2 className="text-center mb-4 pt-3">Trending Topics</h2>
        <div className = "row justify-content-around">
         <TopicCard/>
         <TopicCard/>
         <TopicCard/>
        </div>
        {/* <div class="float-right">
          <a class="btn text-primary font-weight-bold" href="x">View All</a>
        </div> 
        
        add style={{overflow: "auto"}} in parent div */}
      </div>
    </div>
  )
}

export default TrendingTopics;
