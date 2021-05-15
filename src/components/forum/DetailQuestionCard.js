import React from 'react'
import { imagePath } from '../support-components/axios'

// import QuestionCard from "./QuestionCard";

function DetailQuestionCard(props) {
  const {user,statement,description,createdAt,views} = props.data
  return (
    <div className=" row mb-2 ">
      <div className="pt-1 pr-1 pl-1 card mx-4 mt-3 rounded card-border single-question-wrap"  >
        <div className="row no-gutters ">
            <div id="detail-img-div" className=" col-md-1 col-sm-5" >
              {
                user && <img id="qc-img" src={`${imagePath}/uploads/users//${user.display_image_name}`} className="card-img" alt="TBD"  ></img>
              }
            </div> 
          <div className="col"  >
            <div>
              <div className="detail-card-body">
                <div>
                  <span id="name" className="">{user && user.name}</span>
                </div>
                <div>
                  <p id="detail-question">{statement} </p>
                  <p id="detail-description">{description}</p>
                </div>
                <div>
                  <span className="posted-text">Posted : <span className="date" >{createdAt && createdAt.substring(0, 10)}</span></span>

                  <span className="font-weight-light ml-3 view"><i className="fa fa-eye" aria-hidden="true"></i> {views && views.length} Views</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default DetailQuestionCard
