import React from 'react'
import { Link } from 'react-router-dom';

function QuestionCard(props) {
  
  return (
      <div className="row mb-2 ">
        <div className="card mx-4 mt-3 rounded" style={{border:"0"}} >
        <div className="row no-gutters">
            <div className="col-md-2 mt-2 ml-2 mb-2" >
              <img src={"images/1.jpg"} className="card-img img-fluid" alt="TBD"  ></img>
            </div>
            <div className="col mr-1" style={{overflow: "auto"}} >
            <div class="dropdown border-0 float-right">
                  <button style={{backgroundColor:"transparent"}} class=" border-0" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  
                    <svg className="float-right" xmlns="http://www.w3.org/2000/svg" width="16" h  eight="16" fill="currentColor" class="bi bi-three-dots-vertical" viewBox="0 0 16 16">
                    <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"/>
                    </svg>
                  </button>
                  <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                    <a class="dropdown-item" href="7">Report User</a>
                    <a class="dropdown-item" href="#7">Report Question</a>
                  </div>
                </div>
              
            <Link className="text-decoration-none text-body" to="/question">
              <div className="card-body">
                <div> 
                  <h5 className="">Shah Faisal</h5>
                </div>
                {props.detail ? (<div>
                  <div>
                  <p className="font-weight-bold">Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
                  <p className="">Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
                </div>
              <span className="font-weight-bold" style={{color:"green"}}>Posted : <span style={{color:"black"}} >19-25-1598</span></span>

                <span className="font-weight-bold ml-3"><i class="fa fa-eye" aria-hidden="true"></i> 1.8k Views</span>
                </div>
               ): 
				  (<div>
            <div>
                  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled</p>
                </div>
              <span className="font-weight-bold" style={{color:"green"}}>Posted : <span style={{color:"black"}} >19-25-1598</span></span>

                <span className="font-weight-bold ml-3"><i class="fa fa-eye" aria-hidden="true"></i> 1.8k Views</span>
          </div>)  } 
                
                    

                
                  
                
              </div>
            </Link>
            </div>
          </div>
        </div>
      </div>
    
  )
}

export default QuestionCard







