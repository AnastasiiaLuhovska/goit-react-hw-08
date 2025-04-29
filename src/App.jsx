import "./App.css";
import Header from "./components/Header/Header.jsx";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage.jsx";
import LoginPage from "./pages/LoginPage/LoginPage.jsx";
import RegisterPage from "./pages/RegisterPage/RegisterPage.jsx";
import ContactsPage from "./pages/ContactsPage/ContactsPage.jsx";
import { useDispatch, useSelector } from "react-redux";
import { refresh } from "./redux/auth/operations.js";
import { selectIsLoading, selectIsRefreshing } from "./redux/auth/selectors.js";
import { useEffect } from "react";
import PrivateRoute from "./components/PrivateRoute.jsx";
import RestrictedRoute from "./components/RestrictedRoute.jsx";
import { Toaster } from "react-hot-toast";
import NotFoundPage from "./components/NotFoundPage/NotFoundPage.jsx";
import Loader from "./components/Loader/Loader.jsx";

function App() {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectIsRefreshing);
  const isLoading = useSelector(selectIsLoading);

  useEffect(() => {
    dispatch(refresh());
  }, [dispatch]);

  return isRefreshing ? null : (
    <>
      <Header />
      {isLoading ? (
        <Loader />
      ) : (
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route
            path="/login"
            element={
              <RestrictedRoute component={<LoginPage />} redirect="/contacts" />
            }
          />
          <Route
            path="/register"
            element={
              <RestrictedRoute
                component={<RegisterPage />}
                redirect="/contacts"
              />
            }
          />
          <Route
            path="/contacts"
            element={
              <PrivateRoute>
                <ContactsPage />
              </PrivateRoute>
            }
          />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      )}
      <Toaster />
    </>
  );
}

export default App;
