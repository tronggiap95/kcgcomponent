import type { NextPage } from "next";

const FrameComponent1: NextPage = () => {
  return (
    <section className="self-stretch flex flex-row items-start justify-start py-0 px-20 box-border max-w-full text-left text-37xl text-tittle font-open-sans mq750:pl-10 mq750:pr-10 mq750:box-border">
      <div className="flex-1 rounded-xl flex flex-row flex-wrap items-start justify-center py-[55px] px-20 box-border gap-[15px] bg-[url('/frame-9438@3x.png')] bg-cover bg-no-repeat bg-[top] max-w-full lg:pl-10 lg:pr-10 lg:box-border mq750:pt-9 mq750:pb-9 mq750:box-border">
        <div className="flex-1 flex flex-col items-start justify-start pt-[68px] px-0 pb-0 box-border min-w-[429px] max-w-full mq450:pt-11 mq450:box-border mq1050:min-w-full">
          <div className="self-stretch flex flex-col items-start justify-start gap-[40px] max-w-full mq750:gap-[20px_40px]">
            <div className="self-stretch flex flex-row items-start justify-start max-w-full mq750:gap-[32px_16px]">
              <h1 className="m-0 flex-1 relative text-inherit leading-[72px] font-semibold font-inherit inline-block max-w-full mq450:text-15xl mq450:leading-[43px] mq1050:text-26xl mq1050:leading-[58px]">
                Let us know more about your startup and we will get back to you!
              </h1>
            </div>
            <button className="cursor-pointer py-2.5 px-10 bg-sandybrown-200 rounded-20xl [backdrop-filter:blur(4px)] flex flex-row items-start justify-start whitespace-nowrap border-[1px] border-solid border-sandybrown-100 hover:bg-peru-200 hover:box-border hover:border-[1px] hover:border-solid hover:border-peru-100">
              <div className="relative text-base font-open-sans text-sandybrown-100 text-left">
                Submit Your Startup
              </div>
            </button>
          </div>
        </div>
        <div className="h-[438px] w-px relative rounded-sm overflow-hidden shrink-0 [transform:_rotate(180deg)]" />
        <div className="h-[413px] w-[429px] flex flex-col items-start justify-start pt-[25px] px-0 pb-0 box-border max-w-full">
          <img
            className="self-stretch flex-1 relative rounded-2xl max-w-full overflow-hidden max-h-full object-cover"
            loading="lazy"
            alt=""
            src="/image-34@2x.png"
          />
        </div>
      </div>
    </section>
  );
};

export default FrameComponent1;
