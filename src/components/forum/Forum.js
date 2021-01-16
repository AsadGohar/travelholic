import React from 'react'
import "./Forum.css"

//Forum's components imported here
import Searchbar from "../header/Searchbar"
import TrendingTopics from "./TrendingTopics"
import TopQuestion from "./TopQuestion";
import { Link } from 'react-router-dom'

function Forum() {
    return (
			<div>
				<Searchbar/>
				<div className=""  style={{overflow: "auto"}}>
					
						<Link id="ask-btn" className="btn" to="/postquestion">Ask A Question</Link>
					
					<div className="float-right ">
						<div className="">
							<TrendingTopics />
							<hr className="mt-2 mb-3 border-darken" style={{borderWidth:"2px"}}/>
							<TopQuestion/>
						</div>
        	</div>
				</div>
		</div>
  );
}


export default Forum;
