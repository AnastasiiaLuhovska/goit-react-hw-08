import { NavLink } from "react-router-dom";

const AuthNav = ({ getNavLinkClass }) => {
  return (
    <div className="flex gap-4 items-center">
      <NavLink to="/login" className={getNavLinkClass}>
        Login
      </NavLink>
      <NavLink to="/register" className={getNavLinkClass}>
        Register
      </NavLink>
    </div>
  );
};

export default AuthNav;
