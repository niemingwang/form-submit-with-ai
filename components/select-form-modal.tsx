import { useDisclosure } from "@heroui/modal";
import { useContext, useEffect, useState } from "react";
import { Button } from "@heroui/button";

import VoiceFormContext from "@/contexts/voice-form/context";
import { FormType } from "@/types/voice-form";

const forms = [
  { key: "1", label: "家宴登记单" },
  { key: "2", label: "一桌式品鉴" },
  { key: "3", label: "赠酒登记单" },
  { key: "4", label: "其他登记单" },
];

export const SelectFormModal = () => {
  const context = useContext(VoiceFormContext);

  if (!context) {
    throw new Error("VoiceFormContext 未提供值");
  }

  const { setFormType, updateForm } = context;

  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(true);
  }, []);

  const { onOpenChange } = useDisclosure();

  const onClick = (key: FormType) => {
    setFormType(key);
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
      {forms.map((item) => (
        <Button
          key={item.key}
          color="primary"
          variant="flat"
          onPress={() => onClick(item.key as FormType)}
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
    //           选择表单类型
    //         </ModalHeader>
    //         <ModalBody>
    //           <div className={"py-4 flex flex-col gap-4"}>
    //             {forms.map((item) => (
    //               <Button
    //                 key={item.key}
    //                 color="primary"
    //                 variant="flat"
    //                 onPress={() => onClick(item.key as FormType)}
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
