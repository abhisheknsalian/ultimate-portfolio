import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://portfolio.vercel.app"),
  title: {
    default: "Abhishek Nagesh Salian",
    template: "%s | Abhishek Nagesh Salian",
  },
  description:
    "Machine Learning Engineer, Data Engineer and AI Systems Builder based in Germany.",
  keywords: [
    "Machine Learning",
    "Data Science",
    "Data Engineering",
    "AI",
    "Python",
    "AWS",
    "Portfolio",
  ],
  authors: [{ name: "Abhishek Nagesh Salian" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-screen bg-background text-foreground">
        {children}
      </body>
    </html>
  );
}