import { IoBagOutline, IoFilterOutline } from "react-icons/io5";

interface NavigationProps {
  toggleSidebar: () => void;
}

const Navigation = ({ toggleSidebar }: NavigationProps) => {
  return (
    <div
      className="mt-[2rem] container w-[90%] ml-[5rem]
     flex justify-between items-center"
    >
      <h1 className="logo">
        <IoFilterOutline
          size={27}
          className="ml-[4rem] cursor-pointer"
          onClick={toggleSidebar}
        />
      </h1>
      <nav>
        <ul className="flex items-center mr-[2rem] space-x-4">
          <li>Search</li>
          <li>Help</li>
          <li>My Account</li>
        </ul>
      </nav>
      <IoBagOutline size={24} />
    </div>
  );
};

export default Navigation;
