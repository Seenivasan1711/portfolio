import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "Seenivasan A — Software Engineer",
  description:
    "Full-Stack Engineer building AI-assisted, production-grade systems. Software Engineer at Viome, previously Testsigma.",
  metadataBase: new URL("https://seenivasan1711.github.io/portfolio"),
  openGraph: {
    title: "Seenivasan A — Software Engineer",
    description: "Full-Stack Engineer building AI-assisted, production-grade systems.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} font-sans antialiased bg-canvas text-ink`}>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
