import { useDispatch, useSelector } from "react-redux";
import { signUp } from "../../redux/auth/operations.js";
import RegisterForm from "../../components/RegisterForm/RegisterForm.jsx";
import { selectIsLoggedIn } from "../../redux/auth/selectors.js";
import { Navigate } from "react-router-dom";

const RegisterPage = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const dispatch = useDispatch();

  if (isLoggedIn) {
    return <Navigate to="/" />;
  }

  const onSubmit = (values) => {
    dispatch(signUp(values));
  };
  return (
    <div className="w-full flex justify-center p-4">
      <RegisterForm onSubmit={onSubmit} />
    </div>
  );
};

export default RegisterPage;
