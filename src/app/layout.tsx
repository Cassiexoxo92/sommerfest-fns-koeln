import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

/* -------------------------------------------------------
   Inter is downloaded at BUILD TIME by next/font and
   served from the same origin — no external requests,
   fully DSGVO-compliant.
   ------------------------------------------------------- */
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://sommerfest.freie-naturschulen.de"),
  title: "Sommerfest 2026 — 4 Jahre fns:Köln | Freie Naturschulen Köln",
  description:
    "Feiert mit uns 4 Jahre fns:Köln! Sommerfest am Freitag, 10. Juli 2026 von 15 bis 18 Uhr. An der Wachsfabrik 25 (Innenhof), 50996 Köln. Eintritt frei, keine Anmeldung nötig — für die ganze Familie!",
  keywords: [
    "Sommerfest",
    "fns:Köln",
    "Freie Naturschulen Köln",
    "4 Jahre",
    "Jubiläum",
    "Wachsfabrik",
    "Rodenkirchen",
    "Naturschule",
    "Familienfest",
  ],
  authors: [{ name: "fns:Köln — Freie Naturschulen Köln" }],
  creator: "fns:Köln",
  publisher: "Vivimos ganzheitliche Lebensräume gUG",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  openGraph: {
    type: "website",
    locale: "de_DE",
    url: "https://sommerfest.freie-naturschulen.de",
    siteName: "Sommerfest fns:Köln",
    title: "Sommerfest 2026 — 4 Jahre fns:Köln",
    description:
      "Feiert mit uns! Sommerfest am 10. Juli 2026, 15–18 Uhr. An der Wachsfabrik 25, Köln. Eintritt frei!",
    images: [
      {
        url: "/images/foto1.jpg",
        width: 3000,
        height: 2000,
        alt: "Sommerfest fns:Köln — 4 Jahre Freie Naturschulen Köln",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sommerfest 2026 — 4 Jahre fns:Köln",
    description:
      "Feiert mit uns! Sommerfest am 10. Juli 2026, 15–18 Uhr. Eintritt frei!",
    images: ["/images/foto1.jpg"],
  },
};

export const viewport: Viewport = {
  themeColor: "#6EC1E4",
  colorScheme: "light",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de" className={inter.variable}>
      {/* Favicon & touch icon are provided by src/app/icon.png and
          src/app/apple-icon.png (Next.js file-based metadata). */}
      <body className="antialiased">{children}</body>
    </html>
  );
}
