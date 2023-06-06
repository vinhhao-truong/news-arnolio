import "../styles/globals.scss";
import { Inter, Playfair_Display, Lora } from "next/font/google";
import { Metadata } from "next";
import Navigation from "../components/layout/Navigation";
import Footer from "../components/layout/Footer";
import PageContainer from "../components/layout/PageContainer";
import Provider from "../services/redux/Provider";

const inter = Lora({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Arnolio News",
  description: "Archived news for demo purpose.",
  authors: {
    name: "Arnold Truong",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body className={`${inter.className} flex flex-col gap-4`}>
        <Provider>
          <Navigation />
          <PageContainer>{children}</PageContainer>
          <PageContainer>
            <Footer />
          </PageContainer>
        </Provider>
      </body>
    </html>
  );
}
