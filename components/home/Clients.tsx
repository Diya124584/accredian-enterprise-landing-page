import Image from "next/image";
import Container from "@/components/ui/Container";
import { clientsContent } from "@/data/home";

export default function Clients() {
  return (
    <section id="clients" className="py-20 bg-white">
      <Container>
        {/* Heading */}
        <div className="text-center">
          <h2 className="text-[34px] font-bold leading-tight text-[#141B34] lg:text-[44px]">
            Our Proven{" "}
            <span className="text-[#2F7CF6]">Partnerships</span>
          </h2>

          <p className="mt-3 text-[18px] text-[#141B34] lg:text-[22px]">
            Successful Collaborations With the{" "}
            <span className="text-[#2F7CF6]">
              Industry's Best
            </span>
          </p>
        </div>

        {/* Logos */}
        <div className="mt-20 grid grid-cols-2 place-items-center gap-y-12 md:grid-cols-3 lg:grid-cols-6">
          {clientsContent.logos.map((logo) => (
            <div
              key={logo.name}
              className="flex items-center justify-center"
            >
              <Image
                src={logo.src}
                alt={logo.name}
                width={180}
                height={90}
                className="h-16 w-auto object-contain"
              />
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}