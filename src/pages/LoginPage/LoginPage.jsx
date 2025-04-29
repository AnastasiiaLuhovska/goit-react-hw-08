import { login } from "../../redux/auth/operations.js";
import LoginForm from "../../components/LoginForm/LoginForm.jsx";
import { useDispatch, useSelector } from "react-redux";
import { selectIsLoggedIn } from "../../redux/auth/selectors.js";
import { Navigate } from "react-router-dom";

const LoginPage = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const dispatch = useDispatch();

  if (isLoggedIn) {
    return <Navigate to="/" />;
  }

  const onSubmit = (values) => {
    dispatch(login(values));
  };
  return (
    <div className="w-full flex justify-center p-4">
      <LoginForm onSubmit={onSubmit} />
    </div>
  );
};

export default LoginPage;
