import type { Metadata } from "next";
import "@styles/globals.css";

export const metadata: Metadata = {
  title: "Base Next template",
  description: "Base Next template description",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br">
      <body className="flex justify-center">{children}</body>
    </html>
  );
}
