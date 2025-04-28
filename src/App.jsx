import './App.css'
import Header from "./components/Header/Header.jsx";
import {Route, Routes} from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage.jsx";
import LoginPage from "./pages/LoginPage/LoginPage.jsx";
import RegisterPage from "./pages/RegisterPage/RegisterPage.jsx";
import ContactsPage from "./pages/ContactsPage/ContactsPage.jsx";

function App() {

    return <>
            <Header/>
        <Routes>
            <Route path='/' element={<HomePage/>}/>
            <Route path='/login' element={<LoginPage/>}/>
            <Route path='/register' element={<RegisterPage/>}/>
            <Route path='/contacts' element={<ContactsPage/>}/>
        </Routes>
        </>
}

export default App
