import {
  ElectroSchema,
  Map,
  Schema,
  ScrollTriggerTest,
  ShowCase,
} from "./components";
import gsap from "gsap";
import { ScrollTrigger, SplitText } from "gsap/all";

gsap.registerPlugin(ScrollTrigger, SplitText);

const App = () => {
  return (
    <main>
      <ElectroSchema />
      {/* <ScrollSections /> */}
      <Schema />
      <ScrollTriggerTest />
      <Map />
      <ShowCase />
    </main>
  );
};

export default App;
