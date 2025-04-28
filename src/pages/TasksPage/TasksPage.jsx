import {useDispatch} from "react-redux";
import {useEffect} from "react";
import {fetchData} from "../../redux/contacts/operations.js";
import ContactForm from "../../components/ContactForm.jsx";
import SearchBox from "../../components/SearchBox.jsx";
import ContactList from "../../components/ContactList.jsx";


const TasksPage = () => {
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(fetchData())
    }, [dispatch])

    return <div className='phonebook'>
        <h1>Phonebook</h1>
        <ContactForm/>
        <SearchBox/>
        <ContactList/>
    </div>;
};

export default TasksPage;