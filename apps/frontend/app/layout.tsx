import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Air Quality Monitoring",
  description: "Air qualitiy monitoring system",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>
        {children}
      </body>
    </html>
  );
}
