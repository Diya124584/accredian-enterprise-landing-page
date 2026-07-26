import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/home/Hero";
import Stats from "@/components/home/Stats";
import Clients from "@/components/home/Clients";
import AccredianEdge from "@/components/home/AccredianEdge";
import CAT from "@/components/home/CAT";
import HowItWorks from "@/components/home/HowItWorks";
import FAQ from "@/components/home/FAQ";
import Testimonials from "@/components/home/Testimonials";
import CTA from "@/components/home/CTA";
import DomainExpertise from "@/components/home/DomainExpertise";
import CourseSegmentation from "@/components/home/CourseSegmentation";
import WhoShouldJoin from "@/components/home/WhoShouldJoin";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <Clients />
        <AccredianEdge />
        <DomainExpertise />
        <CourseSegmentation />
        <WhoShouldJoin />
        <CAT />
        <HowItWorks />
        <FAQ />
        <Testimonials />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
