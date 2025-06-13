import type { Metadata } from "next";
import { VT323 } from 'next/font/google';
import "./globals.css";

const vt323 = VT323({
  weight: '400',
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
      <body className={vt323.className}>
        {children}
      </body>
    </html>
  );
}