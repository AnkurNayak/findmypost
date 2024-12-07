import HomePageBlogs from "../components/HomePageBlogs";
import HomePageMain from "../components/HomePageMain";

const HomePage = () => {
  return (
    <div className="flex flex-col">
      <HomePageMain />
      <HomePageBlogs />
    </div>
  );
};

export default HomePage;
