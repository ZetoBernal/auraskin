import React from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import LuminaAI from "@/components/LuminaAI";
import HowItWorks from "@/components/HowItWorks";
import Pricing from "@/components/Pricing";
import Testimonials from "@/components/Testimonials";
import CtaBanner from "@/components/CtaBanner";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Navigation Header */}
      <Navbar />

      {/* Main Body */}
      <main className="flex-grow">
        {/* Hero Section */}
        <Hero />

        {/* Lumina AI Tech Feature Section */}
        <LuminaAI />

        {/* 3-Step Process Breakdown */}
        <HowItWorks />

        {/* Monthly Subscription Plans */}
        <Pricing />

        {/* Customer Reviews Grid */}
        <Testimonials />

        {/* Bottom Evaluation Banner */}
        <CtaBanner />
      </main>

      {/* Footer Details */}
      <Footer />
    </div>
  );
}
