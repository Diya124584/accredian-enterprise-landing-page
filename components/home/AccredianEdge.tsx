import Image from "next/image";
import Container from "@/components/ui/Container";

export default function AccredianEdge() {
  return (
    <section id="edge" className="py-16">
      <Container>
        {/* Heading */}
        <div className="text-center">
          <h2 className="text-[32px] font-bold leading-tight text-[#141B34] lg:text-[42px]">
            The{" "}
            <span className="text-[#2F7CF6]">
              Accredian Edge
            </span>
          </h2>

          <p className="mt-2 text-[18px] text-[#141B34] lg:text-[22px]">
            Key Aspects of{" "}
            <span className="text-[#2F7CF6]">
              Our Strategic Training
            </span>
          </p>
        </div>

        {/* SVG */}
        <div className="mt-10 flex justify-center">
          <Image
            src="/images/accredian-edge-usp-v3.svg"
            alt="Accredian Edge"
            width={1600}
            height={700}
            priority
            className="h-auto w-[92%] max-w-[1250px]"
          />
        </div>
      </Container>
    </section>
  );
}