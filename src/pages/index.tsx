import { Playfair_Display } from "next/font/google";
import Navbar from "../components/Navbar";
import HeroSection from "@/components/Hero-section";
import WhoWeAre from "@/components/WhoWeAre";
import WhatWeDo from "@/components/WhatWeDo";
import OurWork from "@/components/OurWork";
import OurPartner from "@/components/OurPartner";
import Testimonial from "@/components/Testimonial";
import LetsChat from "@/components/LetsChat";
import Footer from "@/components/Footer";

const playfair = Playfair_Display({ subsets: ["latin"] });

export default function Home() {
  return (
    <div
      className={`flex flex-col w-full min-h-[100dvh] ${playfair.className}`}
    >
      <Navbar />
      <HeroSection />
      <WhoWeAre />
      <WhatWeDo />
      <OurWork />
      <OurPartner />
      <Testimonial />
      <LetsChat />
      <Footer />
    </div>
  );
}
