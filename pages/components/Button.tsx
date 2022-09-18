interface ButtonProps {
  title: string;
  url: string;
}
const Button = ({ title, url }: ButtonProps) => {
  return (
    <>
      <a className=" bg-[#de4c12] px-8 py-4" href={url}>
        {title}
      </a>
    </>
  );
};

export default Button;
