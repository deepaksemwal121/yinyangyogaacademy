import Image from "next/image";

interface Card {
  title: string;
  description: string;
  icon: string;
}

const LeftImageCard = ({ title, description, icon }: Card) => {
  return (
    <div className="w-full items-center p-7 md:flex  md:space-x-4">
      <div className="md:w-1/4">
        <Image src={icon} alt="icon" width={64} height={64} />
      </div>
      <div className="md:w-3/4">
        <h3 className="text-2xl">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
};

export default LeftImageCard;
