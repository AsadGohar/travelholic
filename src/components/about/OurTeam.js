import React from 'react'
import "./OurTeam.css";
import { Link } from 'react-router-dom';

function OurTeam() {
    return (
        <div className="container about-our-team-wrap mt-2 ">
            <div className="row d-flex justify-content-center">
                <h2 className="display-4">Meet our team</h2>
            </div>
            <div class="container bootdey">
                <div class="row">
                    <div class="col-md-4 mt-4 pt-2">
                        <div class="team text-center rounded p-3 py-4">
                            <img src={"images/team-asad.jpg"} class="img-fluid avatar avatar-medium shadow rounded-pill" alt="" />
                            <div class="content mt-3">
                                <h4 class="title mb-0">Asad Gohar</h4>
                                <small class="text-muted">Founder</small>
                                <ul class="list-unstyled mt-3 social-icon social mb-0">
                                    <li class="list-inline-item"><a href="#" class="rounded"><i class="fab fa-facebook" title="Facebook"></i></a></li>
                                    <li class="list-inline-item"><a href="#" class="rounded"><i class="fab fa-instagram" title="Instagram"></i></a></li>
                                    <li class="list-inline-item"><a href="#" class="rounded"><i class="fab fa-twitter-square" title="Twitter"></i></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div class="col-md-4 mt-4 pt-2">
                        <div class="team text-center rounded p-3 py-4">
                            <img src={"images/team-faisal.jpeg"} class="img-fluid avatar avatar-medium shadow rounded-pill" alt="" />
                            <div class="content mt-3">
                                <h4 class="title mb-0">Shah Faisal</h4>
                                <small class="text-muted">Founder</small>
                                <ul class="list-unstyled mt-3 social-icon social mb-0">
                                    <li class="list-inline-item"><a href="#" class="rounded"><i class="fab fa-facebook" title="Facebook"></i></a></li>
                                    <li class="list-inline-item"><a href="#" class="rounded"><i class="fab fa-instagram" title="Instagram"></i></a></li>
                                    <li class="list-inline-item"><a href="#" class="rounded"><i class="fab fa-twitter-square" title="Twitter"></i></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div class="col-md-4 mt-4 pt-2">
                        <div class="team text-center rounded p-3 py-4">
                            <img src={"images/team-safa.jpg"} class="img-fluid avatar avatar-medium shadow rounded-pill" alt="" />
                            <div class="content mt-3">
                                <h4 class="title mb-0">Safa Naeem</h4>
                                <small class="text-muted">Founder</small>
                                <ul class="list-unstyled mt-3 social-icon social mb-0">
                                    <li class="list-inline-item"><a href="#" class="rounded"><i class="fab fa-facebook" title="Facebook"></i></a></li>
                                    <li class="list-inline-item"><a href="#" class="rounded"><i class="fab fa-instagram" title="Instagram"></i></a></li>
                                    <li class="list-inline-item"><a href="#" class="rounded"><i class="fab fa-twitter-square" title="Twitter"></i></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default OurTeam;