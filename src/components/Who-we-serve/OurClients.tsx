import { ourClients } from "@/constants/OurClients";
import Container from "../Container";
import Heading from "../Heading";
import { fonts } from "@/utils/fonts";

export default function OurClients() {
  return (
    <section className="flex justify-center items-center py-12 lg:py-24">
      <Container className="space-y-8 md:space-y-12">
        <div>
          <Heading>Our Clientele :</Heading>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-12">
          {ourClients.map((client) => (
            <div key={client.category} className="space-y-2 md:space-y-4">
              <Heading>{client.category}:</Heading>
              <ul className="list-disc pl-4 md:pl-8 space-y-1 sm:space-y-2">
                {client.clients.map((client) => (
                  <li
                    key={client}
                    className={`${fonts.inter} text-sm sm:text-base md:text-xl`}
                  >
                    {client}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
