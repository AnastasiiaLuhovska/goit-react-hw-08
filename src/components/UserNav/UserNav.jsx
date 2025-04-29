import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logout } from "../../redux/auth/operations.js";

const UserNav = ({ getNavLinkClass }) => {
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(logout());
  };
  return (
    <div className="flex gap-4 items-center">
      <NavLink to="/contacts" className={getNavLinkClass}>
        Contacts
      </NavLink>
      <button
        onClick={handleClick}
        className="h-10 flex items-center text-black hover:text-blue-700 "
      >
        Logout
      </button>
    </div>
  );
};

export default UserNav;
