import { fonts } from "@/utils/fonts";
import { FC, ReactNode } from "react";

interface BodytextProps {
  children: ReactNode;
  style?: string;
}

const Bodytext: FC<BodytextProps> = ({ children, style }) => {
  return (
    <p
      className={`${fonts.instrument} text-[#191919] text-[0.875rem] md:text-[1rem] md:leading-[1.25rem] xl:text-[1.125rem] 2xl:!leading-[1.5rem] ${style}`}
    >
      {children}
    </p>
  );
};

export default Bodytext;
