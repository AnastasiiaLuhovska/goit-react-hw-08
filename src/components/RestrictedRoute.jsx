import {useSelector} from "react-redux";
import {selectIsLoggedIn} from "../redux/auth/selectors.js";
import {Navigate} from "react-router-dom";

const RestrictedRoute = ({component, redirect}) => {
    const isLoggedIn = useSelector(selectIsLoggedIn)
    if(!isLoggedIn) return component
    return  <Navigate to={redirect}/>
};

export default RestrictedRoute;