interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  image: string;
}

interface ProductListProps {
  products: Product[] | null;
}

const ProductList = ({ products }: ProductListProps) => {
  return products ? (
    <div className="product-list-container">
      <ul>
        {products.map((product) => (
          <li key={product.id} className="product-card">
            <h2>{product.title}</h2>
            <p>{product.description}</p>
            <p className="price">${product.price}</p>
            <img src={product.image} alt={product.title} />
          </li>
        ))}
      </ul>
    </div>
  ) : (
    <p className="loading-message">Loading products...</p>
  );
};

export default ProductList;
