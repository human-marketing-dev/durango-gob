import type { Metadata } from "next";
import { Open_Sans, Lato, Poppins } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";

const openSans = Open_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-open-sans",
  display: "swap",
});

const lato = Lato({
  subsets: ["latin"],
  weight: ["300", "400", "700"],
  variable: "--font-lato",
  display: "swap",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-poppins",
  display: "swap",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://tudominio.com";

export const metadata: Metadata = {
  title: {
    default: "Poder Judicial del Estado de Durango",
    template: "%s | PJDGO",
  },
  description: "Sitio oficial del Poder Judicial del Estado de Durango. Accede a trámites, transparencia, noticias y servicios judiciales.",
  metadataBase: new URL(siteUrl),

  openGraph: {
    title: "Poder Judicial del Estado de Durango",
    description: "Sitio oficial del Poder Judicial del Estado de Durango.",
    url: siteUrl,
    siteName: "PJDGO",
    locale: "es_MX",
    type: "website",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Poder Judicial del Estado de Durango" }],
  },

  twitter: {
    card: "summary_large_image",
    title: "Poder Judicial del Estado de Durango",
    description: "Sitio oficial del Poder Judicial del Estado de Durango.",
    images: ["/og-image.png"],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },

  icons: {
    icon: "/icons/favicon.ico",
    shortcut: "/icons/favicon-32x32.png",
    apple: "/icons/apple-touch-icon.png",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="es"
      className={`${openSans.variable} ${lato.variable} ${poppins.variable}`}
    >
      <body className="font-lato antialiased bg-white text-primary">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
