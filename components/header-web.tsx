import type { NextPage } from "next";

const HeaderWeb: NextPage = () => {
  return (
    <header className="self-stretch bg-gray-200 flex flex-row items-end justify-center p-5 box-border gap-[381px] top-[0] z-[99] sticky max-w-full text-left text-base text-description font-open-sans lg:gap-[381px_190px] mq450:gap-[381px_48px] mq750:gap-[381px_95px]">
      <div className="w-[177px] flex flex-row items-start justify-start gap-[7.700000000000045px]">
        <img
          className="h-[23px] w-[25.5px] relative shrink-0 [debug_commit:1de1738]"
          loading="lazy"
          alt=""
          src="/group-18.svg"
        />
        <div className="flex-1 flex flex-col items-start justify-start pt-[3.5px] px-0 pb-0">
          <img
            className="self-stretch h-4 relative max-w-full overflow-hidden shrink-0 [debug_commit:1de1738]"
            loading="lazy"
            alt=""
            src="/group-44.svg"
          />
        </div>
      </div>
      <div className="w-[582px] flex flex-row items-center justify-between gap-[20px] max-w-full mq750:hidden">
        <h2 className="m-0 relative text-inherit font-bold font-inherit text-tittle inline-block min-w-[48px]">
          Home
        </h2>
        <div className="w-16 relative hidden whitespace-nowrap">About us</div>
        <h2 className="m-0 relative text-inherit font-normal font-inherit inline-block min-w-[51px]">
          Insight
        </h2>
        <h2 className="m-0 relative text-inherit font-normal font-inherit inline-block min-w-[67px] whitespace-nowrap">
          K Station
        </h2>
        <div className="flex flex-row items-center justify-start gap-[24px] text-center text-light-grayscale-50 font-basic-text-sm-medium">
          <div className="flex flex-row items-center justify-start py-3.5 px-0 gap-[8px]">
            <img
              className="h-5 w-7 relative object-cover"
              loading="lazy"
              alt=""
              src="/flags@2x.png"
            />
            <img
              className="h-4 w-4 relative overflow-hidden shrink-0"
              loading="lazy"
              alt=""
              src="/chevron.svg"
            />
            <div className="w-[18px] relative leading-[24px] hidden">+1</div>
            <div className="self-stretch w-[37px] relative text-sm leading-[20px] font-medium text-light-grayscale-30 hidden items-end justify-center">
              Label
            </div>
          </div>
          <button className="cursor-pointer py-0.5 px-6 bg-sandybrown-200 rounded-20xl [backdrop-filter:blur(4px)] flex flex-row items-center justify-center whitespace-nowrap border-[1px] border-solid border-sandybrown-100 hover:bg-peru-200 hover:box-border hover:border-[1px] hover:border-solid hover:border-peru-100">
            <div className="relative text-base font-open-sans text-sandybrown-100 text-left inline-block min-w-[80px]">
              Contact us
            </div>
          </button>
        </div>
      </div>
    </header>
  );
};

export default HeaderWeb;
