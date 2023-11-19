function ServicesSection() {
    return(
        <section className="services-home">
            <div className="container">
                <div className="section-title">
                    <h3>Property</h3>
                    <h2>Services</h2>
                </div>
                <div className="row">
                    <div className="col-lg-4 col-md-12 m-top-0 m-bottom-40" data-aos="fade-up" data-aos-delay="150">
                        <div className="service bg-light-2 border-1 border-light box-shadow-1 box-shadow-2-hover">
                            <div className="media">
                                <i className="fa fa-home bg-base text-white rounded-100 box-shadow-1 p-top-5 p-bottom-5 p-right-5 p-left-5"></i>
                            </div>
                            <div className="agent-section p-top-35 p-bottom-30 p-right-25 p-left-25">
                                <h4 className="m-bottom-15 text-bold-700">Houses</h4>
                                <p>Nonec pede justo fringilla vel aliquet nec vulputate eget arcu in enim justo rhoncus ut imperdiet venenatis vitae justo.</p>
                                <a className="text-base text-base-dark-hover text-size-13" href="properties-full-list.html">Read More <i className="fa fa-long-arrow-right"></i></a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-12 m-top-40 m-bottom-40" data-aos="fade-up" data-aos-delay="250">
                        <div className="service bg-light-2 border-1 border-light box-shadow-1 box-shadow-2-hover">
                            <div className="media">
                                <i className="fas fa-building bg-base text-white rounded-100 box-shadow-1 p-top-5 p-bottom-5 p-right-5 p-left-5"></i>
                            </div>
                            <div className="agent-section p-top-35 p-bottom-30 p-right-25 p-left-25">
                                <h4 className="m-bottom-15 text-bold-700">Apartments</h4>
                                <p>Nonec pede justo fringilla vel aliquet nec vulputate eget arcu in enim justo rhoncus ut imperdiet venenatis vitae justo.</p>
                                <a className="text-base text-base-dark-hover text-size-13" href="properties-full-list.html">Read More <i className="fa fa-long-arrow-right"></i></a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-12 m-top-40 m-bottom-40 commercial" data-aos="fade-up" data-aos-delay="350">
                        <div className="service bg-light-2 border-1 border-light box-shadow-1 box-shadow-2-hover">
                            <div className="media">
                                <i className="fas fa-warehouse bg-base text-white rounded-100 box-shadow-1 p-top-5 p-bottom-5 p-right-5 p-left-5"></i>
                            </div>
                            <div className="agent-section p-top-35 p-bottom-30 p-right-25 p-left-25">
                                <h4 className="m-bottom-15 text-bold-700">Commercial</h4>
                                <p>Nonec pede justo fringilla vel aliquet nec vulputate eget arcu in enim justo rhoncus ut imperdiet venenatis vitae justo.</p>
                                <a className="text-base text-base-dark-hover text-size-13" href="properties-full-list.html">Read More <i className="fa fa-long-arrow-right"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ServicesSection
