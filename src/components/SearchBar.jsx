import { useState } from "react";
import { HiMagnifyingGlass } from "react-icons/hi2";
import { motion } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import { setSearchDone, setSearchInput } from "../features/slices/mainSlice";
import { useNavigate } from "react-router-dom";

const SearchBar = () => {
  const dispatch = useDispatch();
  const { textInput, category } = useSelector(
    (state) => state.main.searchInputs
  );
  const navigate = useNavigate();

  const handleSearch = () => {
    dispatch(setSearchInput({ textInput: textInput, category: category }));
    dispatch(setSearchDone(true));
    // Set to local storage
    // sessionStorage.setItem(
    //   "searchInputs",
    //   JSON.stringify({ textInput: textInput, category: selectedCategory })
    // );

    navigate(`/search/${category}/${textInput}`);
  };

  return (
    <div className="max-w-3xl w-full rounded-full px-4 relative border border-border focus-within:border-primary">
      <div className="absolute inset-0 rounded-full bg-card z-10"></div>
      <div className="flex items-center relative z-20">
        <input
          type="text"
          placeholder="Search for blog"
          className="outline-none border-none bg-transparent my-3 w-full text-lg"
          value={textInput}
          onChange={(e) =>
            dispatch(setSearchInput({ ...{ textInput: e.target.value } }))
          }
        />
        <div className="flex items-center">
          <CategoryDropdown />
          <button
            className="bg-secondary h-8 w-8 flex items-center justify-center rounded-full"
            onClick={handleSearch}
          >
            <HiMagnifyingGlass size={24} color="white" />
          </button>
        </div>
      </div>
    </div>
  );
};

// Dropdown
const CategoryDropdown = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const { category } = useSelector((state) => state.main.searchInputs);
  const dispatch = useDispatch();

  const categories = [
    "All",
    "Author",
    "Travel",
    "LifeStyle",
    "Technology",
    "Health and care",
  ];

  const toggleDropdown = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  const handleCategorySelect = (category) => {
    dispatch(setSearchInput({ category }));
    setIsDropdownOpen(false);
  };

  return (
    <div className="px-1.5 relative">
      <button
        className="h-8 min-w-max text-sm rounded-full px-4 bg-disabled text-white"
        onClick={toggleDropdown}
      >
        {category}
      </button>
      {isDropdownOpen && (
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="absolute top-11 right-0 bg-card z-20 shadow-custom rounded-md flex flex-col min-w-40 overflow-hidden"
        >
          {categories
            .filter((c) => c !== category)
            .map((c) => (
              <button
                key={c}
                className="p-2 hover:bg-hover items-start flex"
                onClick={() => handleCategorySelect(c)}
              >
                {c}
              </button>
            ))}
        </motion.div>
      )}
    </div>
  );
};

export default SearchBar;
