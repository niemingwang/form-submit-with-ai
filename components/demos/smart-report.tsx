import { useContext, useEffect, useState } from "react";
import { Image } from "@heroui/image";

import First from "../../public/assets/images/report/first.png";
import Second from "../../public/assets/images/report/second.png";

import VoiceFormContext from "@/contexts/voice-form/context";
import { Loading } from "@/components/loading";

export const SmartReport = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [imgSrc, setImgSrc] = useState(First.src);

  const context = useContext(VoiceFormContext);

  if (!context) {
    throw new Error("VoiceFormContext 未提供值");
  }

  const { reportPrompt, setReportType, setVoiceText, setReportPrompt } =
    context;

  useEffect(() => {
    if (reportPrompt) {
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
        setImgSrc(Second.src);
        // setCreateType(undefined); // 用来返回到初始页面
        setReportPrompt("");
        setVoiceText("");
      }, 2000);

      // addToast({
      //   title: "AI 智能处理中...",
      //   color: "primary",
      //   promise: new Promise((resolve) => {
      //     setTimeout(() => {
      //       closeAll();
      //
      //       addToast({
      //         title: "已处理",
      //         color: "success",
      //         timeout: 2000,
      //       });
      //
      //       setTimeout(() => {
      //         setReportType(undefined);
      //         setReportPrompt("");
      //         setVoiceText("");
      //         resolve(true);
      //         closeAll();
      //       }, 2000);
      //     }, 2000);
      //   }),
      // });
    }
  }, [reportPrompt]);

  // useEffect(() => {
  //   setTimeout(() => {
  //     setLoading(false);
  //   }, 2000);
  // }, []);

  return (
    <Loading loading={loading}>
      <Image className={"z-[1]"} radius={"none"} src={imgSrc} width={"100%"} />
    </Loading>
  );
};
