import { FcBusinessman } from "react-icons/fc";
import { FcIphone } from "react-icons/fc";
import { useDispatch } from "react-redux";
import { deleteData } from "../../redux/contacts/operations.js";
import { SlPencil } from "react-icons/sl";
import { changeContact } from "../../redux/contacts/slice.js";

const Contact = ({ user }) => {
  const dispatch = useDispatch();
  const handleDelete = (id) => {
    dispatch(deleteData(id));
  };

  const handleChangeContact = (user) => {
    dispatch(changeContact(user));
  };

  const { id, name, number } = user;
  return (
    <li className="border border-gray-300 rounded p-8 ">
      <p className="flex items-center">
        <FcBusinessman />
        {name}
      </p>
      <p className="flex items-center ">
        <FcIphone />
        {number}
      </p>
      <div className="flex gap-4">
        <button className="block" onClick={() => handleDelete(id)}>
          Delete
        </button>
        <button className="block" onClick={() => handleChangeContact(user)}>
          <SlPencil />
        </button>
      </div>
    </li>
  );
};

export default Contact;
