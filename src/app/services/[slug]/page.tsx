import PageIntro from "@/components/PageIntro";
import FAQs from "@/components/Services/FAQs";
import ServiceContent from "@/components/Services/ServiceContent";
import WhyMRNP from "@/components/Services/WhyMRNP";
import { fetchService } from "@/lib/api";
import { Metadata } from "next";
import { notFound } from "next/navigation";

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

  return (
    <>
      <PageIntro pageName="Our Services" {...service.pageIntro} />
      <ServiceContent
        content={service.content}
        image1={service.image1}
        image2={service.image2}
      />
      { service.chooseMRNP && service.chooseMRNP?.length >0 && (
        <WhyMRNP
          serviceTitle={service.pageIntro.pageTitle}
          chooseMRNP={service.chooseMRNP}
        />
      )}
      {service.faqs && service.faqs?.length > 0 && <FAQs faqs={service.faqs} />}
    </>
  );
}
