import type { NextPage } from "next";
import FrameComponent3 from "./frame-component3";

const FrameComponent2: NextPage = () => {
  return (
    <section className="self-stretch flex flex-row items-start justify-center py-0 px-5 box-border max-w-full text-left text-13xl text-tittle font-open-sans">
      <div className="w-[1060px] flex flex-row items-end justify-start gap-[40px] max-w-full mq750:gap-[40px_20px] mq1050:flex-wrap">
        <div className="flex-1 rounded-xl bg-darkslategray flex flex-col items-start justify-start p-4 box-border gap-[24px] min-w-[403px] max-w-full z-[2] mq750:min-w-full">
          <img
            className="self-stretch h-[420px] relative rounded-2xl max-w-full overflow-hidden shrink-0 object-cover"
            loading="lazy"
            alt=""
            src="/alex-zfllkxilpwunsplash-1@2x.png"
          />
          <div className="self-stretch flex flex-col items-start justify-start gap-[40px] mq750:gap-[20px_40px]">
            <h1 className="m-0 self-stretch relative text-inherit font-bold font-inherit mq450:text-lgi mq1050:text-7xl">
              Your company might be in need of a social media audit.
            </h1>
            <div className="self-stretch flex flex-row items-start justify-between py-[2.5px] px-0 gap-[20px] text-7xl mq450:flex-wrap">
              <h1 className="m-0 w-[246.8px] relative text-inherit font-normal font-inherit inline-block shrink-0 mq450:text-2xl">
                By Rubeus Hagrid
              </h1>
              <div className="w-[108.2px] flex flex-col items-start justify-start pt-[6.5px] px-0 pb-0 box-border text-right text-base">
                <div className="self-stretch relative font-semibold">
                  July 20, 2021
                </div>
              </div>
            </div>
          </div>
        </div>
        <FrameComponent3
          joannaKosinskaLAaSoL0LrYs="/joannakosinskalaasol0lrysunsplash-1-1@2x.png"
          howCanBusinessesUtilizeEm="Auto-reply : How to use automated responses for your email lists."
          propMinWidth="400px"
          propFlexWrap="unset"
        />
      </div>
    </section>
  );
};

export default FrameComponent2;
