import { useEffect, useRef } from "react";
import SearchBar from "./SearchBar";
import { useInView } from "framer-motion";
import { useDispatch } from "react-redux";
import { toggleVisibility } from "../features/slices/mainSlice";

const HomePageMain = () => {
  const ref = useRef(null);
  const isInView = useInView(ref);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(toggleVisibility(isInView));
  }, [isInView]);

  return (
    <div className="flex flex-col h-[40vh] md:h-[80vh] xl:h-[40vh] justify-center">
      <div className="flex items-center justify-center h-full">
        <div className="flex flex-col max-w-3xl w-full">
          <div className="text-3xl sm:text-4xl md:text-8xl text-center leading-none">
            <span className="font-normal md:font-extralight text-secondary">
              Your source for
            </span>
            <span className="font-bold ml-2">Ideas</span>
            <span className="font-normal md:font-extralight mx-2 text-secondary">
              and
            </span>
            <span className="font-bold">Innovation</span>
          </div>
          <div className="text-center text-base md:text-lg my-3">
            Explore fresh perspectives, actionable insights, and creative
            inspiration to fuel your passion and projects.
          </div>
          <div ref={ref}>
            <SearchBar />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePageMain;
