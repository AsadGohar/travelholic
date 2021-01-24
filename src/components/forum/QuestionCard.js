import React from 'react'
import { Link } from 'react-router-dom';

import "./QuestionCard.css"

function QuestionCard(props) {

  return (
    <div className=" row mb-2 ">
      <div className="pt-1 pr-1 pl-1 card mx-4 mt-3 rounded card-border single-question-wrap"  >
        <div className="row no-gutters ">
          {props.detail ?

            <div id="detail-img-div" className=" col-md-1 col-sm-5" >
              <img id="qc-img" src={"images/1.jpg"} className="card-img" alt="TBD"  ></img>
            </div> :

            <div id="img-div" className=" col-md-1 col-sm-5" >
              <img id="qc-img" src={"images/1.jpg"} className="card-img" alt="TBD"  ></img>
            </div>}

          <div className="col"  >
            <Link className="text-decoration-none text-body" to="/question">

              {props.detail ?
                (
                  <div>
                    <div className="detail-card-body">
                      <div>
                        <span id="name" className="">Shah Faisal</span>
                      </div>
                      <div>
                        <p id="detail-question">Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
                        <p id="detail-description">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
                      </div>
                      <div>
                        <span className="posted-text">Posted : <span className="date" >19-25-1598</span></span>

                        <span className="font-weight-light ml-3 view"><i className="fa fa-eye" aria-hidden="true"></i> 1.8k Views</span>
                      </div>
                    </div>
                  </div>
                ) :
                (
                  <div>
                    <div className="card-body">
                      <div>
                        <span id="name" className="">Shah Faisal</span>
                      </div>
                      <div>
                        <p id="question">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled</p>
                      </div>
                      <div id="info" >
                        <span className="posted-text">Posted : <span className="date"> 19-25-1598</span></span>

                        <span className="font-weight-light ml-3 view"><i class="fa fa-eye" aria-hidden="true"></i> 1.8k Views</span>
                      </div>
                    </div>
                  </div>
                )
              }

            </Link>
          </div>
          <div class="dropdown border-0 float-right">
            <button style={{ backgroundColor: "transparent" }} class=" border-0" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              <svg className="float-right" xmlns="http://www.w3.org/2000/svg" width="16" h eight="16" fill="currentColor" class="bi bi-three-dots-vertical" viewBox="0 0 16 16">
                <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z" />
              </svg>
            </button>
            <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
              <a class="dropdown-item" href="7">Report User</a>
              <a class="dropdown-item" href="#7">Report Question</a>
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}

export default QuestionCard







