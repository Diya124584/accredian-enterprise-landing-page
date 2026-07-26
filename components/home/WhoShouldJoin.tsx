import Image from "next/image";
import Container from "@/components/ui/Container";
import {
  MonitorCheck,
  MonitorX,
  GraduationCap,
  BriefcaseBusiness,
} from "lucide-react";

const audience = [
  {
    icon: MonitorCheck,
    title: "Tech Professionals",
    desc: "Enhance expertise, embrace tech, drive innovation.",
  },
  {
    icon: MonitorX,
    title: "Non-Tech Professionals",
    desc: "Adapt digitally, collaborate in tech environments.",
  },
  {
    icon: GraduationCap,
    title: "Emerging Professionals",
    desc: "Develop powerful skills for rapid career growth.",
  },
  {
    icon: BriefcaseBusiness,
    title: "Senior Professionals",
    desc: "Strengthen leadership, enhance strategic decisions.",
  },
];

export default function WhoShouldJoin() {
  return (
    <section className="py-16 lg:py-20 bg-white">
      <Container className="max-w-[1000px]">
        <div className="overflow-hidden rounded-[28px] bg-[#2F7CF6] px-6 py-8 lg:px-8 lg:py-6">
          <div className="grid items-center gap-10 lg:grid-cols-[0.9fr_1.1fr]">
            {/* Left */}
            <div className="text-center lg:text-left">
              <p className="text-[16px] text-white sm:text-[18px]">
                Who Should Join?
              </p>

              <h2 className="mt-3 text-[34px] font-bold leading-tight text-white sm:text-[40px] lg:text-[46px]">
                Strategic Skill
                <br />
                Enhancement
              </h2>

              <div className="mt-6 flex justify-center lg:justify-start">
                <Image
                  src="/images/imagehuman.png"
                  alt="Professionals"
                  width={480}
                  height={500}
                  priority
                  className="h-auto w-full max-w-[280px] sm:max-w-[330px] object-contain"
                />
              </div>
            </div>

            {/* Right */}
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 sm:gap-x-10 sm:gap-y-10">
              {audience.map((item) => {
                const Icon = item.icon;

                return (
                  <div key={item.title}>
                    <Icon
                      size={42}
                      strokeWidth={2}
                      className="mb-4 text-white sm:mb-5 sm:h-12 sm:w-12"
                    />

                    <h3 className="text-[20px] font-bold text-white sm:text-[22px]">
                      {item.title}
                    </h3>

                    <p className="mt-2 text-[15px] leading-6 text-white/90 sm:text-[16px] sm:leading-7">
                      {item.desc}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}