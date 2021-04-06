import React from 'react'
import { Link } from 'react-router-dom';
import "./MostViewedQuestionCard.css"

function MostViewedQuestionCard(props) {

  const {user,statement,description,createdAt,numberOfViews,_id}=props.data
  console.log(user,statement,description,createdAt)
  // const post = createdAt.substring(0, 10)
  
  return (
    <div className=" row mb-2 ">
      <div className="pt-1 pr-1 pl-1 card mx-4 mt-3 rounded card-border single-question-wrap"  >
        <div className="row no-gutters ">
          <div id="img-div" className=" col-md-1 col-sm-5" >
          {
            user[0] && <img id="qc-img" src={`http://localhost:4000/public/images/users/${user[0].display_image_name}`} className="card-img" alt="TBD"  ></img>
          }
          </div>
          <div className="col"  >
            <Link className="text-decoration-none text-body" to={`/question/${_id}`}>
              <div>
                <div className="card-body">
                  <div>
                    <span id="name" className="">{user && user[0].name}</span>
                  </div>
                  <div>
                    <p id="question">{statement}</p>
                  </div>
                  <div id="info" >
                    <span className="posted-text">Posted : <span className="date"> {createdAt && createdAt.substring(0,10)}</span></span>
                    <span className="font-weight-light ml-3 view"><i className="fa fa-eye" aria-hidden="true"></i> {numberOfViews} Views</span>
                  </div>
                </div>
              </div>
            </Link>
          </div>
          {/* triple dot menu starts here outside the Lnk component */}
          <div className="dropdown border-0 float-right">
            <button id="triple-dot-menu"  className=" border-0" type="button"  data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              <svg className="float-right bi bi-three-dots-vertical" xmlns="http://www.w3.org/2000/svg" width="16" h eight="16" fill="currentColor"  viewBox="0 0 16 16">
                <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z" />
              </svg>
            </button>
            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
              {/* dropdown items here */}
              <a className="dropdown-item" href="7">Report User</a>
              <a className="dropdown-item" href="#7">Report Question</a>
            </div>
          </div>
          {/* triple dot menu ends here */}
        </div>
      </div>
    </div>

  )
}

export default MostViewedQuestionCard
