import { fonts } from "@/utils/fonts";

interface HeadingProps {
  children: React.ReactNode;
  style?: string;
}

export default function Heading({ children, style }: HeadingProps) {
  return (
    <p
      className={`${fonts.forum} text-primaryBlue text-[2rem] md:text-[2.25rem] lg:text-[2.625rem] md:leading-[3.125rem] 2xl:text-[2.625rem] 2xl:leading-tight leading-tight ${style}`}
    >
      {children}
    </p>
  );
}
