import LayoutAll from "./MainLayout/LayoutAll.jsx";
import {Link} from "react-router-dom";

function Blog() {
    return (
        <LayoutAll>
            <section className="blog-section">
                <div className="container">
                    <div className="news-wrap">
                        <div className="row">
                            <div className="col-lg-12 col-md-12 col-xs-12">
                                <div className="news-item news-item-sm">
                                    <a className="news-img-link">
                                        <div className="news-item-img">
                                            <img className="resp-img" src="/images/blog/house-model-compass-plan-background-real-estate-concept.jpg" alt="blog image"/>
                                        </div>
                                    </a>
                                    <div className="news-item-text">
                                        <Link to="/navigating-the-real-estate-market"><h3>Navigating the Real Estate Market: A Comprehensive Guide for First-Time Homebuyers</h3></Link>
                                        <div className="dates">
                                            <span className="date">November 30, 2023 &nbsp;/</span>
                                            <ul className="action-list pl-0">
                                                <li className="action-item pl-2"><i className="fa fa-heart"></i>
                                                    <span>306</span></li>
                                                <li className="action-item"><i className="fa fa-comment"></i>
                                                    <span>34</span></li>
                                                <li className="action-item"><i className="fa fa-share-alt"></i>
                                                    <span>122</span></li>
                                            </ul>
                                        </div>
                                        <div className="news-item-descr">
                                            <p>Buying your first home is an exciting milestone, but it can also be a
                                                complex and overwhelming process. As a first-time homebuyer, understanding
                                                the ins and outs of the real estate market is crucial for making
                                                informed decisions. In this guide, we'll walk you through key considerations,
                                                helpful tips, and essential steps to help you navigate the real estate
                                                landscape with confidence.</p>
                                        </div>
                                        <div className="news-item-bottom">
                                            <Link to="/navigating-the-real-estate-market">
                                            <a className="news-link">Read more...</a> </Link>
                                            <div className="admin">
                                                <p>By, Karl Smith</p>
                                                <img src="images/testimonials/ts-1.jpg" alt=""/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="news-item news-item-sm">
                                    <a className="news-img-link">
                                        <div className="news-item-img">
                                            <img className="resp-img" src="/images/blog/modern-city-with-tall-buildings-glass-generative-ai.jpg" alt="blog image"/>
                                        </div>
                                    </a>
                                    <div className="news-item-text">
                                        <Link to="/embracing-the-future"><h3>Embracing the Future: Trends Reshaping the Real Estate Landscape</h3></Link>
                                        <div className="dates">
                                            <span className="date">November 20, 2023 &nbsp;/</span>
                                            <ul className="action-list pl-0">
                                                <li className="action-item pl-2"><i className="fa fa-heart"></i>
                                                    <span>306</span></li>
                                                <li className="action-item"><i className="fa fa-comment"></i>
                                                    <span>34</span></li>
                                                <li className="action-item"><i className="fa fa-share-alt"></i>
                                                    <span>122</span></li>
                                            </ul>
                                        </div>
                                        <div className="news-item-descr">
                                            <p>The real estate industry is dynamic and constantly evolving, shaped by technological advancements, changing demographics, and evolving consumer preferences. As we look to the future, several trends are reshaping the way we buy, sell, and interact with real estate. In this article, we'll explore some of these trends that are transforming the real estate landscape.</p>
                                        </div>
                                        <div className="news-item-bottom">
                                            <Link to="/embracing-the-future">
                                                <a className="news-link">Read more...</a> </Link>
                                            <div className="admin">
                                                <p>By, Karl Smith</p>
                                                <img src="images/testimonials/ts-1.jpg" alt=""/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </LayoutAll>
    )
}

export default Blog
