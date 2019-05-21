import React from 'react'

class Contact extends React.Component {

    render() {
        return (
            <div>
                <span className="heading-meta">Get in Touch</span>
                <h2>Contact Info</h2>
                <hr/>
                <br/>
                <section className="colorlib-contact" data-section="contact">
                <div className="colorlib-narrow-content">
                    <div className="row">
                    <div className="col-md-12">
                        <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box fadeInLeft animated" data-animate-effect="fadeInLeft">
                        <div className="col-md-12">
                        </div>
						</div>
					</div>
					<div className="row">
						<div className="col-md-5">
						<div className="colorlib-feature colorlib-feature-sm animate-box fadeInLeft animated" data-animate-effect="fadeInLeft">
								<div className="colorlib-icon">
								<i className="icon-at"/>
								</div>
								<div className="colorlib-text">
									<p><a href="gmail.com/">amalia.rizkia@mail.ugm.ac.id</a></p>
								</div>
							</div>
							<div className="colorlib-feature colorlib-feature-sm animate-box fadeInLeft animated" data-animate-effect="fadeInLeft">
								<div className="colorlib-icon">
								<i className="icon-linkedin2"/>
								</div>
								<div className="colorlib-text">
									<p><a href="linkedin.com/in/amaliarizkia98">Amalia Rizkia</a></p>
								</div>
							</div>
							<div className="colorlib-feature colorlib-feature-sm animate-box fadeInLeft animated" data-animate-effect="fadeInLeft">
								<div className="colorlib-icon">
									<i className="icon-github"/>
								</div>
								<div className="colorlib-text">
									<p><a href="github.com/amalxx123">Amalia Rizkia</a></p>
								</div>
							</div>
							<div className="colorlib-feature colorlib-feature-sm animate-box fadeInLeft animated" data-animate-effect="fadeInLeft">
								<div className="colorlib-icon">
									<i className="icon-twitter2"/>
								</div>
								<div className="colorlib-text">
									<p><a href="twitter.com/amriz8991">@amriz8991</a></p>
								</div>
							</div>
						</div>
						<div className="col-md-7 col-md-push-1">
							<div className="row">
							<div className="col-md-6 col-md-push-1">
								<span className="heading-meta animate-box fadeInRight animated" data-animate-effect="fadeInRight">Say 'Hi' to Amalia :) </span>
							</div>
								<div className="col-md-10 col-md-offset-1 col-md-pull-1 animate-box fadeInRight animated" data-animate-effect="fadeInRight">
									<form action="" name="send-email">
										<div className="form-group">
											<input type="text" id="name" name="name"className="form-control" placeholder="Name" />
										</div>
										<div className="form-group">										
											<input type="email" name="email" id="email" className="form-control" placeholder="Email" />
										</div>
										<div className="form-group">
											<input type="text" id="subject" name="subject" className="form-control" placeholder="Subject" />
										</div>
										<div className="form-group">
											<textarea name="message" id="message" cols="30" rows="7" className="form-control" placeholder="Message" />
										</div>
										<div className="form-group">
											<input type="submit" aria-label="submit" id="submit" name="submit" className="btn btn-primary btn-send-message" value="Send Message" />
										</div>
									</form>
								</div>	
							</div>
						</div>
					</div>
				</div> 
                </div>    
                </section> 
            </div>
        )
    }
}

export default Contact;