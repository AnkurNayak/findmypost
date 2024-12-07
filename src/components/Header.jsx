import SearchBar from "./SearchBar";
import { useDispatch, useSelector } from "react-redux";
import ThemeSwitcher from "./ThemeSwitcher";
import { motion, AnimatePresence } from "framer-motion";
import { HiMagnifyingGlass } from "react-icons/hi2";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { setSearchInput, toggleVisibility } from "../features/slices/mainSlice";

const Header = () => {
  const { isVisible } = useSelector((state) => state.main);
  const [isOpen, setIsOpen] = useState(false);
  const { category, text } = useParams();
  const dispatch = useDispatch();
  const [isSearchPage, setIsSearchPage] = useState(false);
  const handleOpenSearchForSmall = () => setIsOpen((pv) => !pv);

  useEffect(() => {
    if (category) {
      setIsSearchPage(true);
      dispatch(setSearchInput({ textInput: text, category: category }));
      dispatch(toggleVisibility(false));
      setIsOpen(true);
    } else {
      setIsSearchPage(false);
      setIsOpen(false);
    }
  }, [category]);

  return (
    <div className="min-h-20 sticky top-0 z-30 flex flex-col">
      <div className="bg-app-bar z-30">
        <div className="flex items-center container mx-auto px-4 md:px-6 h-20">
          <div className="text-3xl font-bold">FindMyPost</div>
          {(!isVisible || isSearchPage) && (
            <motion.div className="hidden md:flex w-full justify-center items-center px-4">
              <SearchBar />
            </motion.div>
          )}
          <div className="ml-auto flex items-center space-x-4">
            {!isVisible && (
              <button
                className="h-8 w-8 flex md:hidden justify-center items-center"
                onClick={handleOpenSearchForSmall}
              >
                <HiMagnifyingGlass size={24} />
              </button>
            )}
            <ThemeSwitcher />
          </div>
        </div>
      </div>
      <AnimatePresence>
        {isOpen && !isVisible && (
          <motion.div
            initial={{ y: -80 }}
            animate={{ y: 0 }}
            exit={{ y: -80 }}
            transition={{ duration: 0.3 }}
            className="relative flex md:hidden"
          >
            <div className="absolute bg-app-bar inset-x-0">
              <div className="container mx-auto px-4 z-20 pb-3">
                <SearchBar />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Header;
