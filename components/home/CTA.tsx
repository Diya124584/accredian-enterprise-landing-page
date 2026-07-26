import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import { ctaContent } from "@/data/home";
import { Headset } from "lucide-react";

export default function CTA() {
  return (
    <section id="enquire" className="py-16 lg:py-20">
      <Container>
        <div className="relative overflow-hidden rounded-[28px] bg-[#2F7CF6] px-6 py-8 sm:px-8 sm:py-10 lg:px-14 lg:py-12">
          {/* Background circles */}
          <div className="absolute -right-40 -bottom-44 h-[520px] w-[520px] rounded-full border border-white/10"></div>
          <div className="absolute right-0 -bottom-20 h-[360px] w-[360px] rounded-full border border-white/10"></div>
          <div className="absolute right-24 bottom-0 h-[220px] w-[220px] rounded-full border border-white/10"></div>

          <div className="relative flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
            {/* Left Side */}
            <div className="flex flex-col items-center gap-5 text-center sm:flex-row sm:items-center sm:text-left sm:gap-6">
              <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-3xl bg-white shadow-xl sm:h-24 sm:w-24">
                <Headset
                  className="h-10 w-10 text-[#2F7CF6] sm:h-12 sm:w-12"
                  strokeWidth={2.2}
                />
              </div>

              <div className="max-w-2xl">
                <h2 className="text-[28px] font-bold leading-tight text-white sm:text-3xl lg:text-[42px]">
                  {ctaContent.heading}
                </h2>

                <p className="mt-3 text-base text-white/90 sm:text-lg lg:text-xl">
                  {ctaContent.subheading}
                </p>
              </div>
            </div>

            {/* Right Side */}
            <div className="w-full sm:w-auto lg:shrink-0">
              <Button href="#contact" variant="secondary" size="lg">
                {ctaContent.ctaLabel} →
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}