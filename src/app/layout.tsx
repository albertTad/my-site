import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Albert Tadros | Full Stack Engineer | AI & Cloud",
  description: "Albert Tadros — full stack engineer exploring AI and cloud systems. Projects in secure software, data privacy, and machine learning.",
  icons: {},
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}