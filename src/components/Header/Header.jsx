import AuthNav from "../AuthNav/AuthNav.jsx";
import {NavLink} from "react-router-dom";
import {useSelector} from "react-redux";
import {selectIsLoggedIn, selectUserName} from "../../redux/auth/selectors.js";
import UserNav from "../UserNav/UserNav.jsx";

const Header = () => {
   const isLoggedIn = useSelector(selectIsLoggedIn)
    const name = useSelector(selectUserName)

    return <nav className="bg-gray-800 text-sm font-medium text-white w-200 flex gap-4 justify-center">
        <NavLink to='/'>Home</NavLink>
        {isLoggedIn && <h2>Welcome, {name}</h2>}
        {isLoggedIn ? <UserNav/> : <AuthNav/>}
    </nav>;
};

export default Header;

//oygui@gmail.com