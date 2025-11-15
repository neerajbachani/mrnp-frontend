import { ourClients } from "@/constants/OurClients";
import Container from "../Container";
import { fonts } from "@/utils/fonts";

export default function OurClients() {
  // Stats data
  const stats = [
    { value: "10+", label: "Industries Served" },
    { value: "6", label: "Multi-State Presence" },
    { value: "13+", label: "Years of Excellence" },
  ];

  return (
    <section className="w-full  ">
      {/* Stats Section */}
      <div className="w-full bg-[#F2F5F1] border-[#B4B4B4] border-b ">
        <div className=" container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 ">
            {stats.map((stat, index) => {
              const isNotLast = index < stats.length - 1;
              
              return (
                <div key={stat.label} className="relative flex flex-col items-center justify-center py-12 lg:py-16">
                  <h3 className={`${fonts.forum} text-5xl lg:text-[5rem]  text-primaryBlue mb-4`}>
                    {stat.value}
                  </h3>
                  <p className={`${fonts.instrument} text-base lg:text-2xl font-medium  text-primaryBlue`}>
                    {stat.label}
                  </p>
                  
                  {/* Vertical Border - Only between items on desktop */}
                  {isNotLast && (
                    <div className="absolute right-0 top-12 bottom-12 hidden w-px bg-[#B4B4B4] md:block" />
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Personalized Approach Section */}
      <Container className="py-12 lg:py-16 mx-auto">
        <h2 className={`${fonts.forum} text-3xl lg:text-5xl text-primaryBlue mb-6`}>
          Personalized Approach :
        </h2>
        <p className={`${fonts.dm} text-base lg:text-lg text-[#191919] mb-12 max-w-4xl`}>
          Our meticulous audit process incorporates a thorough evaluation of your internal controls and a 
          close examination of your accounting policies, all aligned with your specific management 
          requirements. This in-depth analysis allows us to deliver insightful recommendations that address:
        </p>

        {/* Client Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {ourClients.map((client, index) => {
            const isLeftColumn = index % 3 === 0;
            const isMiddleColumn = index % 3 === 1;
            const isNotLastRow = index < ourClients.length - 3;
            
            return (
              <div key={client.category} className="relative flex">
                <div className="flex flex-1 flex-col p-6 lg:p-8">
                  <h3 className={`${fonts.instrument} lg:text-xl text-lg font-semibold text-primaryBlue mb-4`}>
                    {client.category}
                  </h3>
                  <ul className="space-y-2">
                    {client.clients.map((clientItem) => (
                      <li
  key={clientItem}
  className={`${fonts.instrument} text-[12px] lg:text-sm text-[#191919] flex items-start`}
>
  <span className="mr-3 mt-2 flex h-[0.3rem] w-[0.3rem] shrink-0 rounded-full bg-primaryBlue"></span>
  <span>{clientItem}</span>
</li>
                    ))}
                  </ul>
                </div>

                {/* Vertical Borders - Between columns on desktop */}
                {(isLeftColumn || isMiddleColumn) && (
                  <div className="absolute bottom-6 right-0 top-6 hidden w-px bg-[#B4B4B4] lg:block" />
                )}

                {/* Horizontal Border - After each row except last */}
                {isNotLastRow && (
                  <div className="absolute bottom-0 left-0 right-0 h-px bg-[#B4B4B4]" />
                )}
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
