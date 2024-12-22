interface CardProps {
  title: string;
  content: string;
  footer: string;
}

const Card = ({ title, content, footer }: CardProps) => {
  return (
    <div className="border rounded-lg shadow-lg w-[20rem] p-4 bg-white">
      <div>
        <h2 className="text-xl font-semibold text-gray-800">{title}</h2>
      </div>
      <div className="mt-2">
        <p className="text-gray-600 text-sm">{content}</p>
      </div>
      <div className="mt-4">
        <p className="text-gray-500 text-xs">{footer}</p>
      </div>
    </div>
  );
};

export default Card;
