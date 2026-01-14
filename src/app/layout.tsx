import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { VibeKanbanWebCompanion } from "vibe-kanban-web-companion";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "SaaS Rebrand",
  description: "Vibe Kanban Demo - SaaS Group Rebrand",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <VibeKanbanWebCompanion />
        {children}
      </body>
    </html>
  );
}
