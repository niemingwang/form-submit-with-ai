import { useContext, useEffect, useState } from "react";
import { Textarea } from "@heroui/input";
import { Button } from "@heroui/button";
import { addToast, ToastProvider } from "@heroui/toast";
import { isEmpty } from "lodash-es";

import VoiceFormContext from "@/contexts/voice-form/context";

const VoiceInput = () => {
  const [text, setText] = useState("");

  const context = useContext(VoiceFormContext);

  if (!context) {
    throw new Error("VoiceFormContext 未提供值");
  }

  const {
    setReportPrompt,
    setCreatePrompt,
    setVoiceText,
    fetching,
    voiceText,
    startAnalysis,
    tab,
    formType,
    reportType,
    createType,
  } = context;

  const updateVoiceText = () => {
    if (isEmpty(text)) {
      addToast({
        title: "请先输入提示词",
        timeout: 1000,
        color: "warning",
      });

      return;
    }
    if (tab === "form") {
      setVoiceText(text);
      startAnalysis(text);
    }

    if (tab === "report") {
      setReportPrompt(text);
    }

    if (tab === "create") {
      setCreatePrompt(text);
    }
  };

  useEffect(() => {
    if (!voiceText) {
      setText("");
    }
  }, [voiceText, tab, formType, reportType, createType]);

  if (tab === "bi" || tab === "other") {
    return null;
  }

  if (tab === "form" && !formType) {
    return null;
  }

  if (tab === "report" && !reportType) {
    return null;
  }

  if (tab === "create" && !createType) {
    return null;
  }

  return (
    <div className="w-full flex flex-col gap-2">
      <ToastProvider placement={"bottom-center"} />
      <Textarea
        isClearable
        isReadOnly={fetching}
        placeholder="语音输入更便捷..."
        value={text}
        variant="bordered"
        onChange={(e) => setText(e.target.value)}
        onClear={() => setText("")}
      />
      <Button
        className={"bg-custom-gradient text-white"}
        isDisabled={fetching}
        onPress={updateVoiceText}
      >
        确定
      </Button>
    </div>
  );
};

export default VoiceInput;
