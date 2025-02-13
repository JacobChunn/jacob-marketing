import type { Metadata } from "next";
import { Inter, Roboto } from "next/font/google";
import "./app.css";
import ThemeProvider from "@/components/theme-provider";

const roboto = Roboto({
  weight: ['500', '700'],
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: "JC Marketing Solutions LLC",
  description: "Website for JC Marketing Solutions LLC",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={roboto.className}>
      <body>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
