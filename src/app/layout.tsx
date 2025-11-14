import type { Metadata } from "next";
import "./globals.css";
import HelpBanner from "@/components/HelpBanner";
import Footer from "@/components/Footer";
import DisclaimerModal from "@/components/DisclaimerModal";
import SmoothScroll from "@/components/SmoothScroll";
import { navitems } from "@/constants/Navigation";
import { fetchAllServices } from "@/lib/api";

export const metadata: Metadata = {
  title: "MRNP & CO LLP | Chartered Accountants | Audit, Tax & Advisory",
  description:
    "MRNP & CO LLP is a leading Chartered Accountancy firm providing expert audit, taxation, business advisory, and financial consulting services. Trusted by businesses for accurate and reliable financial solutions.",
  keywords: [
    "Chartered Accountants",
    "Audit Services",
    "Tax Consultancy",
    "Business Advisory",
    "Financial Consulting",
    "GST Filing",
    "Income Tax Planning",
    "Company Compliance",
    "Accounting Services",
    "MRNP & CO LLP",
  ],
  authors: [{ name: "MRNP & CO LLP", url: "http://www.mrnp.in/" }],
  openGraph: {
    title: "MRNP & CO LLP | Chartered Accountants | Audit, Tax & Advisory",
    description:
      "Expert CA firm offering audit, taxation, business advisory, and financial consulting. Trusted for accurate financial solutions.",
    url: "http://www.mrnp.in/",
    siteName: "MRNP & CO LLP",
    type: "website",
    images: [
      {
        url: "http://www.mrnp.in/static/og-image.png", // Add an actual image URL for OG preview
        width: 1200,
        height: 630,
        alt: "MRNP & CO LLP - Chartered Accountants",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "MRNP & CO LLP | Chartered Accountants | Audit, Tax & Advisory",
    description:
      "Leading CA firm offering expert audit, taxation, business advisory, and financial consulting services.",
    images: ["http://www.mrnp.in/static/og-image.png"],
  },
  icons: {
    icon: "/static/favicon.ico",
    shortcut: "/static/favicon.ico",
    apple: "/static/apple-touch-icon.png",
  },
  robots: "index, follow",
  alternates: {
    canonical: "http://www.mrnp.in/",
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const services = await fetchAllServices();
  // const resources = await fetchAllResources();

  const servicesSubmenu = services?.map((service) => ({
    name: service.name,
    href: service.slug,
  }));

  // const resourcesSubmenu = resources?.map((resource) => ({
  //   name: resource.name,
  //   href: `/resources/${resource.slug}`,
  // }));

  navitems.find((item) => item.name === "Services")!.submenu = servicesSubmenu;
  // navitems.find((item) => item.name === "Resources")!.submenu =
  //   resourcesSubmenu;

  return (
    <html lang="en">
      <body>
        <SmoothScroll />
        <DisclaimerModal />
        <main className="">{children}</main>
        <HelpBanner />
        <Footer navitems={navitems} />
      </body>
    </html>
  );
}
