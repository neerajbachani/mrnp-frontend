import Container from "@/components/Container";
import ResourceCard from "@/components/ResourceCard";
import PageIntro, { PageIntroProps } from "@/components/PageIntro";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import { fetchResource } from "@/lib/api";

interface ResourcePagePros {
  params: Promise<{
    resource: string;
  }>;
}

export const metadata: Metadata = {
  title: "Resources | MRNP & CO LLP",
  description: "Resources",
};

export default async function Resource({ params }: ResourcePagePros) {
  const slug = (await params).resource;
  const resource = await fetchResource(slug);

  if (!resource) {
    return notFound();
  }

  const pageTitle = resource.name;

  const pageIntro: PageIntroProps = {
    pageName: "Resources",
    pageTitle: pageTitle,
    pageDescription:
      "Find the latest resources and insights from MRNP & CO LLP.",
  };

  return (
    <>
      <PageIntro {...pageIntro} />
      <section className="bg-white flex items-center justify-center py-16">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-5 md:gap-y-9 md:gap-x-4 lg:gap-x-20">
            {resource.content.map((item, index) => (
              <ResourceCard
                key={index}
                resource={item}
                backgroundColor="white"
                styles="border border-[#d9d9d9]"
              />
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
