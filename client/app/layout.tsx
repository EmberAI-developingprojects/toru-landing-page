import type { Metadata } from "next";
import { Host_Grotesk, Geist_Mono } from "next/font/google";
import { Nav } from "@/components/layout/nav";
import { Footer } from "@/components/layout/footer";
import { ThemeProvider } from "@/components/theme/theme-provider";
import "./globals.css";

const hostGrotesk = Host_Grotesk({
  variable: "--font-sans-brand",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Toru — Any camera. Real-time intelligence.",
    template: "%s · Toru",
  },
  description:
    "Toru turns any IP camera into a live analytics sensor — dwell time, occupancy, queue length, and more. No new hardware, no rip-and-replace.",
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
      className={`${hostGrotesk.variable} ${geistMono.variable} relative h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-canvas text-text">
        <ThemeProvider>
          <Nav />
          <main className="flex-1">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
