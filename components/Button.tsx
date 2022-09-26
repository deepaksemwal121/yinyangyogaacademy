interface ButtonProps {
  title: string;
  url: string;
  style: string;
}
const Button = ({ title, url, style }: ButtonProps) => {
  return (
    <>
      <a className={style} href={url}>
        {title}
      </a>
    </>
  );
};

export default Button;
