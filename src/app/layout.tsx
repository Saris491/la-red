import { Inter } from "next/font/google";
import "./../styles/_global.scss";
import { Toaster } from "react-hot-toast";
import { Metadata } from "next";
import Header from "./components/header";

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Portfolio Kevin | Home',
  description: 'Personal Portfolio of Kevin Atsma (full-stack developer & designer)',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="nl">
      <head>
        <meta charSet="utf-8" />
        <meta name="keywords" content="" />
        <meta name="author" content="kevinatsma@gmail.com" />
        <base href="/" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        {/* PWA Optimizations */}
        {/* <link async rel="manifest" href="manifest.webmanifest" />
        <meta name="theme-color" content="#ffffff" /> */}

        {/* SEO Optimizations */}
        <link rel="apple-touch-icon" sizes="152x152" href="/favicons/apple-touch-icon-152x152.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/favicons/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicons/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicons/favicon-16x16.png" />
        <link rel="mask-icon" href="/favicons/safari-pinned-tab.svg" color="#313638" />
        <link rel="shortcut icon" href="/favicons/favicon.ico" />
        <meta name="apple-mobile-web-app-title" content="Portfolio Kevin Atsma" />
        <meta name="application-name" content="Portfolio Kevin Atsma" />
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta name="msapplication-config" content="/favicons/browserconfig.xml" />

        {/* Social Meta tags */}
        {/* Twitter Card data */}
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@kevin-atsma" />
        <meta name="twitter:title" content="Portfolio Kevin Atsma" />
        <meta name="twitter:description" content="Personal Portfolio of Kevin Atsma (full-stack developer & designer)" />
        <meta name="twitter:image" content="/img/social/social-image.jpg" />

        {/* Open Graph data */}
        <meta property="og:title" content="Portfolio Kevin Atsma" />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://www.kevinatsma.com/" />
        <meta property="og:image" content="/img/social/social-image.jpg" />
        <meta property="og:description" content="Personal Portfolio of Kevin Atsma (full-stack developer & designer)" />
        <meta property="og:site_name" content="Portfolio Kevin Atsma" />
        <meta property="og:locale" content="nl_NL" />

        <link rel="shortlink" href="https://www.kevinatsma.com/" />
        <link rel="canonical" href="https://www.kevinatsma.com/" />
      </head>

      <body className={inter.className}>
        <Toaster toastOptions={{
          duration: 8000,
          style: { maxWidth: "90vw" }
        }}/>
        <Header />
        {children}
      </body>
    </html>
  )
}
