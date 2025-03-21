import type { AppProps } from "next/app";

import { HeroUIProvider } from "@heroui/system";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { useRouter } from "next/router";

import { fontSans, fontMono } from "@/config/fonts";
import "@/styles/globals.css";
import VoiceFormProvider from "@/contexts/voice-form/provider";

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();

  return (
    <VoiceFormProvider>
      <HeroUIProvider navigate={router.push}>
        <NextThemesProvider>
          <Component {...pageProps} />
        </NextThemesProvider>
      </HeroUIProvider>
    </VoiceFormProvider>
  );
}

export const fonts = {
  sans: fontSans.style.fontFamily,
  mono: fontMono.style.fontFamily,
};
