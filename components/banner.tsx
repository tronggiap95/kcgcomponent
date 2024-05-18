import type { NextPage } from "next";
import HeaderWeb from "./header-web";
import FrameComponent3 from "./frame-component3";

const Banner: NextPage = () => {
  return (
    <section className="w-full !m-[0] absolute top-[0px] right-[0px] left-[0px] flex flex-col items-end justify-start pt-0 px-0 pb-[262px] box-border gap-[120px] max-w-full text-center text-53xl text-tittle font-open-sans mq450:gap-[30px_120px] mq750:gap-[60px_120px]">
      <div className="w-full h-[1110px] absolute !m-[0] right-[0px] bottom-[-210px] left-[0px]">
        <img
          className="absolute h-full top-[0px] bottom-[0px] left-[0px] max-h-full w-[1665px] object-cover"
          alt=""
          src="/image-1@2x.png"
        />
        <div className="absolute top-[418px] left-[0px] [background:linear-gradient(179.91deg,_rgba(21,_21,_21,_0)_33.81%,_#151515_71.33%)] w-[1441px] h-[692px] z-[1]" />
      </div>
      <HeaderWeb />
      <div className="w-[1029px] flex flex-row items-start justify-center py-0 px-5 box-border max-w-full">
        <div className="w-[649px] flex flex-col items-start justify-start gap-[40px] max-w-full mq750:gap-[20px_40px]">
          <h1 className="m-0 w-[238px] relative text-inherit leading-[80px] font-semibold font-inherit inline-block z-[2] mq450:text-24xl mq450:leading-[48px] mq1050:text-39xl mq1050:leading-[64px]">
            Insight
          </h1>
          <div className="self-stretch flex flex-row items-start justify-end max-w-full text-left text-lg">
            <FrameComponent3
              joannaKosinskaLAaSoL0LrYs="/joannakosinskalaasol0lrysunsplash-1@2x.png"
              howCanBusinessesUtilizeEm="How can businesses utilize email marketing to nurture their leads."
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
