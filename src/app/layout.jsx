import { Poppins } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import NextAuthProvider from "@/provider/NextAuthProvider";

// Google font
const poppins = Poppins({
  weight: ["100", "200", "400", "500", "600", "800"],
  subsets: ["latin"],
});

// Local Bangla font
export const fontBangla = localFont({
  src: "./../fonts/mayaboti-Italic.ttf",
});

export const metadata = {
  metadataBase: new URL("https://hero-kidz-gamma-lemon.vercel.app"),
  title: {
    default: "Hero Kidz | Educational Toys & Kids Learning Products",
    template: "%s | Hero Kidz",
  },
  description:
    "Hero Kidz is an online store for educational toys, learning boards, and kids development products. Discover fun and interactive learning tools designed to improve creativity, counting skills, and cognitive development for children.",
  keywords: [
    "kids toys",
    "educational toys",
    "learning board",
    "kids education",
    "hero kidz",
    "kids learning products",
    "math learning toys",
    "children development toys",
  ],
  authors: [{ name: "MD Abdul Aziz" }],
  creator: "MD Abdul Aziz",
  publisher: "Hero Kidz",
  openGraph: {
    title: "Hero Kidz | Educational Toys & Kids Learning Products",
    description:
      "Explore fun educational toys and learning tools for kids. Hero Kidz helps children learn numbers, creativity, and cognitive skills through interactive play.",
    url: "https://hero-kidz-gamma-lemon.vercel.app",
    siteName: "Hero Kidz",
    images: [
      {
        url: "https://i.ibb.co/BVymXTyJ/image.png",
        width: 1200,
        height: 630,
        alt: "Hero Kidz Home Page",
      },
      {
        url: "https://i.ibb.co/twjRQJVz/product-preview.jpg",
        width: 1200,
        height: 630,
        alt: "Hero Kidz Product Page",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Hero Kidz | Educational Toys & Kids Learning Products",
    description:
      "Fun and educational toys for kids. Improve learning and creativity with Hero Kidz learning products.",
    images: ["https://i.ibb.co/BVymXTyJ/image.png"],
  },
  icons: {
    icon: "https://i.ibb.co/JjRBRpdB/logo.png",
    shortcut: "https://i.ibb.co/JjRBRpdB/logo.png",
    apple: "https://i.ibb.co/JjRBRpdB/logo.png",
  },
  robots: {
    index: true,
    follow: true,
  },
  category: "ecommerce",
};

export default function RootLayout({ children }) {
  return (
    <NextAuthProvider>
      <html lang="en">
        <body className={`${poppins.className} antialiased`}>
          <header className="py-2 md:w-11/12 mx-auto">
            <Navbar />
          </header>
          <main className="py-2 min-h-[calc(100svh-302px)] md:w-11/12 mx-auto">
            {children}
          </main>
          <footer>
            <Footer />
          </footer>
        </body>
      </html>
    </NextAuthProvider>
  );
}
