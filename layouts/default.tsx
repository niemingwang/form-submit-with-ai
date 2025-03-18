import { ScrollShadow } from "@heroui/scroll-shadow";

import { Head } from "./head";

import { Navbar } from "@/components/navbar";
import VoiceInput from "@/components/voice-input";

export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative flex flex-col h-screen">
      <Head />
      <Navbar />
      <ScrollShadow className={"h-full"}>
        <main className="container mx-auto max-w-3xl  flex-grow  flex flex-1 overflow-hidden">
          <div className={"h-full w-full overflow-y-auto px-8 py-4"}>
            {children}
          </div>
        </main>
      </ScrollShadow>
      <footer className="w-full  bg-background flex items-center justify-center">
        <div className={"w-full px-8 py-4"}>
          <VoiceInput />
        </div>
      </footer>
    </div>
  );
}
