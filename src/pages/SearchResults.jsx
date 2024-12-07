import { useParams } from "react-router-dom";
import { useFetchBlogsQuery } from "../features/api/blogApi";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  BlogCard,
  cardVariants,
  containerVariants,
} from "../components/HomePageBlogs";
import { LoadingCard } from "../components/LoadingCard";
import { NoResults } from "../components/NoResults";

const SearchResults = () => {
  const { category, text } = useParams();
  const { data, error, isLoading } = useFetchBlogsQuery();
  const [layoutLoadwithTimer, setLayoutLoadwithTimer] = useState(true);
  const [filteredData, setFilteredData] = useState(null);

  useEffect(() => {
    setLayoutLoadwithTimer(true);
    if (data) {
      let filterPosts = data;
      if (text) {
        filterPosts = filterPosts.filter(
          (post) =>
            post.title.toLowerCase().includes(text.toLowerCase()) ||
            post.content.toLowerCase().includes(text.toLowerCase()) ||
            (post.author &&
              post.author.toLowerCase().includes(text.toLowerCase()))
        );
      }
      if (category && category !== "All") {
        if (category === "Author") {
          filterPosts = filterPosts.filter(
            (post) =>
              post.author &&
              post.author.toLowerCase().includes(text.toLowerCase())
          );
        } else {
          filterPosts = filterPosts.filter(
            (post) =>
              post.genre && post.genre.toLowerCase() === category.toLowerCase()
          );
        }
      }
      setFilteredData(filterPosts);
      setTimeout(() => {
        setLayoutLoadwithTimer(false);
      }, 1000);
    }
  }, [data, text, category]);

  // console.log(filteredData);

  return (
    <div className="py-20 md:py-10">
      <div className="flex items-center justify-center text-center flex-col w-full">
        <div className="text-4xl font-bold">{text}</div>
        <div className="bg-card mt-2">Discover {text} blogs</div>
      </div>
      <div className="my-3 flex items-center text-lg">
        Results for{" "}
        {text && <span className="font-bold mx-1.5">{text} in</span>}
        <span className={`font-bold ${!text && "mx-1.5"}`}>{category}</span>
      </div>
      {isLoading || layoutLoadwithTimer ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-10 pb-10">
          {Array.from({ length: 8 }).map((_, index) => (
            <LoadingCard key={index} />
          ))}
        </div>
      ) : filteredData && filteredData.length > 0 ? (
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-10 pb-10"
        >
          {filteredData.map((post, index) => (
            <motion.div key={index} variants={cardVariants}>
              <BlogCard key={index} post={post} />
            </motion.div>
          ))}
        </motion.div>
      ) : (
        <NoResults />
      )}
    </div>
  );
};

export default SearchResults;
