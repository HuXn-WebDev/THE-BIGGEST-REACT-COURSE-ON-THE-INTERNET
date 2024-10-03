import { useContext } from "react";
import { ThemeContext } from "./Theme";

const Card = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div
      className={`w-[20rem] p-[2rem] ${
        theme === "light" ? "bg-white" : "bg-teal-900"
      }`}
    >
      <h1
        className={`text-teal-300 ${
          theme === "light" ? "text-black" : "text-white"
        }`}
      >
        Theme Card
      </h1>

      <p className={`${theme === "light" ? "text-black" : "text-white"}`}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis,
        cumque. Numquam exercitationem quae vitae vel veritatis similique illum
        repellat, itaque iure voluptates ut cum, facere a praesentium. Eveniet,
        ut itaque.
      </p>

      <button
        className="bg-teal-300 p-2 rounded-full text-white mt-[2rem]"
        onClick={toggleTheme}
      >
        {theme === "light" ? "Switch to Dark Mode" : "Switch to Light Mode"}
      </button>
    </div>
  );
};

export default Card;
