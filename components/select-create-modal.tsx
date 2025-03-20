import { useDisclosure } from "@heroui/modal";
import { useContext, useEffect, useState } from "react";
import { Button } from "@heroui/button";

import VoiceFormContext from "@/contexts/voice-form/context";
import { CreateType } from "@/types";

export const createTypeArray = [
  { key: CreateType.MAKE_SPEECH, label: "致辞发言" },
  { key: CreateType.THINK_REPORT, label: "思想汇报" },
  { key: CreateType.PROMOTION_TEXT, label: "宣传文案" },
  { key: CreateType.SUMMARY_REPORT, label: "总结汇报" },
];

export const SelectCreateModal = () => {
  const context = useContext(VoiceFormContext);

  if (!context) {
    throw new Error("VoiceFormContext 未提供值");
  }

  const { setCreateType, updateForm } = context;

  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(true);
  }, []);

  const { onOpenChange } = useDisclosure();

  const onClick = (key: CreateType) => {
    setCreateType(key);
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
      {createTypeArray.map((item) => (
        <Button
          key={item.key}
          color="primary"
          variant="flat"
          onPress={() => onClick(item.key as CreateType)}
        >
          {item.label}
        </Button>
      ))}
    </div>
    // <Modal hideCloseButton isOpen={open} onOpenChange={onOpenChange}>
    //   <ModalContent>
    //     {() => (
    //       <>
    //         <ModalHeader className="flex flex-col gap-1">
    //           选择创作类型
    //         </ModalHeader>
    //         <ModalBody>
    //           <div className={"py-4 flex flex-col gap-4"}>
    //             {createTypeArray.map((item) => (
    //               <Button
    //                 key={item.key}
    //                 color="primary"
    //                 variant="flat"
    //                 onPress={() => onClick(item.key as CreateType)}
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
