import { useState } from "react";
import { addToast, closeAll } from "@heroui/toast";

import VoiceFormContext from "./context";

import { VoiceForm } from "@/types/voice-form";
import { blockAI } from "@/api/voice-form";
import { buildFieldMappingString, cleanData } from "@/config/form";

const VoiceFormProvider = ({ children }: { children: React.ReactNode }) => {
  const [form, setForm] = useState<VoiceForm>({
    activityName: "",
    orderType: "",
    activityProd: "",
    activityPrice: "",
    count: "",
    gift: "",
  });

  const updateForm = (newForm: Partial<VoiceForm>) => {
    setForm((prevForm) => ({ ...prevForm, ...newForm }));
  };

  const [voiceText, setVoiceText] = useState("");
  const [voicing, setVoicing] = useState(false);
  const [fetching, setFetching] = useState(false);

  const startAnalysis = (text: string) => {
    setFetching(true);

    addToast({
      title: "AI 智能识别中...",
      color: "primary",
      promise: new Promise(async (resolve) => {
        const res = await blockAI(
          `下面这句话，请帮我格式化表单格式，比如${buildFieldMappingString().slice(0, -1)}，
            按照json格式输出，注意不要把字段名放到字段值中，不涉及的字段不输出。\n\n ${text}`,
        );

        if (res.data) {
          const data = cleanData(res.data.outputs.Text) as VoiceForm;

          Object.keys(data).forEach((key) => {
            if (
              form.hasOwnProperty(key) &&
              data[key as keyof VoiceForm] !== undefined &&
              data[key as keyof VoiceForm] !== ""
            ) {
              updateForm({ [key]: data[key as keyof VoiceForm] });
            }
          });
        }

        resolve(res);
        closeAll();

        addToast({ title: "识别完成", color: "success", timeout: 2000 });
      }).finally(() => {
        setFetching(false);
      }),
    });
  };

  return (
    <VoiceFormContext.Provider
      value={{
        voiceText,
        setVoiceText,
        voicing,
        setVoicing,
        form,
        updateForm,
        fetching,
        setFetching,
        startAnalysis,
      }}
    >
      {children}
    </VoiceFormContext.Provider>
  );
};

export default VoiceFormProvider;
