import type { Metadata } from "next";

import "../globals.css";
import Header from "@/components/header";
import HeaderContent from "@/components/header-content";
import { ThemeProvider } from "@/components/theme-provider";

export const metadata: Metadata = {
  title: "Disney+ Clone",
  description: "Built with NextJS",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className="bg-dark-background">
        <ThemeProvider
          attribute="class"
          forcedTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
        >
          <Header>
            <HeaderContent />
          </Header>
          {children}
        </ThemeProvider>
        <div id="overlay-root"></div>
      </body>
    </html>
  );
}
