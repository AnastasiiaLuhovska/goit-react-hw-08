import { selectFilter } from "../../redux/contacts/selectors.js";
import { useDispatch, useSelector } from "react-redux";
import { addFilter } from "../../redux/filters/slice.js";

const SearchBox = () => {
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const currentSearch = e.target.value;
    dispatch(addFilter(currentSearch));
  };

  const inputData = useSelector(selectFilter);
  return (
    <div className="flex-column items-center mb-8">
      <label className="text-[20px] ">
        Find contacts by name
        <input
          className="block border border-gray-300 rounded py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 outline-gray-300 w-full"
          type="text"
          value={inputData}
          placeholder="Enter name or number..."
          name="search"
          onChange={handleChange}
        />
      </label>
    </div>
  );
};

export default SearchBox;
