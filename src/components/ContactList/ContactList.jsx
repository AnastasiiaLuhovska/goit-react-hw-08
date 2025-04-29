import Contact from "../Contact/Contact.jsx";
import {
  selectError,
  selectFilter,
  selectFilteredContacts,
  selectLoading,
} from "../../redux/contacts/selectors.js";
import { useSelector } from "react-redux";
import Loader from "../Loader/Loader.jsx";

const ContactList = () => {
  const filteredUserData = useSelector(selectFilteredContacts);
  const isLoading = useSelector(selectLoading);
  const error = useSelector(selectError);
  const filter = useSelector(selectFilter);

  return (
    <>
      {isLoading && <Loader />}
      {error && <h2>{`Something went wrong.${error}`}</h2>}
      {filteredUserData.length === 0 && filter ? (
        <h2>We couldn't find any {filter}</h2>
      ) : (
        <ul>
          {filteredUserData.map((user) => (
            <Contact key={user.id} user={user} />
          ))}
        </ul>
      )}
    </>
  );
};

export default ContactList;
