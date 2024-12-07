import { HiOutlineChevronRight, HiOutlineHeart } from "react-icons/hi2";
import { useFetchBlogsQuery } from "../features/api/blogApi";
import { motion } from "framer-motion";
import {
  createStaggerContainer,
  createStaggerVariant,
} from "../utils/animation/animationVariants";
import { LoadingCard } from "./LoadingCard";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

/* Anims */
export const containerVariants = createStaggerContainer(0.4);
export const cardVariants = createStaggerVariant(0.3);

export const bgColorGen = (genre) => {
  const genreColors = {
    Lifestyle: "bg-secondary",
    Technology: "bg-primary",
    "Health & Wellness": "bg-green-500",
    Finance: "bg-amber-600",
    Travel: "bg-sky-400",
  };
  return genreColors[genre];
};

const HomePageBlogs = () => {
  const { data, error, isLoading } = useFetchBlogsQuery();
  if (isLoading)
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-10 pb-10">
        {Array.from({ length: 8 }).map((_, index) => (
          <LoadingCard key={index} />
        ))}
      </div>
    );

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="show"
      className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-10 pb-10"
    >
      {data.map((post, index) => (
        <motion.div key={index} variants={cardVariants}>
          <BlogCard key={index} post={post} />
        </motion.div>
      ))}
    </motion.div>
  );
};

export const BlogCard = ({ post }) => {
  const [isHovered, setIsHovered] = useState(false);
  const navigate = useNavigate();
  return (
    <div
      className="text-pretty"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className="relative h-80 w-full rounded-xl overflow-hidden cursor-pointer"
        onClick={() => navigate(`/${post.title}`)}
      >
        <img
          src={post.banner}
          alt="blog_img"
          className="h-full w-full object-cover"
        />
        <motion.button
          whileHover={{ scale: 1.1 }}
          className="absolute top-3 right-4 z-10"
        >
          <HiOutlineHeart size={24} stroke="white" fill="rgba(0, 0, 0, 0.4)" />
        </motion.button>
        {isHovered && (
          <div className="absolute top-1/2 right-4 z-10 flex items-center justify-center rounded-full bg-card h-8 w-8">
            <HiOutlineChevronRight size={16} />
          </div>
        )}
      </div>
      <div className="flex flex-col gap-1 mt-4">
        <div
          className={`px-2 max-w-max text-white font-normal text-sm rounded-r-full ${bgColorGen(
            post.genre
          )}`}
        >
          {post.genre}
        </div>
        <div className="text-lg font-medium">{post.title}</div>
        <div className="line-clamp-2">{post.content}</div>
        <div className="text-md font-medium">{post.author}</div>
      </div>
    </div>
  );
};

export default HomePageBlogs;
