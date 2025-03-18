import { createContext } from "react";

import { VoiceForm } from "@/types/voice-form";

// 定义 Context 类型
export interface FormContextType {
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
