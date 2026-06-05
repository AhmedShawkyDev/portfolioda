import { Fira_Code } from "next/font/google";
import { Providers } from "@/components/Providers";
import Header from "@/components/header/Header";
import Footer from "@/components/footer";
import "./globals.css";
import AOSProvider from "@/components/AOSProvider";

const fira = Fira_Code({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-fira-code",
  display: "swap",
});

export const metadata = {
  title: "Ahmed Shawky | Portfolio",
  description: "Welcome to my portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html
      suppressHydrationWarning
      lang="en"
      className={`${fira.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <AOSProvider>
          <Providers
            defaultTheme="dark"
            value={{ light: "light", dark: "dark" }}
          >
            <Header />
            {children}
            <Footer />
          </Providers>
        </AOSProvider>
      </body>
    </html>
  );
}

