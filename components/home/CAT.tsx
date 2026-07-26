import Image from "next/image";
import Container from "@/components/ui/Container";

export default function CAT() {
  return (
    <section id="cat" className="py-16 bg-[#F8FBFF]">
      <Container>
        {/* Heading */}
        <div className="text-center">
          <h2 className="text-[32px] font-bold leading-tight text-[#141B34] lg:text-[42px]">
            The{" "}
            <span className="text-[#2F7CF6]">
              CAT Framework
            </span>
          </h2>

          <p className="mt-3 text-[18px] text-[#141B34] lg:text-[22px]">
            Our Proven Approach to{" "}
            <span className="text-[#2F7CF6]">
              Learning Excellence
            </span>
          </p>
        </div>

        {/* Framework */}
        <div className="mt-10 flex justify-center">
          <Image
            src="/images/catV2.svg"
            alt="CAT Framework"
            width={1200}
            height={520}
            priority
            className="h-auto w-[78%] max-w-[1050px]"
          />
        </div>
      </Container>
    </section>
  );
}