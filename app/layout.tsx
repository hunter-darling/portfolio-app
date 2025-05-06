import type { Metadata } from "next";
import { Playfair_Display } from "next/font/google"
import "./globals.css";
import Providers from "@/components/providers";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { cn } from "@/lib/utils";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif"
})

export const metadata: Metadata = {
  title: "Howdy Partner!",
  description: "Thanks for stopping by!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "flex min-h-screen flex-col font-verdana antialiased",
          playfair.variable
        )}
      >
          <Providers>
            <Header/>
              <main className="grow">{children}</main>
            <Footer/>
          </Providers>
      </body>
    </html>
  );
}
