import { useContext } from "react";
import { Image } from "@heroui/image";

import Sale25 from "../../public/assets/images/report/sale-25.png";
import Sale24 from "../../public/assets/images/report/sale-24.png";
import stock from "../../public/assets/images/report/stock.png";
import decap from "../../public/assets/images/report/decap.png";

import VoiceFormContext from "@/contexts/voice-form/context";
import { ReportType } from "@/types";

const images = [
  {
    key: ReportType.WEEK_REPORT_MONTH,
    img: Sale25,
  },
  {
    key: ReportType.WEEK_REPORT,
    img: Sale24,
  },
  {
    key: ReportType.WEEK_REPORT_STOCK,
    img: stock,
  },
  {
    key: ReportType.WEEK_REPORT_DE_CAP,
    img: decap,
  },
];

export const SmartReport = () => {
  const context = useContext(VoiceFormContext);

  if (!context) {
    throw new Error("VoiceFormContext 未提供值");
  }

  const { reportType } = context;

  return (
    <Image
      radius={"none"}
      src={images.find((item) => item.key === reportType)?.img.src}
      width={"100%"}
    />
  );
};
