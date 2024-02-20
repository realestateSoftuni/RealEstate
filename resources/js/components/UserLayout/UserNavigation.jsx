import logo from '../../../assets/FullLogo_Transparent_NoBuffer.png'
import {Link} from "react-router-dom";
import {useState} from "react";

function UserNavigation(){
    const [mainMenuOpen, setMainMenuOpen] = useState(false);

    const openHandler = () => {
        setMainMenuOpen(!mainMenuOpen)
    }

    return(
        <>
            <div className="dash-content-wrap">
                <header id="header-container" className="db-top-header">
                    <div id="header">
                        <div className="container-fluid">
                            <div className="left-side">
                                <div id="logo">
                                    <Link to="/"><img src={logo} alt=""/></Link>
                                </div>
                                <div className="mmenu-trigger">
                                    <button onClick={openHandler} className={`hamburger hamburger--collapse ${mainMenuOpen ? 'is-active' : ''}`} type="button">
                                        <span className="hamburger-box">
                                            <span className="hamburger-inner"></span>
                                        </span>
                                    </button>
                                </div>
                                <nav id="navigation" className="style-1">
                                    <ul id="responsive">
                                        <li><Link to="/">Home</Link></li>
                                        <li><Link to="/about-us">About us</Link></li>
                                        <li><Link to="/property">Property</Link></li>
                                        <li><Link to="/blog">Blog</Link></li>
                                        <li><Link to="/contact-us">Contact</Link></li>
                                        <li className="d-none d-xl-none d-block d-lg-block"><a href="login.html">Login</a></li>
                                        <li className="d-none d-xl-none d-block d-lg-block"><a href="register.html">Register</a></li>
                                        <li className="d-none d-xl-none d-block d-lg-block mt-5 pb-4 ml-5 border-bottom-0"><Link to="/add-property" className="button border btn-lg btn-block text-center">Add Listing<i className="fas fa-laptop-house ml-2"></i></Link></li>
                                    </ul>
                                </nav>
                                <div className="clearfix"></div>
                            </div>
                        </div>
                    </div>
                </header>
            </div>
            <div className="clearfix"></div>
        </>
    );
}

export default UserNavigation
