const ImageCard = ({ imageSrc, altText }: any) => (
  <div className="border p-[10px] m-[10px]">
    <img src={imageSrc} alt={altText} className="w-[5rem] h-[5rem]" />
  </div>
);

export default ImageCard;
