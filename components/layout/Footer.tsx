import Image from "next/image";
import Link from "next/link";
import Container from "@/components/ui/Container";

import {
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="border-t bg-white">
      <Container className="py-10">
        {/* Top */}
        <div className="flex flex-col items-center justify-between gap-10 text-center lg:flex-row lg:items-start lg:text-left">
          {/* Left */}
          <div>
            <Image
              src="/logos/logo.webp"
              alt="Accredian"
              width={240}
              height={70}
              className="h-12 w-auto"
            />

            <div className="mt-6 flex justify-center gap-5 text-[18px] text-gray-700 lg:justify-start">
              <Link
                href="https://www.facebook.com/accredianlearn"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="transition-colors hover:text-[#1877F2]"
              >
                <FaFacebookF size={18} />
              </Link>

              <Link
                href="https://in.linkedin.com/school/accredianedu/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="transition-colors hover:text-[#0A66C2]"
              >
                <FaLinkedinIn size={18} />
              </Link>

              <Link
                href="https://x.com/accredianedu"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="X"
                className="transition-colors hover:text-black"
              >
                <FaXTwitter size={18} />
              </Link>

              <Link
                href="https://www.instagram.com/accredian_edu"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="transition-colors hover:text-pink-600"
              >
                <FaInstagram size={18} />
              </Link>

              <Link
                href="https://www.youtube.com/channel/UCE0L_4ADPU2iyKnDJ0xRzyA"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                className="transition-colors hover:text-red-600"
              >
                <FaYoutube size={18} />
              </Link>
            </div>
          </div>

          {/* Right */}
          <div className="text-center lg:text-right">
            <button className="rounded-2xl bg-[#2F7CF6] px-8 py-3 text-lg font-semibold text-white transition hover:bg-[#256BE8] sm:px-10 sm:py-4 sm:text-xl">
              Enquire Now
            </button>

            <p className="mt-4 text-base text-gray-700 sm:text-lg">
              Speak with our Advisor
            </p>
          </div>
        </div>

        <hr className="my-8 border-gray-300" />

        {/* Bottom */}
        <div className="grid gap-10 text-center md:grid-cols-2 md:text-left">
          <div>
            <h3 className="text-[22px] font-bold sm:text-[24px]">
              Accredian
            </h3>

            <div className="mt-5 space-y-3 text-[15px] text-gray-700 sm:text-[16px]">
              <Link href="#" className="block hover:text-[#2F7CF6]">
                About
              </Link>

              <Link href="#" className="block hover:text-[#2F7CF6]">
                Blog
              </Link>

              <Link href="#" className="block hover:text-[#2F7CF6]">
                Why Accredian
              </Link>
            </div>
          </div>

          <div>
            <h3 className="text-[22px] font-bold sm:text-[24px]">
              Contact Us
            </h3>

            <div className="mt-5 space-y-4 text-[15px] leading-7 text-gray-700 sm:text-[16px]">
              <p>
                Email us:{" "}
                <a
                  href="mailto:enterprise@accredian.com"
                  className="text-[#2F7CF6]"
                >
                  enterprise@accredian.com
                </a>
              </p>

              <p>
                Office Address: 4th Floor, 250, Phase IV, Udyog Vihar,
                Sector 18, Gurugram, Haryana
              </p>
            </div>
          </div>
        </div>

        <hr className="my-10 border-gray-300" />

        <p className="text-center text-sm text-gray-700">
          © 2026 Accredian A Brand of FullStack Education Pvt Ltd. All Rights
          Reserved
        </p>
      </Container>
    </footer>
  );
}