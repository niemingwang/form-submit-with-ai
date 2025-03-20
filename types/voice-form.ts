import { reportTypeArray } from "@/components/select-report-modal";
import { createTypeArray } from "@/components/select-create-modal";

export interface VoiceForm {
  activityName: string;
  orderType: string;
  activityProd: string;
  activityPrice: string;
  count: string;
  gift: string;
}

// 定义一个泛型函数，用于从对象数组中提取某个属性的类型
type ExtractPropertyType<T extends object, K extends keyof T> = T[K];

export type FormType = "1" | "2" | "3" | "4" | undefined;

export type ReportType =
  | ExtractPropertyType<(typeof reportTypeArray)[number], "key">
  | undefined;

export type CreateType =
  | ExtractPropertyType<(typeof createTypeArray)[number], "key">
  | undefined;
