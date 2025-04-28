import AuthNav from "../AuthNav/AuthNav.jsx";
import {NavLink} from "react-router-dom";

const Header = () => {
    return <nav className="bg-gray-800 text-sm font-medium text-white w-200 flex gap-4 justify-center">
        <NavLink to='/'>Home</NavLink>
        <AuthNav/>
    </nav>;
};

export default Header;