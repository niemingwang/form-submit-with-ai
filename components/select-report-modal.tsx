import { useDisclosure } from "@heroui/modal";
import { useContext, useEffect, useState } from "react";
import { Button } from "@heroui/button";

import VoiceFormContext from "@/contexts/voice-form/context";
import { ReportType } from "@/types";

export const reportTypeArray = [
  { key: ReportType.WEEK_REPORT_MONTH, label: "本月销售周报" },
  { key: ReportType.WEEK_REPORT_STOCK, label: "本月库存周报" },
  { key: ReportType.WEEK_REPORT_DE_CAP, label: "开瓶动销周报" },
  { key: ReportType.WEEK_REPORT, label: "本周周报内容" },
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
    // <Modal
    //   hideCloseButton
    //   isOpen={open}
    //   onOpenChange={onOpenChange}
    // >
    //   <ModalContent>
    //     {() => (
    //       <>
    //         <ModalHeader className="flex flex-col gap-1">
    //           选择报告类型
    //         </ModalHeader>
    //         <ModalBody>
    //           <div className={"py-4 flex flex-col gap-4"}>
    //             {reportTypeArray.map((item) => (
    //               <Button
    //                 key={item.key}
    //                 color="primary"
    //                 variant="flat"
    //                 onPress={() => onClick(item.key as ReportType)}
    //               >
    //                 {item.label}
    //               </Button>
    //             ))}
    //           </div>
    //         </ModalBody>
    //       </>
    //     )}
    //   </ModalContent>
    // </Modal>
  );
};
