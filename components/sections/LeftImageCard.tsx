import Image from "next/image";

interface Card {
  title: string;
  description: string;
  icon: string;
}

const LeftImageCard = ({ title, description, icon }: Card) => {
  return (
    <div className="w-full p-7 md:flex  md:space-x-4">
      <div className="md:w-1/4">
        <Image src={icon} alt="icon" width={150} height={150} />
      </div>
      <div className="md:w-3/4">
        <h3 className="text-2xl">{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default LeftImageCard;
