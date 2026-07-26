"use client";

import { useState } from "react";
import Container from "@/components/ui/Container";
import { faqContent } from "@/data/home";

export default function FAQ() {
  const [activeCategory, setActiveCategory] = useState(
    faqContent.categories[0].id
  );

  const [openQuestion, setOpenQuestion] = useState<string | null>(
    faqContent.categories[0].items[0]?.question ?? null
  );

  const currentCategory =
    faqContent.categories.find(
      (category) => category.id === activeCategory
    ) ?? faqContent.categories[0];

  return (
    <section id="faqs" className="bg-white py-16 lg:py-20">
      <Container>
        {/* Heading */}
        <h2 className="mb-8 text-[28px] font-bold text-[#141B34] sm:text-[30px]">
          Frequently Asked{" "}
          <span className="text-[#2F7CF6]">Questions</span>
        </h2>

        <div className="grid gap-10 lg:grid-cols-[250px_1fr]">
          {/* Left Categories */}
          <div className="space-y-4 sm:space-y-5">
            {faqContent.categories.map((category) => (
              <button
                key={category.id}
                type="button"
                onClick={() => {
                  setActiveCategory(category.id);
                  setOpenQuestion(category.items[0]?.question ?? null);
                }}
                className={`flex min-h-[64px] w-full items-center justify-center rounded-xl border px-4 py-4 text-center text-base font-semibold transition sm:min-h-[82px] sm:text-lg ${
                  activeCategory === category.id
                    ? "border-transparent bg-white text-[#2F7CF6] shadow-lg"
                    : "border-gray-300 bg-white text-gray-600 hover:border-[#2F7CF6]"
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>

          {/* Questions */}
          <div className="space-y-6 sm:space-y-7">
            {currentCategory.items.map((item) => {
              const isOpen = openQuestion === item.question;

              return (
                <div
                  key={item.question}
                  className="border-b border-gray-200 pb-5"
                >
                  <button
                    type="button"
                    onClick={() =>
                      setOpenQuestion(isOpen ? null : item.question)
                    }
                    className="flex w-full items-start justify-between gap-4 text-left"
                  >
                    <span
                      className={`text-[17px] font-semibold leading-7 sm:text-[19px] ${
                        isOpen ? "text-[#2F7CF6]" : "text-[#141B34]"
                      }`}
                    >
                      {item.question}
                    </span>

                    <span className="shrink-0 text-2xl text-gray-500 sm:text-3xl">
                      {isOpen ? "⌃" : "⌄"}
                    </span>
                  </button>

                  {isOpen && (
                    <p className="mt-4 max-w-4xl text-[15px] leading-7 text-gray-600 sm:text-[17px] sm:leading-8">
                      {item.answer}
                    </p>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Button */}
        <div className="mt-12 flex justify-center lg:mt-14">
          <button className="rounded-lg bg-[#2F7CF6] px-8 py-3 text-base font-semibold text-white shadow-md transition hover:bg-[#256BE8] sm:text-lg">
            Enquire Now
          </button>
        </div>
      </Container>
    </section>
  );
}