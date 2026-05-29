import type { Metadata } from "next";
import { Cormorant_Garamond, Outfit, Playfair_Display } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/ui/SmoothScroll";
import CustomCursor from "@/components/ui/CustomCursor";
import GrainOverlay from "@/components/ui/GrainOverlay";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-cormorant",
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  weight: ["400", "500", "600", "700", "800", "900"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Kiran Sanil | Photopedia Weddings - Luxury Wedding Photographer",
  description: "Awwwards-winning luxury wedding photography portfolio for Kiran Sanil (Photopedia Weddings). Capturing timeless love stories with cinematic matte black aesthetics and vibrant chartreuse accents.",
  keywords: "Kiran Sanil, Photopedia Weddings, Wedding Photography, Luxury Wedding Photographer, Candid Photography, Pre-Wedding Shoots, Couple Portraits, Canon EOS R5",
  authors: [{ name: "Kiran Sanil" }],
  openGraph: {
    title: "Kiran Sanil | Photopedia Weddings",
    description: "Capturing Timeless Love Stories Through the Lens. Luxury matte black & chartreuse photography portfolio.",
    url: "https://photopediaweddings.com",
    siteName: "Photopedia Weddings",
    locale: "en_US",
    type: "website",
    images: ["/previeww.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Kiran Sanil | Photopedia Weddings",
    description: "Capturing Timeless Love Stories Through the Lens.",
    images: ["/previeww.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${cormorant.variable} ${outfit.variable} ${playfair.variable} antialiased bg-matte-black text-white selection:bg-accent selection:text-black`}
      >
        <GrainOverlay />
        <CustomCursor />
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
