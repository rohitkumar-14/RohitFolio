import type { Metadata } from "next";
import { Inter, Space_Grotesk, Syne } from "next/font/google";
import "./globals.css";
import SmoothScrollProvider from "@/components/providers/SmoothScrollProvider";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ThemeSwitcher from "@/components/layout/ThemeSwitcher";
import ScrollProgressBar from "@/components/ui/ScrollProgressBar";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Rohit Kumar — Frontend Developer",
  description: "Portfolio of Rohit Kumar, a Frontend Engineer with 2+ years of experience building scalable web applications with React.js, Next.js, TypeScript, and Tailwind CSS.",
  keywords: ["Rohit Kumar", "Frontend Developer", "React Developer", "Next.js", "TypeScript", "Portfolio"],
  authors: [{ name: "Rohit Kumar", url: "https://rohitfoliio.netlify.app" }],
  openGraph: {
    title: "Rohit Kumar — Frontend Developer",
    description: "Frontend Engineer building scalable, high-performance web applications.",
    url: "https://rohitfoliio.netlify.app",
    siteName: "Rohit Kumar Portfolio",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Rohit Kumar — Frontend Developer",
    description: "Frontend Engineer building scalable, high-performance web applications.",
  },
  icons: {
    icon: "/favicon.jpg",
    apple: "/favicon.jpg",
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
      className={`${inter.variable} ${spaceGrotesk.variable} ${syne.variable} h-full antialiased dark scroll-smooth`}
      style={{ colorScheme: "dark" }}
      suppressHydrationWarning
    >
      <head>
        <link href="https://api.fontshare.com/v2/css?f[]=general-sans@400,500,600,700&display=swap" rel="stylesheet" />
      </head>
      <body className="min-h-full flex flex-col bg-background text-text overflow-x-hidden transition-colors duration-500" suppressHydrationWarning>
        <ScrollProgressBar />
        <SmoothScrollProvider>
          <Navbar />
          <main className="flex-1 w-full">{children}</main>
          <Footer />
          <ThemeSwitcher />
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
