import HeaderBar from "./HeaderBar.jsx";
import Footer from "./Footer.jsx";
const LayoutAll = ({ children }) => {
    return (
        <>
            <HeaderBar />
            {children}
            <Footer />
        </>
    );
};

export default LayoutAll;
