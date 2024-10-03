import { FaSearch, FaUserCircle } from "react-icons/fa";

const Navigation = () => {
  return (
    <nav className="border-2 text-black border-gray-200 p-4 flex justify-between items-center">
      {/* Center: Search Bar */}
      <div className="flex items-center border-2  rounded-full px-4 py-2 max-w-md ml-[5rem]">
        <FaSearch className="mr-2 text-xl" />
        <input
          type="text"
          placeholder="Search..."
          className="bg-transparent outline-none w-full"
        />
      </div>

      {/* Right: User Profile */}
      <div className="flex items-center mr-[5rem]">
        <FaUserCircle className="text-3xl mr-2" />
      </div>
    </nav>
  );
};

export default Navigation;
