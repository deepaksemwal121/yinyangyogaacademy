import Image from "next/image";

interface Card {
  title: string;
  description: string;
  icon: string;
}

const LeftImageCard = ({ title, description, icon }: Card) => {
  return (
    <div className="w-full p-7 text-left md:flex  md:space-x-2">
      <div className="md:w-1/6">
        <Image src={icon} alt="icon" width={64} height={64} />
      </div>
      <div className="md:w-5/6">
        <h3 className="text-xl">{title}</h3>
        <p className="text-sm text-gray-600 md:text-base">{description}</p>
      </div>
    </div>
  );
};

export default LeftImageCard;
