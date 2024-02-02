import { Commissioner } from "next/font/google";
import "./globals.css";
import Aside from "@/components/header/aside";
import Nav from "@/components/header/nav";
import MainContainerShadow from "@/components/mainContainerShadow/mainContainerShadow";
import Footer from "@/components/footer/footer";
import { NextAuthProvider } from "../providers/Providers";
import { OnboardingProvider } from "../context/MyContext";
const font = Commissioner({ subsets: ["latin"] });
import { ToastContainer } from "react-toastify";
import Head from "next/head";

export const metadata = {
  title: "Bitcoin Options",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={font.className}>
        <NextAuthProvider>
          <OnboardingProvider>
            <ToastContainer />
            <Aside />
            <Nav />
            <Head>
        {/* Google Analytics Tracking Code */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-XMSENTDEMW"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-XMSENTDEMW');
            `,
          }}
        />
      </Head>
            <MainContainerShadow>{children}</MainContainerShadow>
            <Footer />
          </OnboardingProvider>
        </NextAuthProvider>
      </body>
    </html>
  );
}
