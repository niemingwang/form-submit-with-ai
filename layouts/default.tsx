import { ScrollShadow } from "@heroui/scroll-shadow";
import { useContext } from "react";
import clsx from "clsx";

import { Head } from "./head";

import VoiceInput from "@/components/voice-input";
import { DemoSwitchTab } from "@/components/demo-switch-tab";
import { Navbar } from "@/components/navbar";
import VoiceFormContext from "@/contexts/voice-form/context";

export default function DefaultLayout({
  hideNav,
  children,
}: {
  hideNav?: boolean;
  children: React.ReactNode;
}) {
  const context = useContext(VoiceFormContext);

  if (!context) {
    throw new Error("VoiceFormContext 未提供值");
  }

  const { tab } = context;

  return (
    <div className="relative flex flex-col h-screen">
      <Head />
      {!hideNav && <Navbar />}
      <ScrollShadow className={"h-full"}>
        <main className="container mx-auto max-w-3xl  flex-grow  flex flex-1 overflow-hidden">
          <div
            className={clsx(
              "h-full w-full overflow-y-auto",
              tab === "bi" ? null : "px-8 py-4",
            )}
          >
            {children}
          </div>
        </main>
      </ScrollShadow>
      <footer className="w-full bg-background flex flex-col items-center justify-center">
        {tab !== "bi" && tab !== "other" && (
          <div className={"w-full max-w-3xl px-8 py-4"}>
            <VoiceInput />
          </div>
        )}
        <DemoSwitchTab />
      </footer>
    </div>
  );
}
