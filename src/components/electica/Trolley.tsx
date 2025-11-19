import type { FC } from "react";
import "./trolley.css";

type TrolleyProps = {
  color?: string;
  state:
    | "state1"
    | "state2"
    | "state3"
    | "state4"
    | "state5"
    | "state6"
    | "state7";
} & React.SVGProps<SVGSVGElement>;
export const Trolley: FC<TrolleyProps> = ({ state, ...props }) => {
  switch (state) {
    case "state1": {
      return (
        <svg {...props}>
          <use
            xlinkHref="./trolley-sprite.svg#trolley-state1"
            className="var1"
          />
        </svg>
      );
    }
    case "state2": {
      return (
        <svg {...props}>
          <use
            xlinkHref="./trolley-sprite.svg#trolley-state2"
            className="var2"
          />
        </svg>
      );
    }
    case "state3": {
      return (
        <svg {...props}>
          <use
            xlinkHref="./trolley-sprite.svg#trolley-state3"
            className="var3"
          />
        </svg>
      );
    }
    case "state4": {
      return (
        <svg {...props}>
          <use
            xlinkHref="./trolley-sprite.svg#trolley-state4"
            className="var2"
          />
        </svg>
      );
    }
    case "state5": {
      return (
        <svg {...props}>
          <use
            xlinkHref="./trolley-sprite.svg#trolley-state5"
            className="var1"
          />
        </svg>
      );
    }
    case "state6": {
      return (
        <svg {...props}>
          <use
            xlinkHref="./trolley-sprite.svg#trolley-state6"
            className="var1"
          />
        </svg>
      );
    }
    case "state7": {
      return (
        <svg {...props}>
          <use
            xlinkHref="./trolley-sprite.svg#trolley-state7"
            className="var2"
          />
        </svg>
      );
    }

    default:
      return null;
  }
};
