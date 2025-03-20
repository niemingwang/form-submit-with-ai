import { useContext, useEffect, useState } from "react";
import { Textarea } from "@heroui/input";
import { Button } from "@heroui/button";
import { ToastProvider } from "@heroui/toast";

import VoiceFormContext from "@/contexts/voice-form/context";

const VoiceInput = () => {
  const [text, setText] = useState("");

  const context = useContext(VoiceFormContext);

  if (!context) {
    throw new Error("VoiceFormContext 未提供值");
  }

  const {
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
    setVoiceText(text);
    startAnalysis(text);
  };

  useEffect(() => {
    if (!voiceText) {
      setText("");
    }
  }, [voiceText, tab]);

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
        isDisabled={text.length === 0 || fetching || !formType}
        onPress={updateVoiceText}
      >
        确定
      </Button>
    </div>
  );
};

export default VoiceInput;
