import { Link } from "expo-router";
import HomeScreen from "./Home";

const Index = () => {
  return (
    <>
      <Link href="/Home">Home Screen</Link>
      <Link href="/About">Home About</Link>
      <Link href="/Contact">Home Contact</Link>
    </>
  );
};

export default Index;
