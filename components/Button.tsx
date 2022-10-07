import Link from "next/link";

interface ButtonProps {
  title: string;
  url: string;
  style: string;
}
const Button = ({ title, url, style }: ButtonProps) => {
  return (
    <Link href={url}>
      <div className="my-2 flex">
        <div className={style}>{title}</div>
      </div>
    </Link>
  );
};

export default Button;
