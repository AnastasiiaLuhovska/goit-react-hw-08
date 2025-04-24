import './App.css'
import ContactForm from "./components/ContactForm.jsx";
import ContactList from "./components/ContactList.jsx";
import SearchBox from "./components/SearchBox.jsx";
import {useDispatch} from "react-redux";
import {useEffect} from "react";
import {fetchData} from "./redux/contactsOps.js";

function App() {

    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(fetchData())
    }, [dispatch])

    return (
    <div className='phonebook'>
      <h1>Phonebook</h1>
      <ContactForm/>
        <SearchBox />
      <ContactList />
    </div>
  )
}

export default App
