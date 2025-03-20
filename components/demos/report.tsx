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
    key: ReportType.SALE_25,
    img: Sale25,
  },
  {
    key: ReportType.SALE_24,
    img: Sale24,
  },
  {
    key: ReportType.STOCK,
    img: stock,
  },
  {
    key: ReportType.DE_CAP,
    img: decap,
  },
];

export const Report = () => {
  const context = useContext(VoiceFormContext);

  if (!context) {
    throw new Error("VoiceFormContext 未提供值");
  }

  const { reportType } = context;

  return (
    <Image src={images.find((item) => item.key === reportType)?.img.src} />
  );
};
