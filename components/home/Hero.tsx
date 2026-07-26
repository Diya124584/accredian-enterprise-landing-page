import Image from "next/image";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import { heroContent } from "@/data/home";

export default function Hero() {
  const {
    eyebrow,
    subheading,
    highlights,
    ctaLabel,
    image,
    floatingBadge,
  } = heroContent;

  return (
    <section id="home" className="overflow-hidden py-4 sm:py-6">
      <Container>
        <div
          className="
            grid
            grid-cols-1
            items-center
            gap-10
            rounded-[28px]
            bg-[#EEF5FF]
            px-6
            py-8
            sm:px-8
            sm:py-10
            lg:grid-cols-[58%_42%]
            lg:px-14
            lg:py-14
          "
        >
          {/* Left */}
          <div className="order-1">
            <span className="inline-flex items-center rounded-full bg-[#E8F1FF] px-4 py-2 text-sm font-semibold text-[#2F7CF6] sm:px-5 sm:text-base">
              {eyebrow}
            </span>

            <h1 className="mt-5 text-[42px] font-bold leading-[1.05] tracking-[-1px] text-[#141B34] sm:text-[54px] lg:text-[64px]">
              Next-Gen{" "}
              <span className="inline-block text-[#2F7CF6]">
                Expertise
              </span>
              <br />
              For Your{" "}
              <span className="inline-block text-[#2F7CF6]">
                Enterprise
              </span>
            </h1>

            <p className="mt-5 max-w-xl text-base leading-7 text-[#5B6475] sm:text-[18px] sm:leading-8">
              {subheading}
            </p>

            {/* Highlights */}
            <ul className="mt-8 flex flex-col gap-4 sm:flex-row sm:flex-wrap sm:gap-6">
              {highlights.map((item) => (
                <li
                  key={item.label}
                  className="flex items-center gap-3 text-base font-medium text-[#141B34] sm:text-[17px]"
                >
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border-2 border-[#16A34A] text-[#16A34A] text-sm font-bold">
                    ✓
                  </span>

                  <span>{item.label}</span>
                </li>
              ))}
            </ul>

            <div className="mt-8">
              <Button href="#enquire" size="lg">
                {ctaLabel}
              </Button>
            </div>
          </div>

          {/* Right */}
          <div className="order-2 relative mx-auto w-full max-w-md lg:max-w-none">
            <Image
              src={image.src}
              alt={image.alt}
              width={700}
              height={600}
              priority
              className="mx-auto h-auto w-full max-w-[520px] lg:max-w-full"
            />

            {/* Floating Card */}
            <div
              className="
                mt-6
                mx-auto
                flex
                w-fit
                items-center
                gap-3
                rounded-2xl
                border
                border-gray-200
                bg-white
                px-4
                py-3
                shadow-xl

                lg:absolute
                lg:bottom-12
                lg:left-0
                lg:mt-0
              "
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-[#E8F1FF] text-xl">
                🎓
              </span>

              <div>
                <p className="text-base font-semibold text-[#141B34] sm:text-lg">
                  {floatingBadge.value}
                </p>

                <p className="text-xs text-[#5B6475] sm:text-sm">
                  {floatingBadge.label}
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}