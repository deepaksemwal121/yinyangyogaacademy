import type { ReactNode } from "react";
type button = { children?: ReactNode };

const Button = (props: button) => {
  return (
    <div className="my-4 rounded bg-orange-600 px-5 py-2 uppercase text-white inline-block text-xs" >
      {props.children}
    </div>
  );
};
export default Button;
