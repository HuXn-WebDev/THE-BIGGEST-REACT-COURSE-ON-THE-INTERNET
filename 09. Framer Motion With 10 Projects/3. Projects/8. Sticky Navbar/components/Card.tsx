interface CardProps {
  title: string;
  description: string;
  imageUrl: string;
}

const Card = ({ title, description, imageUrl }: CardProps) => {
  return (
    <div className="flex flex-col m-5 bg-white rounded-lg shadow-lg overflow-hidden">
      <img src={imageUrl} alt={title} className="w-full h-28 object-cover" />
      <div className="p-4">
        <h3 className="font-bold text-lg">{title}</h3>
        <p className="text-gray-700 mt-2">{description}</p>
        <button className="mt-4 bg-black text-white py-2 px-4 rounded">
          Learn More
        </button>
      </div>
    </div>
  );
};

export default Card;
