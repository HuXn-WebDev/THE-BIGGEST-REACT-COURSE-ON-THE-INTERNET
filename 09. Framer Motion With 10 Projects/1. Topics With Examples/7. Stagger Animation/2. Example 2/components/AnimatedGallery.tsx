import { useState } from "react";
import { motion } from "framer-motion";

const galleryImages = [
  "https://images.unsplash.com/photo-1523712999610-f77fbcfc3843?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1426604966848-d7adac402bff?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1490682143684-14369e18dce8?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1445964047600-cdbdb873673d?q=80&w=3784&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
];

const parentVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.5,
      staggerDirection: 1,
    },
  },
};

const childVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const AnimatedGallery = () => {
  const [showImages, setShowImages] = useState(false);

  const handleClick = () => {
    setShowImages((prev) => !prev);
  };

  return (
    <div>
      <button
        onClick={handleClick}
        className="mb-[2rem] p-4 rounded-lg bg-yellow-300 text-black font-bold"
      >
        {showImages ? "Hide Images" : "Show Images"}
      </button>

      <motion.div
        variants={parentVariants}
        initial="hidden"
        animate={showImages ? "visible" : "hidden"}
        className="flex"
      >
        {galleryImages.map((image, index) => (
          <motion.img
            key={index}
            src={image}
            alt={`Gallery Image ${index + 1}`}
            variants={childVariants}
            className="ml-[2rem] w-[300px] rounded"
          />
        ))}
      </motion.div>
    </div>
  );
};

export default AnimatedGallery;
