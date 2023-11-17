import not_found_image from '../../../public/images/bg/error-404.jpg';
import { Link } from "react-router-dom";

function NotFound404() {
    return (
        <div id="wrapper">
            <section className="notfound pt-0">
                <div className="container">
                    <div className="top-headings text-center">
                        <img src={not_found_image} alt="Page 404" /> {/* Self-closing tag */}
                        <h3 className="text-center">Page Not Found!</h3>
                        <p className="text-center">Oops! Looks like something went wrong. We can’t seem to find the page you’re looking for. Make sure that you have typed the correct URL.</p>
                    </div>
                    <div className="port-info">
                        <Link to='/' className="btn btn-primary btn-lg">Go To Home</Link>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default NotFound404;
