import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono, Inter } from "next/font/google";

import { Analytics } from "@vercel/analytics/next";

import { ThemeProvider } from "@/components/common/theme-provider";
import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryProvider } from "@/lib/query-provider";
import { cn } from "@/lib/utils";

import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const appBaseUrl =
  process.env.NEXT_PUBLIC_APP_BASE_URL ?? "http://localhost:3000";

const siteTitle = "CodeNook — AI code reviews for your GitHub pull requests";
const siteDescription =
  "CodeNook reviews GitHub pull requests with context from your repository and posts a clear walkthrough, potential issues, and actionable suggestions right on GitHub.";

export const metadata: Metadata = {
  metadataBase: new URL(appBaseUrl),
  title: siteTitle,
  description: siteDescription,
  applicationName: "CodeNook",
  openGraph: {
    type: "website",
    siteName: "CodeNook",
    title: siteTitle,
    description: siteDescription,
    url: "/",
  },
  twitter: {
    card: "summary",
    title: siteTitle,
    description: siteDescription,
  },
};

export const viewport: Viewport = {
  themeColor: "#0d1117",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={cn(
        "h-full",
        "antialiased",
        geistSans.variable,
        geistMono.variable,
        "font-sans",
        inter.variable
      )}
      suppressHydrationWarning
    >
      <body className="">
        <QueryProvider>
          <ThemeProvider
            attribute="class"
            forcedTheme="dark"
            disableTransitionOnChange
          >
            <TooltipProvider>
              {children}
              <Analytics />
              <Toaster />
            </TooltipProvider>
          </ThemeProvider>
        </QueryProvider>
      </body>
    </html>
  );
}
