import Image from "next/image";
import Container from "@/components/ui/Container";

export default function DomainExpertise() {
  return (
    <section className="section bg-white">
      <Container>
        <div className="text-center">
          <h2 className="text-[34px] font-bold leading-tight text-[#141B34] sm:text-[42px] lg:text-[52px]">
            Our{" "}
            <span className="text-[#2F7CF6]">
              Domain Expertise
            </span>
          </h2>

          <p className="mt-4 text-[16px] leading-7 text-[#141B34] sm:text-[18px] lg:text-[22px]">
            <span className="text-[#2F7CF6]">
              Specialized Programs
            </span>{" "}
            Designed to Fuel Innovation
          </p>
        </div>

        <div className="mt-10 flex justify-center lg:mt-14">
          <Image
            src="/images/domain-expertise.png"
            alt="Domain Expertise"
            width={1450}
            height={850}
            className="h-auto w-full max-w-[1200px]"
          />
        </div>
      </Container>
    </section>
  );
}