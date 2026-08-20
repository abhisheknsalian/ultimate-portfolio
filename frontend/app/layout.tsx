import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

import "./globals.css";

import Background from "@/components/layout/background";
import Footer from "@/components/layout/footer";
import Navbar from "@/components/layout/navbar";
import { ThemeProvider } from "@/components/providers/theme-provider";
import { LanguageProvider } from "@/i18n";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://abhisheknageshsalian.vercel.app"), 

  alternates: {
  canonical: "https://abhisheknageshsalian.vercel.app",
  },

  title: {
    default: "Abhishek Nagesh Salian | Machine Learning Engineer",
    template: "%s | Abhishek Nagesh Salian",
  },

  description:
    "Machine Learning Engineer and Data Engineer building intelligent AI systems, scalable cloud data platforms, and production-ready machine learning solutions.",

  keywords: [
    "Abhishek Nagesh Salian",
    "Machine Learning Engineer",
    "Data Engineer",
    "Data Scientist",
    "Artificial Intelligence",
    "Generative AI",
    "Python",
    "AWS",
    "Terraform",
    "Docker",
    "Cloud",
    "Portfolio",
    "Germany",
    "Berlin",
  ],

  authors: [
    {
      name: "Abhishek Nagesh Salian",
    },
  ],

  creator: "Abhishek Nagesh Salian",

  publisher: "Abhishek Nagesh Salian",

  category: "Technology",

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-video-preview": -1,
      "max-snippet": -1,
    },
  },

  openGraph: {
  type: "website",
  locale: "en_US",
  url: "https://abhisheknageshsalian.vercel.app",
  siteName: "Abhishek Nagesh Salian",
  title: "Abhishek Nagesh Salian | Machine Learning Engineer",
  description:
    "Machine Learning Engineer and Data Engineer building intelligent AI systems, scalable cloud data platforms, and production-ready machine learning solutions.",
  images: [
    {
      url: "/og-image.png",
      width: 1200,
      height: 630,
      alt: "Abhishek Nagesh Salian Portfolio",
    },
  ],
},

twitter: {
  card: "summary_large_image",
  title: "Abhishek Nagesh Salian | Machine Learning Engineer",
  description:
    "Machine Learning Engineer and Data Engineer building intelligent AI systems.",
  images: ["/og-image.png"],
},
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
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <LanguageProvider>
           <Background />
           <Navbar />

           <main>{children}</main>
           <Footer />
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
  
}