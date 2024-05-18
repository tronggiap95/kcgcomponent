import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";

export type FrameComponent3Type = {
  joannaKosinskaLAaSoL0LrYs?: string;
  howCanBusinessesUtilizeEm?: string;

  /** Style props */
  propMinWidth?: CSSProperties["minWidth"];
  propFlexWrap?: CSSProperties["flexWrap"];
};

const FrameComponent3: NextPage<FrameComponent3Type> = ({
  joannaKosinskaLAaSoL0LrYs,
  howCanBusinessesUtilizeEm,
  propMinWidth,
  propFlexWrap,
}) => {
  const articleAuthorStyle: CSSProperties = useMemo(() => {
    return {
      minWidth: propMinWidth,
    };
  }, [propMinWidth]);

  const dateContainerStyle: CSSProperties = useMemo(() => {
    return {
      flexWrap: propFlexWrap,
    };
  }, [propFlexWrap]);

  return (
    <div
      className="w-[400px] rounded-xl bg-darkslategray flex flex-col items-start justify-start pt-4 px-4 pb-[18px] box-border gap-[14px] max-w-full z-[2] text-left text-lg text-tittle font-open-sans"
      style={articleAuthorStyle}
    >
      <img
        className="self-stretch h-48 relative rounded-xl max-w-full overflow-hidden shrink-0 object-cover"
        loading="lazy"
        alt=""
        src={joannaKosinskaLAaSoL0LrYs}
      />
      <div className="self-stretch flex flex-col items-start justify-start gap-[6px]">
        <h2 className="m-0 self-stretch relative text-inherit font-bold font-inherit">
          {howCanBusinessesUtilizeEm}
        </h2>
        <div
          className="self-stretch flex flex-row flex-wrap items-start justify-start gap-[13px] text-xs"
          style={dateContainerStyle}
        >
          <div className="flex-1 relative inline-block min-w-[78px]">
            By Rubeus Hagrid
          </div>
          <div className="w-[108.2px] relative text-3xs font-semibold text-right inline-block shrink-0">
            July 20, 2021
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent3;
