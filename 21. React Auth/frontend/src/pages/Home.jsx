import { Link } from "react-router-dom";
import { AiOutlineLogin, AiOutlineUserAdd } from "react-icons/ai";

const Home = () => {
  return (
    <div className="bg-gray-50 min-h-screen flex flex-col justify-center">
      <section className="flex flex-col items-center justify-center text-center px-6 py-24 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white">
        <h1 className="text-5xl font-extrabold mb-4">
          Welcome to <span className="text-yellow-300">MERN Auth</span>
        </h1>
        <p className="text-xl mb-6">
          A simple, secure authentication system built with the MERN stack.
        </p>
        <div className="flex space-x-6">
          <Link
            to="/login"
            className="bg-yellow-300 text-gray-800 font-bold py-3 px-8 rounded-lg text-lg transition-transform transform hover:scale-105"
          >
            <AiOutlineLogin className="inline mr-2" size={24} />
            Login
          </Link>
          <Link
            to="/register"
            className="bg-transparent border-2 border-yellow-300 text-white font-bold py-3 px-8 rounded-lg text-lg transition-transform transform hover:scale-105"
          >
            <AiOutlineUserAdd className="inline mr-2" size={24} />
            Register
          </Link>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-semibold mb-8">Why MERN Auth?</h2>
          <div className="grid md:grid-cols-3 gap-12">
            <div className="flex flex-col items-center bg-gray-100 p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-4 text-black">Secure</h3>
              <p className="text-gray-600">
                Built with the latest security standards to protect your data.
              </p>
            </div>

            <div className="flex flex-col items-center bg-gray-100 p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-4 text-black">
                Easy to Use
              </h3>
              <p className="text-gray-600">
                An intuitive and simple user interface to help you get started
                quickly.
              </p>
            </div>

            <div className="flex flex-col items-center bg-gray-100 p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-4 text-black">
                Scalable
              </h3>
              <p className="text-gray-600">
                Designed to grow with your application, providing powerful
                features as you scale.
              </p>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-gray-800 text-white py-6 text-center">
        <p>&copy; 2025 MERN Auth. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Home;
