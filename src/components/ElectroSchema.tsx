import ElectroSchemaBg from "./electica/ElectroSchemaBg";
import { Trolley } from "./electica/Trolley";

const color10kv = "#640064";

const ElectroSchema = () => {
  return (
    <div className="overflow-x-hidden">
      <Trolley
        color={color10kv}
        state="a"
        style={{
          position: "absolute",
          top: 48,
          left: 48,
        }}
      />
      <Trolley
        color={color10kv}
        state="b"
        style={{
          position: "absolute",
          top: 48,
          left: 96,
        }}
      />
      <Trolley
        color={color10kv}
        state="c"
        style={{
          position: "absolute",
          top: 48,
          left: 144,
        }}
      />
      <ElectroSchemaBg />
    </div>
  );
};

export default ElectroSchema;
