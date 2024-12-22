import { useEffect, useState } from "react";
import withLoading from "./utils/withLoading";
import MyComponent from "./components/MyComponent";

const MyComponentWithLoading = withLoading(MyComponent);

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState("");

  useEffect(() => {
    setTimeout(() => {
      setData("Data fetched!");
      setIsLoading(false);
    }, 2000);
  }, []);

  return <MyComponentWithLoading isLoading={isLoading} data={data} />;
}

export default App;
