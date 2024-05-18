import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "The Music Festival",
  description: "Music Festival Website Showcase",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
