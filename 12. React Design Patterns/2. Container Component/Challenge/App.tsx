import axios from "axios";
import DataSource from "./components/shared/DataSource";
import ProductList from "./components/ProductList";

const getServerData = (url: string) => async () => {
  const response = await axios.get(url);
  return response.data;
};

const App = () => {
  return (
    <div style={{ padding: "20px" }}>
      <h1>Welcome to the Fake Store</h1>

      <DataSource
        getDataFunc={getServerData("https://fakestoreapi.com/products")}
        resourceName="products"
      >
        <ProductList />
      </DataSource>
    </div>
  );
};

export default App;
