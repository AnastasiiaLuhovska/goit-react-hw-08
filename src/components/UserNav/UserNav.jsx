import {NavLink} from "react-router-dom";
import {useDispatch} from "react-redux";
import {logout} from "../../redux/auth/operations.js";

const UserNav = () => {
    const dispatch = useDispatch()
    const handleClick = ()=>{
        dispatch(logout())
    }
    return (
        <div>
            <NavLink to='/contacts'>Contacts</NavLink>
            <button onClick={handleClick}>Logout</button>
        </div>
    );
};

export default UserNav;