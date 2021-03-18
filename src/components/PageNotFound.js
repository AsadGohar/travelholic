import React from 'react'
import {Link} from "react-router-dom";

function PageNotFound() {
  return (
    <div className="container jumbotron mt-4">
      <h1 className="display-4">404 Page Not Found!</h1>
      <p className="lead">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin at rutrum nulla. Vestibulum vulputate odio eu risus aliquet, nec finibus neque viverra. Donec varius ex arcu, at congue leo venenatis et.  </p>
      <hr className="my-4"/>
      <p>Praesent mollis tortor enim, a fermentum ipsum ultrices quis. Ut faucibus, leo in iaculis posuere, turpis leo blandit magna, in congue tellus diam vel metus. .</p>
      <p className="lead">
      <Link className="btn btn-primary btn-lg" to ="/" role="button">Back To Home</Link>
      </p>
    </div>
  )
}

export default PageNotFound
