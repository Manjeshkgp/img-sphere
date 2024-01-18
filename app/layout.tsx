import "./globals.css";
import { Metadata } from "next";
import dynamic from "next/dynamic";
import { StoreProviders } from "@/store/StoreProvider";
import AuthProvider from "@/components/Auth/AuthProvider";

const Providers = dynamic(() => import("@/components/Theme/ThemeProvider"));
const Navbar = dynamic(() => import("@/components/Navbar/Navbar"));
const ThemeChanger = dynamic(() => import("@/components/Theme/ThemeChanger"));

export const metadata: Metadata = {
  title: "Image Sphere",
  description: "Find Best Images here",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <AuthProvider>
    <html>
      <body>
        <StoreProviders>
          <Providers>
            <Navbar />
            {children}
            <ThemeChanger />
          </Providers>
        </StoreProviders>
      </body>
    </html>
    </AuthProvider>
  );
}
