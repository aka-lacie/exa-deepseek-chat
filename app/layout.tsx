import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Analytics } from '@vercel/analytics/next';

// Load the ABCDiatype font (Regular and Bold only)
const abcdDiatype = localFont({
  src: [
    { path: "./fonts/ABCDiatype-Regular.otf", weight: "400" },
    { path: "./fonts/ABCDiatype-Bold.otf", weight: "700" },
  ],
  variable: "--font-abcd-diatype",
});

// Load the Reckless font (Regular and Medium only)
const reckless = localFont({
  src: [
    { path: "./fonts/RecklessTRIAL-Regular.woff2", weight: "400" },
    { path: "./fonts/RecklessTRIAL-Medium.woff2", weight: "500" },
  ],
  variable: "--font-reckless",
});

export const metadata: Metadata = {
  title: "Exa & Deepseek Chat App",
  description: "An opensource chat application built with Exa for web search and Deepseek R1.",
  openGraph: {
    title: "Exa & Deepseek Chat App",
    description: "An opensource chat application built with Exa for web search and Deepseek R1.",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "https://demo.exa.ai/deepseekchat/opengraph-image.jpg",
        width: 1200,
        height: 630,
        alt: "Exa & Deepseek Chat App"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Exa & Deepseek Chat App",
    description: "An opensource chat application built with Exa for web search and Deepseek R1.",
    images: ["https://demo.exa.ai/deepseekchat/opengraph-image.jpg"]
  },
  metadataBase: new URL("https://demo.exa.ai/deepseekchat"),
  robots: {
    index: true,
    follow: true
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${abcdDiatype.variable} ${reckless.variable} antialiased`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
