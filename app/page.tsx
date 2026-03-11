import Hero from "@/Components/hero";
import Experience from "@/Components/experience";
import Services from "@/Components/services";
import Testimonials from "@/Components/Testimonials"; // 1. Import it here

export default function Home() {
  return (
    <>
      <Hero />
      <Experience />
      <Services />
      <Testimonials /> {/* 2. Add it here */}
    </>
  );
}