import React from 'react'
import "./Forum.css"

//Forum's components imported here
import Searchbar from "../header/Searchbar"
import TrendingTopics from "./TrendingTopics"
import TopQuestion from "./TopQuestion";
import { Link } from 'react-router-dom'

function Forum() {
	return (
		<div className="container">
			<Searchbar />
			<div className="row forum-wrap">
				<div className="col-md-2 justify-content-center">
					<div className="">
						<Link id="ask-btn" className="btn" to="/postquestion">Ask A Question</Link>
					</div>
				</div>
				<div className="col-md-10">
					<div className="">
						<h2 className="text-center mb-4 pt-3">Trending Topics</h2>
						<TrendingTopics />
						<h2 className="text-center">Top Questions</h2>
						<TopQuestion />
					</div>
				</div>
			</div>
		</div>
	);
}


export default Forum;
