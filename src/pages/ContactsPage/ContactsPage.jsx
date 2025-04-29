import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {fetchData} from "../../redux/contacts/operations.js";
import ContactForm from "../../components/ContactForm/ContactForm.jsx";
import SearchBox from "../../components/SearchBox/SearchBox.jsx";
import ContactList from "../../components/ContactList/ContactList.jsx";
import {selectIsLoggedIn} from "../../redux/auth/selectors.js";
import {Navigate} from "react-router-dom";


const ContactsPage = () => {
    const dispatch = useDispatch()
    const isLoggedIn = useSelector(selectIsLoggedIn)

    useEffect(()=>{
        dispatch(fetchData())
    }, [dispatch])

    if(!isLoggedIn){
        return <Navigate to='/'/>
    }

    return <div className='phonebook'>
        <h1>Phonebook</h1>
        <ContactForm/>
        <SearchBox/>
        <ContactList/>
    </div>;
};

export default ContactsPage;