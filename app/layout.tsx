import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import HeaderContent from "@/components/HeaderContent";
import { ThemeProvider } from "@/components/ThemeProvider";

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
      <body className="bg-white dark:bg-dark-background">
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
      </body>
    </html>
  );
}
