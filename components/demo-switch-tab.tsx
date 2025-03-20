import React, { useContext } from "react";
import { Tab, Tabs } from "@heroui/tabs";

import VoiceFormContext from "@/contexts/voice-form/context";
import { ArrowDownIcon } from "@/components/icons";

const tabs = [
  {
    key: "bi",
    title: "ChatBI",
  },
  {
    key: "form",
    title: "智慧表单",
  },
  {
    key: "report",
    title: "智慧周报",
  },
  {
    key: "create",
    title: "智能创作",
  },
];

// 定义一个泛型函数，用于从对象数组中提取某个属性的类型
type ExtractPropertyType<T extends object, K extends keyof T> = T[K];

// 从 users 数组中提取 name 属性的类型
export type TabType = ExtractPropertyType<(typeof tabs)[number], "key">;

export const DemoSwitchTab = () => {
  const context = useContext(VoiceFormContext);

  if (!context) {
    throw new Error("VoiceFormContext 未提供值");
  }

  const { setTab, setFormType, setVoiceText, setReportType } = context;

  const updateDemoType = (key: React.Key) => {
    if (key !== "form") {
      setVoiceText("");
    } else {
      setFormType(undefined);
    }
    setReportType(undefined);
    setTab(key as TabType);
  };

  return (
    <Tabs
      fullWidth
      aria-label="Options"
      className={"max-w-3xl mx-auto"}
      color="primary"
      onSelectionChange={updateDemoType}
    >
      {tabs.map((item) =>
        item.key === "bi" ? (
          <Tab
            key={item.key}
            title={
              <div className="flex items-center space-x-1">
                <span>{item.title}</span>
              </div>
            }
          />
        ) : (
          <Tab
            key={item.key}
            title={
              <div className="flex items-center space-x-1">
                <span>{item.title}</span>
                <ArrowDownIcon size={18} />
              </div>
            }
          />
        ),
      )}
    </Tabs>
  );
};
