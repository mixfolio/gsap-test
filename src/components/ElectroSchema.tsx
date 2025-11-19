import ElectroSchemaBg from "./electica/ElectroSchemaBg";
import { Trolley } from "./electica/Trolley";

const color10kv = "#640064";

const ElectroSchema = () => {
  return (
    <div className="overflow-x-hidden">
      <Trolley
        color={color10kv}
        state="state1"
        style={{
          position: "absolute",
          top: 48,
          left: 48,
        }}
      />
      <Trolley
        color={color10kv}
        state="state2"
        style={{
          position: "absolute",
          top: 48,
          left: 96,
        }}
      />
      <Trolley
        color={color10kv}
        state="state3"
        style={{
          position: "absolute",
          top: 48,
          left: 144,
        }}
      />
      <Trolley
        color={color10kv}
        state="state4"
        style={{
          position: "absolute",
          top: 48,
          left: 192,
        }}
      />
      <Trolley
        color={color10kv}
        state="state5"
        style={{
          position: "absolute",
          top: 48,
          left: 240,
        }}
      />
      <Trolley
        color={color10kv}
        state="state6"
        style={{
          position: "absolute",
          top: 48,
          left: 288,
        }}
      />
      <Trolley
        color={color10kv}
        state="state7"
        style={{
          position: "absolute",
          top: 48,
          left: 336,
        }}
      />
      <ElectroSchemaBg />
    </div>
  );
};

export default ElectroSchema;
