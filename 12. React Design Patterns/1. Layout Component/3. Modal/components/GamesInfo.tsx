interface Game {
  gameName: string;
  gameRating: number;
  gameGenre: string;
  gameLanguages: string[];
}

interface GamesInfoProps {
  data: Game[];
}

const GamesInfo = ({ data }: GamesInfoProps) => {
  return (
    <div>
      {data.map((d, index) => {
        const { gameName, gameRating, gameGenre, gameLanguages } = d;
        return (
          <div key={index}>
            <h1>Game Name: {gameName}</h1>
            <p>Game Rating: {gameRating}</p>
            <p>Game Genre: {gameGenre}</p>
            <ul>
              Languages:
              {gameLanguages?.map((l, i) => (
                <li key={i}>{l}</li>
              ))}
            </ul>
          </div>
        );
      })}
    </div>
  );
};

export default GamesInfo;
