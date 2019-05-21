import React from 'react'

class Profile extends React.Component {

    render() {
        return (
            <div>
                <span className="heading-meta">My Profile</span>
                <h2>Who am I?</h2>
                <hr/>
                <br/>
                <section className="colorlib-about" data-section="profile">
                <div className="colorlib-narrow-content">
                    <div className="row fadeInLeft animated" data-animate-effect="fadeInLeft"> 
                    <div className="col-md-12">
                    <div className="about-desc" >
                            <p>Hi ! I am Amalia Rizkia. I'm a college student at Universitas Gadjah Mada, Yogyakarta, Indonesia. My study is Computer Science and currently in fourth semester.</p>
                            <p>I'm from Klaten, Central Java, but lived in Yogyakarta now. </p>
                            </div>
                    </div>
                    </div>
                </div>
                <div className="colorlib-narrow-content">
                    <div className="row row-pt-md">
								<div className="col-md-3 animate-box fadeInLeft animated" data-animate-effect="fadeInLeft">
									 <a href=""><div className="services color-1">
										<span className="icon2"><i className="icon-device-laptop"></i></span>
										<h3>Web Developments</h3>
									</div>
                                    </a>
								</div>
								<div className="col-md-3 animate-box fadeInRight animated" data-animate-effect="fadeInRight">
                                <a href=""><div className="services color-2">
										<span className="icon2"><i className="icon-android"></i></span>
										<h3>Android</h3>
									</div>
                                </a>
								</div>
								<div className="col-md-3 animate-box fadeInUp animated" data-animate-effect="fadeInTop">
                                <a href=""><div className="services color-3">
										<span className="icon2"><i className="icon-book2"></i></span>
										<h3>Reading</h3>
									</div>
                                </a>
								</div>
								<div className="col-md-3 animate-box fadeInUp animated" data-animate-effect="fadeInBottom">
                                <a href=""><div className="services color-4">
										<span className="icon2"><i className="icon-headphones"></i></span>
										<h3>Music</h3>
									</div>
                                    </a>
								</div>
                    </div>
                </div>
                </section>
              
            </div>
        )
    }
}

export default Profile;