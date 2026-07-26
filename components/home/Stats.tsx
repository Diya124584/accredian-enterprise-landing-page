"use client";

import { useEffect, useRef, useState } from "react";
import Container from "@/components/ui/Container";
import { statsContent, type StatItem } from "@/data/home";

function AnimatedStat({ stat }: { stat: StatItem }) {
  const [value, setValue] = useState(0);
  const [animated, setAnimated] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !animated) {
          setAnimated(true);

          const duration = 1200;
          const start = performance.now();

          const animate = (time: number) => {
            const progress = Math.min((time - start) / duration, 1);

            setValue(Math.round(progress * stat.target));

            if (progress < 1) {
              requestAnimationFrame(animate);
            }
          };

          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.4 }
    );

    observer.observe(node);

    return () => observer.disconnect();
  }, [animated, stat.target]);

  return (
    <div
      ref={ref}
      className="flex flex-col items-center px-4 py-8 text-center sm:px-8"
    >
      <div className="rounded-full bg-[#DCEBFF] px-8 py-3 sm:px-10">
        <span className="text-[34px] font-bold text-[#2F7CF6] sm:text-[42px]">
          {value}
          {stat.suffix}
        </span>
      </div>

      <p className="mt-6 max-w-[320px] text-[16px] leading-7 text-[#141B34] sm:mt-7 sm:text-[18px] sm:leading-9">
        {stat.label}
      </p>
    </div>
  );
}

export default function Stats() {
  return (
    <section id="stats" className="bg-white py-16 lg:py-24">
      <Container>
        <div className="text-center">
          <h2 className="text-[32px] font-bold leading-tight text-[#141B34] lg:text-[42px]">
            Our <span className="text-[#2F7CF6]">Track Record</span>
          </h2>

          <p className="mt-2 text-[16px] font-medium text-[#141B34] sm:text-[18px] lg:text-[22px]">
            The Numbers Behind{" "}
            <span className="text-[#2F7CF6]">Our Success</span>
          </p>
        </div>

        <div className="mt-14 grid gap-8 md:mt-20 md:grid-cols-3">
          {statsContent.stats.map((stat, index) => (
            <div
              key={stat.id}
              className={
                index !== 2
                  ? "md:border-r md:border-gray-300"
                  : ""
              }
            >
              <AnimatedStat stat={stat} />
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}