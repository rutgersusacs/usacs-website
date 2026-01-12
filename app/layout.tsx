import "./globals.css";
import type { ReactNode } from "react";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
    <body className="bg-cream font-sans leading-relaxed pt-16">
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}

