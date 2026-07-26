import Image from "next/image";
import Container from "@/components/ui/Container";

const cards = [
  {
    title: "Program Specific",
    image: "/images/program-specific.webp",
    desc: "Certificate, Executive, Post Graduate Certificate",
  },
  {
    title: "Industry Specific",
    image: "/images/industry-specific.webp",
    desc: "IT, Healthcare, Retail, Finance, Education, Manufacturing",
  },
  {
    title: "Topic Specific",
    image: "/images/topic-specific.webp",
    desc: "Machine Learning, Design, Analytics, Cybersecurity, Cloud",
  },
  {
    title: "Level Specific",
    image: "/images/level-specific.webp",
    desc: "Senior Leadership, Mid-Career Professionals, Freshers",
  },
];

export default function CourseSegmentation() {
  return (
    <section className="section bg-white">
      <Container className="max-w-[1000px]">
        <div className="text-center">
          <h2 className="text-[34px] font-bold leading-tight text-[#141B34] sm:text-[42px] lg:text-[52px]">
            Tailored{" "}
            <span className="text-[#2F7CF6]">
              Course Segmentation
            </span>
          </h2>

          <p className="mt-4 text-[16px] leading-7 text-[#141B34] sm:text-[18px] lg:text-[22px]">
            Explore{" "}
            <span className="text-[#2F7CF6]">
              Custom-fit Courses
            </span>{" "}
            Designed to Address Every Professional Focus
          </p>
        </div>

        <div className="mt-10 grid gap-6 sm:mt-12 md:grid-cols-2 lg:mt-14 lg:grid-cols-4">
          {cards.map((card) => (
            <div
              key={card.title}
              className="overflow-hidden rounded-2xl border bg-white shadow-lg transition hover:shadow-xl"
            >
              <Image
                src={card.image}
                alt={card.title}
                width={500}
                height={320}
                className="h-[220px] w-full object-cover sm:h-[240px]"
              />

              <div className="p-5 text-center sm:p-6">
                <h3 className="text-[17px] font-bold leading-tight text-[#2F7CF6] sm:text-[18px]">
                  {card.title}
                </h3>

                <p className="mt-3 text-[14px] leading-6 text-gray-700 sm:text-[15px] sm:leading-7">
                  {card.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}