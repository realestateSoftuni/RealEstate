function OurStory(){
    return (
        <div>
            <section className="headings">
                <div className="text-heading text-center">
                    <div className="container">
                        <h1>About Our Company</h1>
                    </div>
                </div>
            </section>
        <section className="about-us fh">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-md-12 who-1">
                        <div>
                            <h2 className="text-left mb-4">About <span>Us</span></h2>
                        </div>
                        <div className="pftext">
                            <p> Welcome to Home-Estate, where we turn dreams of home ownership into reality.
                                I'm Richard Burnet, the proud manager of this exceptional team, and it's my pleasure
                                to introduce you to the heart and soul of our real estate family.</p>

                            <p>Hello, and thank you for considering Home-Estate for your real estate needs. As the manager,
                                I want to personally assure you that our commitment to excellence is at the forefront of everything we do.

                                Having spent 10 years in the real estate industry, I've witnessed the transformative
                                power of finding the perfect home or making a smart investment. It's not just about transactions -
                                it's about helping you embark on a journey that will shape your future and create lasting memories.</p>
                        </div>
                        <div className="box bg-2">
                            <img src="images/signature.png" className="ml-5" alt="" />
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-12 col-xs-12">
                        <div className="wprt-image-video w50">
                            <img alt="image" src="images/bg/bg-video.jpg" />
                                <a className="icon-wrap popup-video popup-youtube" href="https://www.youtube.com/watch?v=2xHQqYRcrx4">
                                    <i className="fa fa-play"></i>
                                </a>
                                <div className="iq-waves">
                                    <div className="waves wave-1"></div>
                                    <div className="waves wave-2"></div>
                                    <div className="waves wave-3"></div>
                                </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </div>
    );
}

export default OurStory
