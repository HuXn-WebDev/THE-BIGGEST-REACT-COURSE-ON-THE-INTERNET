import { useEffect } from "react";
import { useProductStore } from "../store";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

interface Product {
  id: string;
  title: string;
  price: number;
  img: {
    black: string;
    [key: string]: string;
  };
}

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const { productStates, setProductImage, setProductHover, initializeProduct } =
    useProductStore((state) => state);

  const productState = productStates[product.id] || {};
  const currentImage = productState.currentImage || product.img.black;
  const hover = productState.hover || false;
  const images = Object.values(product.img);

  useEffect(() => {
    initializeProduct(product.id, product.img.black);
  }, [product.id, product.img.black, initializeProduct]);

  const handlePrev = () => {
    const currentIndex = images.indexOf(currentImage);
    const prevIndex = (currentIndex - 1 + images.length) % images.length;
    setProductImage(product.id, images[prevIndex]);
  };

  const handleNext = () => {
    const currentIndex = images.indexOf(currentImage);
    const nextIndex = (currentIndex + 1) % images.length;
    setProductImage(product.id, images[nextIndex]);
  };

  return (
    <div
      className="relative w-[20rem] m-[1rem] border-[#ECECEC]
       ml-[3rem] p-4"
      onMouseEnter={() => setProductHover(product.id, true)}
      onMouseLeave={() => setProductHover(product.id, false)}
    >
      <div className="relative  bg-gray-200 p-4">
        <img
          src={currentImage}
          alt={product.title}
          className="object-cover w-[12rem] h-[20rem] 
          rounded-md ml-[1rem]"
        />
        {hover && (
          <div
            className="absolute inset-0 flex items-center justify-between
           px-4"
          >
            <button onClick={handlePrev} className="carousel-button text-white">
              <FaChevronLeft className="bg-gray-300 rounded-full" />
            </button>
            <button onClick={handleNext} className="carousel-button text-white">
              <FaChevronRight className="bg-gray-300 rounded-full" />
            </button>
          </div>
        )}
      </div>
      <div className="mt-[1rem]">
        <h2>{product.title}</h2>
        <p>${product.price}</p>
      </div>
    </div>
  );
};

export default ProductCard;
