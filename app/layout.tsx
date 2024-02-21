import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const font = Nunito({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Showmax | Streaming Movies, Series and Premier League across Africa",
  description: "Created by Showmax",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn("", font.className)}>
        {children}
      </body>
    </html>
  );
}
