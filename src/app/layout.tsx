import type { Metadata } from "next";
import { JetBrains_Mono, Instrument_Serif } from "next/font/google";
import { VibeKanbanProvider } from "./components/VibeKanbanProvider";
import "./globals.css";

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "saas.group — We Buy Software Companies",
  description: "The anti-acquisition acquisition company. No consultants. No pivot decks. No founder therapy sessions.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${jetbrainsMono.variable} ${instrumentSerif.variable} antialiased`}
      >
        <VibeKanbanProvider />
        {children}
      </body>
    </html>
  );
}
