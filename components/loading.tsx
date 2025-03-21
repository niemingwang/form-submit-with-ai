import React from "react";
import { Spinner } from "@heroui/spinner";

export const Loading = ({
  loading,
  children,
  text = "数据提取中...",
}: {
  loading: boolean;
  text?: string;
  children: React.ReactNode;
}) => {
  const SpinEl = () => {
    return (
      <>
        <div className={"bg-transparent fixed inset-0 pointer-events-none"} />
        <div
          className={
            "h-[100px] w-[100px] absolute z-10 flex gap-3 flex-col items-center justify-center rounded-2xl left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] bg-black/70"
          }
        >
          <Spinner color={"white"} />
          <span className={"text-white text-sm"}>{text}</span>
        </div>
      </>
    );
  };

  return (
    <>
      {loading && <SpinEl />}
      {children}
    </>
  );
};
