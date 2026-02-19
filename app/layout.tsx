import "./globals.css";
import type { ReactNode } from "react";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-[var(--cream)] font-sans leading-relaxed">
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}