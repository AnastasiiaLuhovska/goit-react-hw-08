import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchData } from "../../redux/contacts/operations.js";
import ContactForm from "../../components/ContactForm/ContactForm.jsx";
import SearchBox from "../../components/SearchBox/SearchBox.jsx";
import ContactList from "../../components/ContactList/ContactList.jsx";
import { selectIsLoggedIn } from "../../redux/auth/selectors.js";
import { Navigate } from "react-router-dom";

const ContactsPage = () => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(selectIsLoggedIn);

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  if (!isLoggedIn) {
    return <Navigate to="/" />;
  }

  return (
    <div className="w-full flex justify-center">
      <div className="w-100 flex-column items-center p-4">
        <p className="text-[25px]">Phonebook</p>
        <ContactForm />
        <SearchBox />
        <ContactList />
      </div>
    </div>
  );
};

export default ContactsPage;
