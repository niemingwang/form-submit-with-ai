import { useContext, useState } from "react";
import { Textarea } from "@heroui/input";
import { Button } from "@heroui/button";

import VoiceFormContext from "@/contexts/voice-form/context";

const VoiceInput = () => {
  const [text, setText] = useState("");

  const context = useContext(VoiceFormContext);

  if (!context) {
    throw new Error("VoiceFormContext 未提供值");
  }

  const { setVoiceText } = context;

  const updateVoiceText = () => {
    setVoiceText(text);
  };

  return (
    <div className="w-full flex flex-col gap-2">
      <Textarea
        isClearable
        placeholder="支持语音输入"
        variant="bordered"
        onChange={(e) => setText(e.target.value)}
        onClear={() => setText("")}
      />
      <Button
        className={"bg-custom-gradient text-white"}
        isDisabled={text.length === 0}
        onPress={updateVoiceText}
      >
        确定
      </Button>
    </div>
  );
};

export default VoiceInput;
