import PageIntro from "@/components/PageIntro";
import PageWithNavbar from "@/components/PageWithNavbar";
import FAQs from "@/components/Services/FAQs";
import ServiceContent from "@/components/Services/ServiceContent";
import WhyMRNP from "@/components/Services/WhyMRNP";
import { fetchAllServices, fetchService } from "@/lib/api";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import { navitems } from "@/constants/Navigation";

export const metadata: Metadata = {
  title: "Services | MRNP & CO LLP",
  description: "Services",
};

interface ServicePagePros {
  params: Promise<{
    slug: string;
  }>;
}

export default async function Service({ params }: ServicePagePros) {
  const slug = (await params).slug;
  const service = await fetchService(slug);

  if (!service) {
    return notFound();
  }

  // Update navitems with services
  const services = await fetchAllServices();
  const servicesSubmenu = services?.map((service) => ({
    name: service.name,
    href: `/services/${service.slug}`,
  }));
  navitems.find((item) => item.name === "Services")!.submenu = servicesSubmenu;

  // Prepare services list for ServiceContent
  const allServices = services?.map((service) => ({
    name: service.name,
    slug: service.slug,
  }));

  return (
    <PageWithNavbar navitems={navitems} transparentNav={true}>
      <PageIntro pageName="Our Services" {...service.pageIntro} />
      <ServiceContent
        content={service.content}
        image1={service.image1}
        image2={service.image2}
        allServices={allServices}
        currentSlug={slug}
      />
      {service.chooseMRNP && service.chooseMRNP?.length > 0 && (
        <WhyMRNP
          serviceTitle={service.pageIntro.pageTitle || ""}
          chooseMRNP={service.chooseMRNP}
        />
      )}
      {service.faqs && service.faqs?.length > 0 && <FAQs faqs={service.faqs} />}
    </PageWithNavbar>
  );
}
