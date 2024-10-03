import { FaBeer } from "react-icons/fa";

const IconComponent = () => {
  return (
    <div>
      <FaBeer />
      <FaBeer size={30} />
      <FaBeer size={30} color="gold" />
    </div>
  );
};

export default IconComponent;
