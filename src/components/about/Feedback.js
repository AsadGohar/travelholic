import React from 'react'
import "./Feedback.css";
import { Link } from 'react-router-dom';

function Feedback() {
    return (
        <div className="container contact-form bg-white">
            <div class="contact-image">
                <img src={"images/logo.png"} />
            </div>
            <form method="post">
                <h3>Drop Us a Message</h3>
               <div class="row">
                    <div class="col-md-6">
                        <div class="form-group">
                            <input type="text" name="txtName" class="form-control" placeholder="Your Name *"  />
                        </div>
                        <div class="form-group">
                            <input type="text" name="txtEmail" class="form-control" placeholder="Your Email *"  />
                        </div>
                        <div class="form-group">
                            <input type="text" name="txtPhone" class="form-control" placeholder="Your Phone Number *" />
                        </div>
                        
                    </div>
                    <div class="col-md-6">
                        <div class="form-group">
                            <textarea name="txtMsg" class="form-control" placeholder="Your Message *" style={{width: "100%", height: 150}}></textarea>
                        </div>
                        <div class="form-group ">
                            <input type="submit" name="btnSubmit" class="btnContact" value="Send Message" />
                        </div>
                    </div>
                </div>
            </form>
            
        </div>
    );
}

export default Feedback;