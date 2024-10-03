import { useState } from "react";

const App = () => {
  const [movie, setMovie] = useState({
    title: "Equalizer 3",
    ratings: 7,
  });

  const handleClick = () => {
    // 🥂 To tell react about state updates, we have to give react a brand new object.

    // 👉 LONG WAY
    // const copyMovie = {
    //   // This will copy all the properties, into the new object, and then we can change whatever we want in new object.
    //   ...movie,
    //   ratings: 5,
    // };
    // setMovie(copyMovie);

    // 👉 SHORT WAY
    setMovie({ ...movie, ratings: 5 });
  };

  return (
    <div>
      <h1>{movie.title}</h1>
      <p>{movie.ratings}</p>
      <button onClick={handleClick}>Change Ratings</button>
    </div>
  );
};

export default App;
