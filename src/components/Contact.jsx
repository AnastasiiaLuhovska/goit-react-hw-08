import { FcBusinessman } from "react-icons/fc";
import { FcIphone } from "react-icons/fc";
import s from './Contact.module.css'
import {useDispatch} from "react-redux";
import {deleteData} from "../redux/contactsOps.js";

const Contact = ({user}) => {

    const dispatch = useDispatch()
    const handleDelete = (id) =>{
        dispatch(deleteData(id))
    }

    const {id, name, number} = user
    return <li className={s.item}>
        <p><FcBusinessman />{name}</p>
        <p><FcIphone />{number}</p>
        <button onClick={()=> handleDelete(id)}>Delete</button>
    </li>;
};

export default Contact;