import { createContext } from "react";

import { FormType, ReportType, VoiceForm } from "@/types/voice-form";
import { TabType } from "@/components/demo-switch-tab";

// 定义 Context 类型
export interface FormContextType {
  tab: TabType;
  setTab: (tab: TabType) => void;

  // 表单助手类型
  formType: FormType;
  setFormType: (formType: FormType) => void;

  // 报告类型
  reportType: ReportType;
  setReportType: (report: ReportType) => void;

  form: VoiceForm;
  updateForm: (newForm: Partial<VoiceForm>) => void;
  voicing: boolean;
  setVoicing: (voicing: boolean) => void;
  voiceText: string;
  setVoiceText: (text: string) => void;
  fetching: boolean;
  setFetching: (fetching: boolean) => void;
  startAnalysis: (text: string) => void;
}

const VoiceFormContext = createContext<FormContextType | undefined>(undefined);

export default VoiceFormContext;
