import Script from "next/script";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head>
        {/* Fonts & Icons */}
        <link rel="stylesheet" href="/css/all.min.css" />
        <link rel="stylesheet" href="/css/font-awesome.min.css" />
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />

        {/* Local CSS */}
        <link rel="stylesheet" href="/css/bootstrap.min.css" />
        <link rel="stylesheet" href="/css/styles.css" />
        <link rel="stylesheet" href="/css/responsive.css" />

        {/* Slick Slider */}
        <link rel="stylesheet" href="/css/slick.min.css" />
        <link rel="stylesheet" href="/css/slick-theme.min.css" />
      </head>

      <body>
        <Header />
        {children}
        <Footer />
        <ScrollToTop />

        <Script src="/js/jquery-3.7.1.js" strategy="beforeInteractive" />
        <Script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.2/dist/umd/popper.min.js" strategy="afterInteractive" />
        <Script src="/js/bootstrap.min.js" strategy="afterInteractive" />
        <Script src="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.9.0/slick.min.js" strategy="afterInteractive" />
        <Script src="https://unpkg.com/aos@2.3.1/dist/aos.js" strategy="afterInteractive" />
        <Script src="/js/main.js" strategy="afterInteractive" />
      </body>
    </html>
  );
}
