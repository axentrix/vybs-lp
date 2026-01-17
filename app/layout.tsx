import type { Metadata } from "next";
import { getImagePath } from './utils/basePath';
import { Geist, Geist_Mono, Kanit, Caveat } from "next/font/google";
import ExitIntentPopup from './components/ExitIntentPopup';
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const kanit = Kanit({
  variable: "--font-kanit",
  subsets: ["latin"],
  weight: ["400", "700", "800"],
});

const caveat = Caveat({
  variable: "--font-caveat",
  subsets: ["latin"],
  weight: ["400", "700"],
});

const isProd = process.env.NODE_ENV === 'production';
const basePath = isProd ? '/vybs-lp' : '';

export const metadata: Metadata = {
  title: "VYBS - Play Games You Love",
  description: "Play games you love. Earn rewards fast.",
  icons: {
    apple: `${basePath}/images/apple-touch-icon.png`,
    icon: [
      {
        url: `${basePath}/images/favicon-32x32.png`,
        sizes: "32x32",
        type: "image/png",
      },
      {
        url: `${basePath}/images/favicon-16x16.png`,
        sizes: "16x16",
        type: "image/png",
      },
    ],
  },
  manifest: `${basePath}/site.webmanifest`,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${kanit.variable} ${caveat.variable} antialiased`}
      >
        <ExitIntentPopup />
        {children}
      </body>
    </html>
  );
}
