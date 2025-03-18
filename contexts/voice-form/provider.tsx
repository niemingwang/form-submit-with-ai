import { useEffect, useState } from "react";
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

  useEffect(() => {
    function getVoiceFormText() {
      addToast({
        title: "处理中",
        promise: new Promise(async (resolve) => {
          const res = await blockAI(
            `下面这句话，请帮我格式化表单格式，比如${buildFieldMappingString().slice(0, -1)}，
            按照json格式输出，注意不要把字段名放到字段值中。\n\n ${voiceText}`,
          );

          if (res.data) {
            const data = cleanData(res.data.outputs.Text) as VoiceForm;

            setForm(data);
          }

          resolve(res);
          setVoiceText("");
          closeAll();

          addToast({ title: "处理完成", color: "success", timeout: 2000 });
        }),
      });
    }

    if (voiceText) {
      getVoiceFormText();
    }
  }, [voiceText]);

  return (
    <VoiceFormContext.Provider
      value={{ voiceText, setVoiceText, voicing, setVoicing, form, updateForm }}
    >
      {children}
    </VoiceFormContext.Provider>
  );
};

export default VoiceFormProvider;
