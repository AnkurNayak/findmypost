import { HiOutlineHeart } from "react-icons/hi2";

export const LoadingCard = () => {
  return (
    <div className="text-pretty">
      <div className="relative h-80 w-full rounded-xl overflow-hidden">
        <div className="h-full w-full bg-gray-300 animate-pulse"></div>
        <button
          whileHover={{ scale: 1.1 }}
          className="absolute top-3 right-4 z-10"
        >
          <HiOutlineHeart size={24} stroke="white" fill="rgba(0, 0, 0, 0.4)" />
        </button>
      </div>
      <div className="flex flex-col gap-1 mt-4">
        <div className="px-2 max-w-max font-normal text-sm rounded-r-full bg-gray-300 text-gray-300 animate-pulse">
          Lorem, ipsum dolor.
        </div>
        <div className="text-lg font-medium bg-gray-300 text-gray-300 animate-pulse rounded-md">
          Lorem ipsum dolor si consectetur.
        </div>
        <div className="line-clamp-2 bg-gray-300 text-gray-300 animate-pulse rounded-md">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sapiente,
          facilis?
        </div>
        <div className="text-md font-medium bg-gray-300 text-gray-300 animate-pulse rounded-md max-w-max">
          Lorem, ipsum dolor.
        </div>
      </div>
    </div>
  );
};
