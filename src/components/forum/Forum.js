import React from 'react'
import "./Forum.css"

//Forum's components imported here
import Searchbar from "../header/Searchbar"
import TrendingTopics from "./TrendingTopics"
import TopQuestions from "./TopQuestions";
import { Link } from 'react-router-dom'

function Forum() {
	return (
		<div className="container">
			<Searchbar />
			<div className="row">
				{/* ask a question floating button */}
				<div className="col-md-2 forum-left-column pt-5">
					<div className="mt-5 d-flex justify-content-center ">
						<Link id="ask-btn" className="btn" to="/postquestion">Ask A Question</Link>
					</div>
				</div>
				{/* forum content starts here */}
				<div className="col-md-10 forum-main-column pt5">
					<div className="row d-flex justify-content-center">
						<div className="col-12">
							{/* trending topic here */}
							<h2 className="text-center mb-4 pt-3">Trending Topics</h2>
							<TrendingTopics />
							{/* top question here */}
							<h2 className="text-center">Top Questions</h2>
							<TopQuestions />
						</div>
					</div>
				</div>
				{/* forum content ends here */}
			</div>

		</div>
	);
}


export default Forum;


