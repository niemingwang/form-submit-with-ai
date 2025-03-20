import { SVGProps } from "react";

export type IconSvgProps = SVGProps<SVGSVGElement> & {
  size?: number;
};

export enum ReportType {
  SALE_25 = "Sale25",
  SALE_24 = "Sale24",
  STOCK = "stock",
  DE_CAP = "decap",
}
