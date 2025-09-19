import React from "react";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ThemeProvider from "@/components/ThemeProvider";
import { LanguageProvider } from "@/lib/contexts/LanguageContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Election Candidates | OS Nepal",
  description:
    "Track and predict voting trends with peer voting and explore detailed profiles of election candidates. A project by the Open Source Nepal community.",
  keywords:
    "election candidates, voting trends, peer voting, Open Source Nepal, election predictions, candidate profiles, voting platform, Nepal elections, Nepal politics, digital democracy, political awareness, voter education, Nepali candidates, Nepal government, general elections Nepal, election analytics, voter insights, public opinion, election transparency, local elections Nepal, federal elections Nepal, voting system Nepal, open data elections, youth in politics, civic engagement Nepal, political participation, real-time voting, election map Nepal, crowdsourced voting, political data Nepal, चुनाव २०८२, नेपाल निर्वाचन, मतदाता सूची, उम्मेदवार विवरण, निर्वाचन परिणाम, निर्वाचन क्षेत्र, राजनीतिक दल, मत गणना, जनता को विचार, डिजिटल मतदान नेपाल, प्रदेश निर्वाचन, नगर निर्वाचन, प्रमुख उम्मेदवार, मतदाता जागरूकता, चुनावी बहस, निर्वाचन आयोग, नेपाली राजनीति, खुला मतदान प्लेटफर्म, नागरिक सहभागिता, लोकतन्त्र नेपाल, राजनीतिक पारदर्शिता, मतदान प्रवृत्ति, उम्मेदवार तुलना, चुनावी तथ्यांक",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider>
          <LanguageProvider>{children}</LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
