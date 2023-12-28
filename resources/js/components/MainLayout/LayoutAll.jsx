import HeaderBar from "./HeaderBar.jsx";
import Footer from "./Footer.jsx";
const LayoutAll = ({ children }) => {
    return (
        <div>
            <HeaderBar />
            {children}
            <Footer />
        </div>
    );
};

export default LayoutAll;
