import {
  Inter_Tight,
  Instrument_Sans,
  Baskervville,
  Gilda_Display,
} from "next/font/google";

const InterTight = Inter_Tight({ subsets: ["latin"] });
const InstrumentSans = Instrument_Sans({ subsets: ["latin"] });
const Baskerville = Baskervville({ subsets: ["latin"], weight: "400" });
const GildaDisplay = Gilda_Display({ subsets: ["latin"], weight: "400" });
export const fonts = {
  inter: InterTight.className,
  instrument: InstrumentSans.className,
  baskerville: Baskerville.className,
  gilda: GildaDisplay.className,
};
