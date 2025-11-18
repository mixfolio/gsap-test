import type { FC } from "react";
import "./trolley.css";

type TrolleyProps = {
  color: string;
  state: "a" | "b" | "c" | "d" | "e" | "f";
} & React.SVGProps<SVGSVGElement>;
export const Trolley: FC<TrolleyProps> = ({ color, state, ...props }) => {
  return (
    <>
      <svg>
        <use
          xlinkHref="./trolley-sprite.svg#trolley-a"
          //   className="test1"
          stroke={color}
          strokeWidth={4}
          //   fill={"blue"}
          fill="none"
        />
      </svg>
    </>
  );
};
