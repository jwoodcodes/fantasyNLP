import "./globals.css";
import { GeistMono } from "geist/font/mono";
import { GeistSans } from "geist/font/sans";
import { ThemeProvider } from "next-themes";
import { Analytics } from "@vercel/analytics/react";

export const metadata = {
  metadataBase: new URL("https://fantasy-nlp.vercel.app/"),
  title: "NLP fantasy Data",
  description:
    "get fantasy football data with natural language questions",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${GeistMono.className} ${GeistSans.className}`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
