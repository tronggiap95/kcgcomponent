import type { NextPage } from "next";

const FooterWeb: NextPage = () => {
  return (
    <section className="self-stretch flex flex-row items-end justify-between py-20 px-[109.5px] box-border max-w-full gap-[20px] text-left text-sm text-description font-open-sans lg:flex-wrap mq450:pl-5 mq450:pr-5 mq450:box-border mq750:pl-[54px] mq750:pr-[54px] mq750:box-border">
      <div className="w-[368px] flex flex-col items-start justify-start gap-[31px] max-w-full mq450:gap-[15px_31px]">
        <img
          className="w-[52px] h-[47px] relative"
          loading="lazy"
          alt=""
          src="/group-18-1.svg"
        />
        <div className="self-stretch flex flex-col items-start justify-start gap-[8px]">
          <h3 className="m-0 relative text-inherit leading-[24px] font-normal font-inherit">
            Email: vc@kcg.capital
          </h3>
          <h3 className="m-0 relative text-inherit leading-[24px] font-normal font-inherit">
            9 Nguyễn Cơ Thạch, An Lợi Đông, Quận 2, HCM, Vietnam
          </h3>
        </div>
      </div>
      <div className="w-[373px] flex flex-col items-start justify-start gap-[16px] max-w-full">
        <div className="self-stretch flex flex-row items-start justify-center py-0 px-5">
          <h3 className="m-0 relative text-inherit leading-[24px] font-normal font-inherit">
            Innovate | Redefine | Amplify
          </h3>
        </div>
        <div className="self-stretch flex flex-row items-start justify-center gap-[11px] mq450:flex-wrap">
          <h3 className="m-0 relative text-inherit leading-[24px] font-normal font-inherit inline-block min-w-[88px]">
            Privacy Policy
          </h3>
          <div className="flex flex-col items-start justify-start pt-2.5 px-0 pb-0">
            <div className="w-1 h-1 relative rounded-[50%] bg-description" />
          </div>
          <h3 className="m-0 relative text-inherit leading-[24px] font-normal font-inherit inline-block min-w-[109px]">
            Terms Condition
          </h3>
          <div className="flex flex-col items-start justify-start pt-2.5 px-0 pb-0">
            <div className="w-1 h-1 relative rounded-[50%] bg-description" />
          </div>
          <h3 className="m-0 relative text-inherit leading-[24px] font-normal font-inherit inline-block min-w-[124px]">
            All Rights Reserved
          </h3>
        </div>
      </div>
      <div className="flex flex-col items-start justify-start gap-[24px] text-base text-tittle">
        <h2 className="m-0 relative text-inherit font-normal font-inherit inline-block min-w-[127px]">
          Our Social Media
        </h2>
        <div className="flex flex-row items-start justify-start gap-[14px]">
          <img
            className="h-12 w-12 relative rounded-lg min-h-[48px]"
            loading="lazy"
            alt=""
            src="/frame-267.svg"
          />
          <img
            className="h-12 w-12 relative rounded-lg min-h-[48px]"
            loading="lazy"
            alt=""
            src="/frame-269.svg"
          />
          <img
            className="h-12 w-12 relative rounded-lg min-h-[48px]"
            loading="lazy"
            alt=""
            src="/frame-270.svg"
          />
        </div>
      </div>
    </section>
  );
};

export default FooterWeb;
