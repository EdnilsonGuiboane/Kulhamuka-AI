import type { Metadata } from "next";
import { Mona_Sans } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";

const monaSans = Mona_Sans({
  variable: "--font-mona-sans",
  subsets: ["latin"],
});



export const metadata: Metadata = {
  title: "Entrevista Inteligente",
  description: "Uma plataforma com tecnologia de IA para preparação de entrevistas simuladas.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${monaSans.variable} ${monaSans.variable} antialiased pattern`}
      >
        {children}
        <Toaster/>
      </body>
    </html>
  );
}
