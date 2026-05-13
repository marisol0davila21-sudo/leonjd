import type { Metadata } from "next";
import { Playfair_Display, Montserrat } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import Navbar from "@/components/navigation/navbar";
import Footer from "@/components/layout/footer";
import FeedbackForm from "@/components/feedback/feedback-form";
// import ScrollToTop from "@/components/ui/scroll-to-top";

const playfair = Playfair_Display({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const montserrat = Montserrat({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "León de Judá | Impresiones Gráficas",
  description:
    "Especialistas en impresiones personalizadas, recuerdos para bautizos, comuniones, fotografía fine art y souvenirs premium. Hecho con amor en Perú.",
  icons: {
    icon: "/images/logo.webp",
    apple: "/images/logo.webp",
  },
  keywords: [
    "impresiones personalizadas Perú",
    "recuerdos bautizos",
    "souvenirs premium",
    "fotografía fine art",
    "León de Judá",
  ],
  openGraph: {
    title: "Impresiones Gráficas León de Judá",
    description: "Impresiones premium para tus momentos más especiales.",
    locale: "es_PE",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className={`${playfair.variable} ${montserrat.variable}`} suppressHydrationWarning>
      <head>
        <Script
          id="theme-strategy"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  const savedTheme = localStorage.getItem('theme');
                  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
                  if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
                    document.documentElement.classList.add('dark');
                  } else {
                    document.documentElement.classList.remove('dark');
                  }
                } catch (e) {}
              })();
            `,
          }}
        />
      </head>
      <body className="min-h-screen flex flex-col antialiased">
        <Navbar />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
        {/* <ScrollToTop /> */}
        <FeedbackForm />
      </body>
    </html>
  );
}
