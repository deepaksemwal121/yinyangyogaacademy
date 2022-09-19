import type { ReactNode } from "react";
type text = {
  children?: ReactNode;
  size?: "lg" | "sm";
  color?: "orange" | "black" | "gray";
};
const Primary = (props: text) => {
  const color =
    props.color === "black"
      ? "text-gray-800"
      : props.color === "gray"
      ? "text-gray-600"
      : "text-orange-600";

  return (
    <div
      className={`${
        props.size === "lg" ? "text-4xl font-semibold" : "text-2xl font-medium"
      } ${color}`}
    >
      {props.children}
    </div>
  );
};

const Secondary = (props: text) => {
  const color =
    props.color === "black"
      ? "text-gray-800"
      : props.color === "gray"
      ? "text-gray-600"
      : "text-orange-600";
  return (
    <div
      className={`${
        props.size === "lg" ? "text-xl font-medium" : "text-base"
      } ${color}`}
    >
      {props.children}
    </div>
  );
};
const Text = {
  Primary,
  Secondary,
};
export default Text;
