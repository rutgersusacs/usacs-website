import "./globals.css";
import type { ReactNode } from "react";
import Footer from "./components/Footer";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-[var(--cream)] font-sans leading-relaxed">
        {children}
        <Footer />
      </body>
    </html>
  );
}
