import type { NextPage } from "next";
import Banner from "../components/banner";
import FrameComponent2 from "../components/frame-component2";
import FrameComponent1 from "../components/frame-component1";
import FrameComponent from "../components/frame-component";
import FooterWeb from "../components/footer-web";

const Insight: NextPage = () => {
  return (
    <div className="w-full relative bg-gray-100 flex flex-col items-start justify-start pt-[328px] px-0 pb-0 box-border gap-[120px] leading-[normal] tracking-[normal] mq450:gap-[30px_120px] mq750:gap-[60px_120px]">
      <Banner />
      <FrameComponent2 />
      <FrameComponent1 />
      <FrameComponent />
      <FooterWeb />
    </div>
  );
};

export default Insight;
