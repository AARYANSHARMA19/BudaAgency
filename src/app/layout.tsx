import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "BudaAgency — launch-ready websites for small businesses",
    template: "%s — BudaAgency",
  },
  description:
    "A focused website, a clear customer journey, and a 30-minute free consultation — built for small businesses.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className="h-full antialiased"
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
