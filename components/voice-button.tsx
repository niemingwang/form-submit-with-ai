"use client";

import { isEmpty } from "lodash-es";
import { Button } from "@heroui/button";
import { useContext, useRef } from "react";
import { addToast } from "@heroui/toast";

import { VoiceIcon, VoiceIconAnimation } from "@/components/icons";
import VoiceFormContext from "@/contexts/voice-form/context";

export const VoiceButton = () => {
  const context = useContext(VoiceFormContext);

  if (!context) {
    throw new Error("VoiceFormContext 未提供值");
  }

  const { setVoiceText, voicing, setVoicing } = context;

  const recognitionRef = useRef<any>(null);
  const startTimeRef = useRef<number>(0); // 记录按下时间

  const startListening = () => {
    if (typeof window === "undefined") return;

    const SpeechRecognitionAPI =
      (window as any).SpeechRecognition ||
      (window as any).webkitSpeechRecognition;

    if (!SpeechRecognitionAPI) {
      alert("您的浏览器不支持语音识别功能");

      return;
    }

    const recognition = new SpeechRecognitionAPI() as SpeechRecognition;

    // recognition.lang = "zh-CN"; // 语言
    recognition.continuous = true; // 持续监听（可选）
    recognition.interimResults = false; // 仅返回最终结果

    // 记录按下的开始时间
    startTimeRef.current = Date.now();

    recognition.onstart = () => setVoicing(true);
    recognition.onend = () => {
      setVoicing(false);
      const duration = Date.now() - startTimeRef.current; // 计算按住的时长

      if (duration < 1000) {
        addToast({
          title: "说话时间太短",
          timeout: 2000,
          color: "warning",
        });

        return;
      }
    };
    recognition.onerror = (event: SpeechRecognitionEvent) =>
      console.error("语音识别错误:", event);

    recognition.onresult = (event: SpeechRecognitionEvent) => {
      const resultText = event.results[0][0].transcript;

      if (isEmpty(resultText)) {
        addToast({
          title: "长按后重试",
          timeout: 2000,
          description: "未识别到语音输入...",
          color: "warning",
        });
      } else {
        setVoiceText(resultText);
      }
    };

    recognition.start();
    recognitionRef.current = recognition;
  };

  // 停止语音识别
  const stopListening = () => {
    if (recognitionRef.current) {
      recognitionRef.current.stop();
      setVoicing(false);
    }
  };

  return (
    <>
      <Button
        className={"col-span-2 bg-custom-gradient text-white"}
        color="primary"
        startContent={voicing ? <VoiceIconAnimation /> : <VoiceIcon />}
        variant="flat"
        onPressEnd={stopListening}
        onPressStart={startListening}
      >
        {voicing ? "聆听中...（松开 结束）" : "语音输入（按住 说话）"}
      </Button>
    </>
  );
};
