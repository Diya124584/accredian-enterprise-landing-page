"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import { navLinks } from "@/data/home";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-white/80 backdrop-blur-md">
      <Container className="flex h-16 items-center justify-between lg:h-20">
        {/* Logo */}
        <Link
          href="#home"
          className="flex items-center"
          onClick={() => setIsMenuOpen(false)}
        >
          <Image
            src="/logos/logo.webp"
            alt="Accredian"
            width={140}
            height={32}
            priority
            className="h-7 w-auto sm:h-8"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-ink-secondary transition-colors hover:text-brand"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden lg:block">
          <Button href="#enquire" size="sm">
            Enquire Now
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          aria-label="Toggle navigation menu"
          aria-expanded={isMenuOpen}
          onClick={() => setIsMenuOpen((prev) => !prev)}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-border lg:hidden"
        >
          <span className="relative block h-4 w-5">
            <span
              className={`absolute left-0 top-0 block h-0.5 w-5 bg-ink transition-transform ${
                isMenuOpen ? "translate-y-[7px] rotate-45" : ""
              }`}
            />
            <span
              className={`absolute left-0 top-[7px] block h-0.5 w-5 bg-ink transition-opacity ${
                isMenuOpen ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`absolute left-0 top-[14px] block h-0.5 w-5 bg-ink transition-transform ${
                isMenuOpen ? "-translate-y-[7px] -rotate-45" : ""
              }`}
            />
          </span>
        </button>
      </Container>

      {isMenuOpen && (
        <div className="border-t border-border bg-white shadow-lg lg:hidden">
          <Container className="py-4">
            <nav className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="rounded-lg px-3 py-3 text-sm font-medium text-ink-secondary transition hover:bg-surface-alt hover:text-brand"
                >
                  {link.label}
                </Link>
              ))}

              <div
                className="mt-3"
                onClick={() => setIsMenuOpen(false)}
              >
                <Button href="#enquire">
                  Enquire Now
                </Button>
              </div>
            </nav>
          </Container>
        </div>
      )}
    </header>
  );
}