import { Link } from "react-router-dom";
import { useGetAllMoviesQuery } from "../../redux/api/movies";

const AdminMoviesList = () => {
  const { data: movies } = useGetAllMoviesQuery();

  return (
    <div className="container mx-[9rem]">
      <div className="flex flex-col md:flex-row">
        <div className="p-3">
          <div className="ml-[2rem] text-xl font-bold h-12">
            All Movies ({movies?.length})
          </div>

          <div className="flex flex-wrap justify-around items-center p-[2rem]">
            {movies?.map((movie) => (
              <Link
                key={movie._id}
                to={`/admin/movies/update/${movie._id}`}
                className="block mb-4 overflow-hidden"
              >
                <div className="flex">
                  <div
                    key={movie._id}
                    className="max-w-sm  m-[2rem] rounded overflow-hidden shadow-lg"
                  >
                    <img
                      src={movie.image}
                      alt={movie.name}
                      className="w-full h-48 object-cover"
                    />
                    <div className="px-6 py-4 border border-gray-400">
                      <div className="font-bold text-xl mb-2">{movie.name}</div>
                    </div>

                    <p className="text-gray-700 text-base">{movie.detail}</p>

                    <div className="mt-[2rem] mb-[1rem]">
                      <Link
                        to={`/admin/movies/update/${movie._id}`}
                        className="bg-teal-500 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded"
                      >
                        Update Movie
                      </Link>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminMoviesList;
