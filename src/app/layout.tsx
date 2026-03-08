import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Albert Tadros | Full Stack & AI Engineer",
  description: "Portfolio for a Full Stack & AI Engineer",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}