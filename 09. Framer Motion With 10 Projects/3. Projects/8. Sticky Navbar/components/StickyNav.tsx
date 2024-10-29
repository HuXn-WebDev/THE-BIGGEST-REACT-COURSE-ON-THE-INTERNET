import { motion } from "framer-motion";
import Card from "./Card";

const StickyNav = () => {
  const menuVariants = {
    hidden: { height: "5.6rem" },
    visible: { height: "29rem", transition: { duration: 0.3 } },
  };

  const expandRowVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i: any) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.1, duration: 0.6 },
    }),
  };

  return (
    <div className="bg-black min-h-screen">
      <motion.div
        className="fixed top-0 w-full p-8 bg-white text-black rounded-lg shadow-lg"
        initial="hidden"
        whileHover="visible"
        variants={menuVariants}
      >
        <div className="flex flex-col">
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <div className="ml-2 font-semibold uppercase">HuXn</div>
            </div>
            <div className="hidden md:flex space-x-5 text-center">
              <a href="#" className="text-black font-bold">
                Products
              </a>
              <a href="#" className="text-black font-bold">
                Use Cases
              </a>
              <a href="#" className="text-black font-bold">
                Resources
              </a>
              <a href="#" className="text-black font-bold">
                Pricing
              </a>
            </div>
            <div className="flex items-center">
              <a href="#" className="text-black font-light">
                Join
              </a>
            </div>
          </div>

          <motion.div
            className="flex flex-col py-6"
            variants={expandRowVariants}
          >
            <span className="block w-full h-px bg-gray-300"></span>
            <motion.div
              variants={expandRowVariants}
              custom={1}
              className="flex items-center mt-5"
            >
              <span className="border border-black rounded-full px-2 text-xs">
                Apple
              </span>
              <p className="ml-2">Mackbook Pro</p>
            </motion.div>
            <motion.div
              variants={expandRowVariants}
              custom={2}
              className="flex mt-5"
            >
              <Card
                title="My Amazing Card"
                description="This is some random text"
                imageUrl="https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              />
              <Card
                title="My Amazing Card"
                description="This is some random text"
                imageUrl="https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              />
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default StickyNav;
