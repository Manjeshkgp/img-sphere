import "./globals.css";
import { Metadata } from "next";
import dynamic from "next/dynamic";

const Providers = dynamic(()=>import("@/components/Theme/ThemeProvider"));
const ThemeChanger = dynamic(()=>import("@/components/Theme/ThemeChanger"));

export const metadata: Metadata = {
  title: "Create Night Mode",
  description: "Manually Created",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <body>
        <Providers>
          {/* <div className="relative"> */}
            <ThemeChanger />
            {children}
          {/* </div> */}
        </Providers>
      </body>
    </html>
  );
}
