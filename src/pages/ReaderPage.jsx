import { useEffect, useState } from "react";
import { useFetchBlogsQuery } from "../features/api/blogApi";
import { useNavigate, useParams } from "react-router-dom";
import { bgColorGen } from "../components/HomePageBlogs";
import { HiOutlineChevronLeft } from "react-icons/hi2";

const ReaderPage = () => {
  const { data, error, isLoading } = useFetchBlogsQuery();
  const [layoutLoadwithTimer, setLayoutLoadwithTimer] = useState(true);
  const [filteredPost, setFilteredPost] = useState(null);
  const { blogname } = useParams();
  const navigate = useNavigate();
  // console.log(blogname);
  // console.log(data);

  useEffect(() => {
    setLayoutLoadwithTimer(true);
    if (data) {
      let filteredPost = data.find((post) => post.title === blogname);
      setFilteredPost(filteredPost);
      setTimeout(() => setLayoutLoadwithTimer(false), 1000);
    }
  }, [data]);

  console.log(filteredPost);

  if (isLoading || layoutLoadwithTimer)
    return <div className="py-20 md:py-10">Loading...</div>;

  return (
    <div className="py-20 md:py-10">
      <button
        className="rounded-full h-8 w-8 hover:bg-hover flex items-center justify-center"
        onClick={() => navigate(-1)}
      >
        <HiOutlineChevronLeft size={24} />
      </button>
      <div className="grid md:grid-cols-3 gap-4 mt-4">
        <div className="max-w-xl w-full rounded-xl overflow-hidden md:h-[70vh]">
          <img
            src={filteredPost.banner}
            alt="filtered_img"
            className="h-full w-full object-cover"
          />
        </div>
        <div className="flex flex-col md:col-span-2 space-y-2">
          <div
            className={`px-4 rounded-full text-white max-w-fit ${bgColorGen(
              filteredPost.genre
            )}`}
          >
            {filteredPost.genre}
          </div>
          <div className="text-xl font-semibold">{filteredPost.title}</div>
          <div>{filteredPost.content}</div>
          <div className="text-secondary font-medium text-lg">
            {filteredPost.author}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReaderPage;
