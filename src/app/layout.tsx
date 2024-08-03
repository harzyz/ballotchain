import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "BallotChain",
  description: "Secure, Transparent, and Accessible Voting with Blockchain Technology",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="family">{children}</body>
    </html>
  );
}
