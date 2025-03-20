import { SVGProps } from "react";

export type IconSvgProps = SVGProps<SVGSVGElement> & {
  size?: number;
};

export enum ReportType {
  WEEK_REPORT_MONTH = "WeekReportMonth",
  WEEK_REPORT = "WeekReport",
  WEEK_REPORT_STOCK = "WeekStock",
  WEEK_REPORT_DE_CAP = "ReportDecap",
}

// 智能创作
export enum CreateType {
  MAKE_SPEECH = "MakeSpeech",
  THINK_REPORT = "ThinkReport",
  PROMOTION_TEXT = "PromotionText",
  SUMMARY_REPORT = "SummaryReport",
}
