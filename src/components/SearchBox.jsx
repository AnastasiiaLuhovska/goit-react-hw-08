import {useId} from "react";
import s from './SearchBox.module.css'
import {addFilter, selectNameFilter} from "../redux/filtersSlice.js";
import {useDispatch, useSelector} from "react-redux";

const SearchBox = () => {
    const searchBoxId = useId()

    const dispatch = useDispatch()
    const handleChange = (e) =>{
        const currentSearch = e.target.value
        dispatch(addFilter(currentSearch))
    }

    const inputData = useSelector(selectNameFilter)
    return (
        <div className={s.searchBox}>
            <label htmlFor={searchBoxId}>Find contacts by name</label>
            <input className={s.input} type='text' value={inputData} placeholder='Enter name or number...' name='search' id ={searchBoxId} onChange={handleChange}/>
        </div>

    );
};

export default SearchBox;