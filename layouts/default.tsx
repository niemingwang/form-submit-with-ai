import { Head } from "./head";

import { Navbar } from "@/components/navbar";

export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative flex flex-col h-screen">
      <Head />
      <Navbar />
      <main className="container mx-auto max-w-3xl px-8 flex-grow py-4">
        {children}
      </main>
      {/*<footer className="w-full flex items-center justify-center py-3">*/}
      {/*  footer*/}
      {/*</footer>*/}
    </div>
  );
}
