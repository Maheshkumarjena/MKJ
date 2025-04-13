import type { Metadata } from "next";
// import { Inter } from "next/font/google";
import "./globals.css";
// import Navigation from "@/components/Navigation";
import BackgroundCanvas from "@/components/Background";

// const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Mahesh Kumar Jena | Full-Stack Developer",
  description: "Portfolio website showcasing full-stack development projects",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth ">
      <body className={`$ bg-white text-black antialiased`}>
        <div className="sticky ">
      <BackgroundCanvas />

        </div>
        <div className="relative z-10"> {/* Ensure content is above the canvas */}
          {children}
        </div>
      </body>
    </html>
  );
}
