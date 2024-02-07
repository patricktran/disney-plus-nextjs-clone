import type { Metadata } from "next";

import "../globals.css";
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
      <body className="bg-black">
        <ThemeProvider
          attribute="class"
          forcedTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
        >
          <div className="overflow-hidden absolute z-10 w-full h-full top-0 right-0 flex items-center">
            {children}
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
