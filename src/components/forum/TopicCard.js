import React from 'react'

function TopicCard() {
  return (
    <div>
       <div className="col mb-5">
            <div className="card shadow" style={{width: "18rem"}}>
              <img className="card-img-top rounded" src={"images/sample.jpg"} style={{height:"200px"}} alt="Card cap"/>
              <div className="card-body">
              <div class="col-12 text-center">
                <a class="btn text-dark font-weight-bold" href="x">Destinations</a>
              </div>
              {/* <h5 className="card-title text-center">Card title</h5>
              
              <a href="c" className="">Go somewhere</a> */}
              </div>
            </div>
          </div>

    </div>
  )
}

export default TopicCard
