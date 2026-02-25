import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Jaiman Sharma | Cybersecurity + Software Engineering - Automation Focused",
  description:
    "Bachelor of Computing (Honours) @ Queen's with focuses in (Cybersecurity + AI). Cloud Security Intern at Sectra AB (Jun–Aug 2025, Mississauga, ON). I build reliable, automated systems and I like breaking them (responsibly) to understand risk.",
  openGraph: {
    title: "Jaiman Sharma | Cybersecurity + Software Engineering - Automation Focused",
    description:
      "Bachelor of Computing (Honours) @ Queen's with focuses in (Cybersecurity + AI). Cloud Security Intern at Sectra AB (Jun–Aug 2025, Mississauga, ON). Building automated, reliable systems.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>{children}</body>
    </html>
  );
}

