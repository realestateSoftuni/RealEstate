import UserNavigation from "./UserNavigation.jsx";
import UserSideMenu from "./UserSideMenu.jsx";
import UserFooter from "./UserFooter.jsx";
const LayoutAll = ({ children }) => {
    return (
        <div>
            <UserNavigation />
            <UserSideMenu/>
            {children}
            <UserFooter />
        </div>
    );
};

export default LayoutAll;
