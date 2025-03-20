import React, { useContext } from "react";
import { Button } from "@heroui/button";
import { Link } from "@heroui/link";

import DefaultLayout from "@/layouts/default";
import VoiceFormContext from "@/contexts/voice-form/context";
import { FormAssistant } from "@/components/demos/form-assistant";
import { SelectFormModal } from "@/components/select-form-modal";
import { SelectReportModal } from "@/components/select-report-modal";
import { SmartReport } from "@/components/demos/smart-report";
import { SelectCreateModal } from "@/components/select-create-modal";

export default function IndexPage({ children }: { children: React.ReactNode }) {
  const context = useContext(VoiceFormContext);

  if (!context) {
    throw new Error("VoiceFormContext 未提供值");
  }

  const { tab, formType, reportType, createType } = context;

  if (tab === "bi") {
    return (
      <DefaultLayout>
        <div className={"h-full w-full flex items-center justify-center pt-10"}>
          <Button
            showAnchorIcon
            as={Link}
            color={"primary"}
            href={"https://chatbi.cloud.tencent.com/"}
          >
            前往 ChatBI
          </Button>
        </div>
      </DefaultLayout>
    );
  }

  if (tab === "form") {
    switch (formType) {
      case "1": {
        return (
          <DefaultLayout>
            <FormAssistant />
          </DefaultLayout>
        );
      }
      case "2": {
        return (
          <DefaultLayout>
            <FormAssistant />
          </DefaultLayout>
        );
      }
      case "3": {
        return (
          <DefaultLayout>
            <FormAssistant />
          </DefaultLayout>
        );
      }
      case "4": {
        return (
          <DefaultLayout>
            <FormAssistant />
          </DefaultLayout>
        );
      }
      default:
        return (
          <DefaultLayout>
            <SelectFormModal />
          </DefaultLayout>
        );
    }
  }

  if (tab === "report") {
    if (!reportType) {
      return (
        <DefaultLayout>
          <SelectReportModal />
        </DefaultLayout>
      );
    } else {
      return (
        <DefaultLayout>
          <SmartReport />
        </DefaultLayout>
      );
    }
  }

  if (tab === "create") {
    if (!createType) {
      return (
        <DefaultLayout>
          <SelectCreateModal />
        </DefaultLayout>
      );
    } else {
      return (
        <DefaultLayout>
          <SmartReport />
        </DefaultLayout>
      );
    }
  }

  return <DefaultLayout>{children}</DefaultLayout>;
}
