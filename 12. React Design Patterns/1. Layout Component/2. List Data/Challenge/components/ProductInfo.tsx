interface ProductInfo {
  product: {
    name: string;
    description: string;
    price: string;
    rating: number;
    imageUrl: string;
  };
}

const ProductInfo = ({ product }: ProductInfo) => {
  const { name, description, price, rating, imageUrl } = product;

  const renderStars = (rating: number) => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      stars.push(
        <span
          key={i}
          className={`text-lg ${
            i < rating ? "text-yellow-400" : "text-gray-300"
          }`}
        >
          &#9733;
        </span>
      );
    }
    return stars;
  };

  return (
    <div className="flex items-center w-[30rem] m-[2rem] bg-white shadow-lg rounded-lg overflow-hidden hover:scale-105 transition-transform duration-300">
      {/* Image */}
      <img
        src={imageUrl}
        alt={name}
        className="w-52 h-56 object-cover rounded-t-lg"
      />

      <div className="flex flex-col">
        <h2 className="text-xl font-semibold text-gray-800 mt-4  px-4">
          {name}
        </h2>

        <p className="text-sm text-gray-600 mt-2 px-4">{description}</p>

        <p className="text-lg font-bold text-gray-900 mt-3  px-4">{price}</p>

        <div className="flex mt-2  px-4">{renderStars(rating)}</div>
      </div>
    </div>
  );
};

export default ProductInfo;
