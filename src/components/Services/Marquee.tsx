import Marquee from "react-fast-marquee";

export default function MarqueeComponent() {
  return (
    <section className="bg-white py-6 lg:py-10">
      <Marquee speed={150} autoFill pauseOnHover>
        <div className="w-[300px] h-[250px] bg-blue-200 mx-2"></div>
      </Marquee>
    </section>
  );
}
