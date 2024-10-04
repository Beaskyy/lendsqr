import type { Metadata } from "next";
import "./globals.css";
import { Work_Sans } from "next/font/google";
import { ContextProvider } from "@/contexts/ContextProvider";

const workSans = Work_Sans({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Lendsqr",
  description: "Admin Dashboard",
  icons: {
    icon: "/union.svg"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${workSans.className}`}>
        <ContextProvider>{children}</ContextProvider>
      </body>
    </html>
  );
}
