import {
  Modal,
  ModalBody,
  ModalContent,
  ModalHeader,
  useDisclosure,
} from "@heroui/modal";
import { useContext, useEffect, useState } from "react";
import { Button } from "@heroui/button";

import VoiceFormContext from "@/contexts/voice-form/context";
import { ReportType } from "@/types";

export const reportTypeArray = [
  { key: ReportType.SALE_25, label: "事业部 25 年销售指标" },
  { key: ReportType.SALE_24, label: "事业部 24 年同期销售" },
  { key: ReportType.STOCK, label: "事业部本周库存" },
  { key: ReportType.DE_CAP, label: "事业部本年度开瓶" },
];

export const SelectReportModal = () => {
  const context = useContext(VoiceFormContext);

  if (!context) {
    throw new Error("VoiceFormContext 未提供值");
  }

  const { setReportType, updateForm } = context;

  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(true);
  }, []);

  const { onOpenChange } = useDisclosure();

  const onClick = (key: ReportType) => {
    setReportType(key);
    setOpen(false);
    updateForm({
      activityName: "",
      orderType: "",
      activityProd: "",
      activityPrice: "",
      count: "",
      gift: "",
    });
  };

  return (
    <Modal hideCloseButton isOpen={open} onOpenChange={onOpenChange}>
      <ModalContent>
        {() => (
          <>
            <ModalHeader className="flex flex-col gap-1">
              选择报告类型
            </ModalHeader>
            <ModalBody>
              <div className={"py-4 flex flex-col gap-4"}>
                {reportTypeArray.map((item) => (
                  <Button
                    key={item.key}
                    color="primary"
                    variant="flat"
                    onPress={() => onClick(item.key as ReportType)}
                  >
                    {item.label}
                  </Button>
                ))}
              </div>
            </ModalBody>
          </>
        )}
      </ModalContent>
    </Modal>
  );
};
