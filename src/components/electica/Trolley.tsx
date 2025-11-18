import type { FC } from "react";
import "./trolley.css";

type TrolleyProps = {
  color?: string;
  state?: "var1" | "b" | "c" | "d" | "e" | "f";
} & React.SVGProps<SVGSVGElement>;
export const Trolley: FC<TrolleyProps> = ({ ...props }) => {
  return (
    <>
      <svg {...props}>
        <use xlinkHref="./trolley-sprite.svg#trolley-var4" className="var2" />
      </svg>
    </>
  );
};
