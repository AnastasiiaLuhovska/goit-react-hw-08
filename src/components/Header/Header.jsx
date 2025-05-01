import AuthNav from "../AuthNav/AuthNav.jsx";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import {
  selectIsLoggedIn,
  selectUserName,
} from "../../redux/auth/selectors.js";
import UserNav from "../UserNav/UserNav.jsx";
import clsx from "clsx";

const Header = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const name = useSelector(selectUserName);

  const getNavLinkClass = ({ isActive }) =>
    clsx(
      "relative",
      isActive &&
        "after:absolute after:content-[''] after:bg-blue-600 after:bottom-0  after:w-full after:h-0.5 after:left-0",
    );

  return (
    <nav className="bg-gray-800 text-white w-full py-4 flex justify-center h-20">
      <div className="w-300 flex justify-between text-lg items-center">
        <NavLink to="/" className={getNavLinkClass}>
          Home
        </NavLink>

        {isLoggedIn && <p className="text-[20px]">Welcome, {name}</p>}
        {isLoggedIn ? (
          <UserNav getNavLinkClass={getNavLinkClass} />
        ) : (
          <AuthNav getNavLinkClass={getNavLinkClass} />
        )}
      </div>
    </nav>
  );
};

export default Header;
