import picture from '../../../assets/NewYork.jpg'
import picture2 from '../../../assets/LA.jpg'
import picture3 from '../../../assets/SF.jpg'
import picture4 from '../../../assets/Miami.jpg'

function PopularPlaces() {
    return(
        <section className="popular-places home18">
            <div className="container-fluid">
                <div className="section-title">
                    <h3>Popular</h3>
                    <h2>Places</h2>
                </div>
                <div className="row">
                    <div className="col-md-12">
                    </div>
                    <div className="col-sm-6 col-md-6 col-lg-4 col-xl" data-aos="zoom-in" data-aos-delay="150">
                        <a href="#" className="img-box hover-effect">
                            <img src={picture} className="img-fluid w100" alt=""/>
                                <div className="listing-badges">
                                    <span className="featured">Featured</span>
                                </div>
                                <div className="img-box-content visible">
                                    <h4>New York City </h4>
                                    <span>203 Properties</span>
                                </div>
                        </a>
                    </div>
                    <div className="col-sm-6 col-md-6 col-lg-4 col-xl" data-aos="zoom-in" data-aos-delay="250">
                        <a href="#" className="img-box hover-effect">
                            <img src={picture2} className="img-fluid w100" alt=""/>
                                <div className="img-box-content visible">
                                    <h4>Los Angeles</h4>
                                    <span>307 Properties</span>
                                </div>
                        </a>
                    </div>
                    <div className="col-sm-6 col-md-6 col-lg-4 col-xl" data-aos="zoom-in" data-aos-delay="350">
                        <a href="#" className="img-box hover-effect no-mb">
                            <img src={picture3} className="img-fluid w100" alt=""/>
                                <div className="img-box-content visible">
                                    <h4>San Francisco </h4>
                                    <span>409 Properties</span>
                                </div>
                        </a>
                    </div>
                    <div className="col-sm-6 col-md-6 col-lg-4 col-xl" data-aos="zoom-in" data-aos-delay="450">
                        <a href="#" className="img-box hover-effect no-mb x3">
                            <img src={picture4} className="img-fluid w100" alt=""/>
                                <div className="listing-badges">
                                    <span className="featured">Featured</span>
                                </div>
                                <div className="img-box-content visible">
                                    <h4>Miami</h4>
                                    <span>507 Properties</span>
                                </div>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default PopularPlaces
