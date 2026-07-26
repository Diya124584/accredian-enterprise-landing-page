import {
  BarChart3,
  Presentation,
  MonitorPlay,
} from "lucide-react";

import Container from "@/components/ui/Container";
import { howItWorksContent } from "@/data/home";

const icons = [BarChart3, Presentation, MonitorPlay];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="section bg-white">
      <Container className="max-w-[1180px]">
        {/* Heading */}
        <div className="text-center">
          <h2 className="text-[32px] font-bold leading-tight text-[#141B34] lg:text-[42px]">
            How We{" "}
            <span className="text-[#2F7CF6]">
              Deliver Results
            </span>{" "}
            That Matter?
          </h2>

          <p className="mt-3 text-[16px] text-[#141B34] sm:text-[18px] lg:text-[22px]">
            A Structured Three-Step Approach to{" "}
            <span className="text-[#2F7CF6]">
              Skill Development
            </span>
          </p>
        </div>

        {/* Cards */}
        <div className="mt-14 grid gap-14 md:grid-cols-2 xl:grid-cols-3">
          {howItWorksContent.steps.map((step, index) => {
            const Icon = icons[index];

            return (
              <div
                key={step.step}
                className="relative mx-auto w-full max-w-[340px]"
              >
                {/* Left Blue Bar */}
                <div className="absolute -left-3 top-1/2 h-[90px] w-3 -translate-y-1/2 rounded-full bg-[#2F7CF6]" />

                {/* Right Blue Bar */}
                <div className="absolute -right-3 top-1/2 h-[90px] w-3 -translate-y-1/2 rounded-full bg-[#2F7CF6]" />

                {/* Card */}
                <div className="relative min-h-[245px] rounded-[22px] border border-[#7EB5FF] bg-[#EEF5FF] px-6 pb-6 pt-9 text-center shadow-lg">

                  {/* Step Number */}
                  <div className="absolute left-5 top-5 flex h-10 w-10 items-center justify-center rounded-full border-[3px] border-[#7EB5FF] bg-white text-xl font-bold">
                    {step.step}
                  </div>

                  {/* Icon */}
                  <div className="absolute left-1/2 top-0 flex h-20 w-20 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-[#2F7CF6] shadow-xl sm:h-24 sm:w-24">
                    <Icon size={34} color="white" strokeWidth={2.2} />
                  </div>

                  <h3 className="mt-5 text-[18px] font-bold text-[#111827]">
                    {step.title}
                  </h3>

                  <p className="mt-4 text-[15px] leading-7 text-[#374151]">
                    {step.description}
                  </p>

                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}