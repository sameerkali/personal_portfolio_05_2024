import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Head from "next/head"; // Import Head component
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <html lang="en">

      <Head>
        <title>{"Sameer Faridi"}</title>
        <meta name="description" content={"Created by Sameer Faridi"} />

        <meta
          property="og:image"
          content={
            "https://media.licdn.com/dms/image/D4D03AQGAA6vZ8d-qdA/profile-displayphoto-shrink_400_400/0/1706337921133?e=1721260800&v=beta&t=6RJRqc2hV-rEYPFP7IXEMmgSs3dT5yX2_HE4XHrtc4E"
          }
        />
      </Head>
        <body className={inter.className}>{children}</body>
      </html>
    </>
  );
}
