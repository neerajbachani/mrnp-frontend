import { ResourceContent } from "@/types/Resource";
import { fonts } from "@/utils/fonts";
import Image from "next/image";

interface ResourceCardProps {
  resource: ResourceContent;
  backgroundColor: string;
  styles?: string;
}

export default function ResourceCard({
  resource,
  backgroundColor = "white",
  styles,
}: ResourceCardProps) {
  return (
    <a target="_blank" href={resource.pdf}>
      <div
        className={`flex flex-col justify-center space-y-8 py-14 px-11 bg-${backgroundColor} h-[450px] ${
          styles ?? ""
        }`}
      >
        <Image
          width={180}
          height={180}
          src={resource.coverImage ?? "/Resource.png"}
          alt="Resource"
        />
        <div className="space-y-3 lg:max-w-[90%]">
          <div className="space-y-2">
            <p
              className={`${fonts.instrument} text-lg md:text-xl lg:text-2xl text-primaryBlue font-bold max-w-[200px]`}
            >
              {resource.title}
            </p>
          </div>
          <p
            className={`${fonts.instrument} text-[#191919] text-base line-clamp-2`}
          >
            {resource.description}
          </p>
        </div>
      </div>
    </a>
  );
}
