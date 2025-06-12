import type { Metadata } from "next";
// Importe a fonte Inter
import { Inter } from 'next/font/google';
import "./globals.css";

// Configure a fonte Inter
const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Maxille Tasco",
  description: "< Web Developer >",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      {/* Aplique a classe da fonte ao body */}
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}