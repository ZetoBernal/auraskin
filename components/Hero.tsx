"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-white pt-8 pb-16 md:py-20">
      {/* Background Soft Blobs */}
      <div className="absolute right-0 top-0 -z-10 w-[70%] h-[70%] max-w-[600px] opacity-40 blur-3xl pointer-events-none">
        <div className="w-full h-full bg-gradient-to-tr from-brand-teal/20 via-rose-100 to-rose-200 rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
        {/* Left Copy Column */}
        <div className="md:col-span-7 flex flex-col items-start text-left">
          {/* Badge */}
          <span className="inline-block px-3.5 py-1.5 rounded-full text-[10px] font-bold tracking-widest text-brand-pink-text bg-brand-pink-soft uppercase mb-6">
            Cuidado Personalizado
          </span>

          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-zinc-900 leading-[1.1] mb-6">
            Tu piel merece un <br />
            <span className="font-serif italic font-normal text-brand-dark-teal lowercase">
              cuidado inteligente
            </span>
          </h1>

          {/* Description */}
          <p className="text-zinc-600 text-base md:text-lg leading-relaxed max-w-lg mb-8">
            Recibe en tu puerta una selección personalizada de productos dermatológicos de alta gama, adaptados a tus necesidades únicas cada mes.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-row items-center gap-4 w-full sm:w-auto mb-8">
            <Link
              href="#planes"
              className="flex-1 sm:flex-initial text-center px-6 py-3.5 text-sm font-semibold text-white bg-brand-dark-teal hover:bg-brand-dark-hover rounded-xl transition-all duration-300 shadow-sm"
            >
              Suscríbete ahora
            </Link>
            <a
              href="#como-funciona"
              className="flex-1 sm:flex-initial text-center px-6 py-3.5 text-sm font-semibold text-zinc-700 bg-white hover:bg-zinc-50 border border-zinc-200 rounded-xl transition-all duration-300 shadow-xs"
            >
              Conocer más
            </a>
          </div>

          {/* Social Proof */}
          <div className="flex items-center gap-3">
            <span className="text-xs font-medium text-zinc-500 tracking-wide">
              Unete a más pieles brillantes
            </span>
          </div>
        </div>

        {/* Right Visual Column */}
        <div className="md:col-span-5 relative w-full flex justify-center items-center">
          {/* Glassmorphic Shadow Base / Backdrop shadow for the image */}
          <div className="relative w-[320px] h-[320px] sm:w-[380px] sm:h-[380px] md:w-[400px] md:h-[400px] flex justify-center items-center">
            {/* Soft backdrop blur circle behind product box */}
            <div className="absolute inset-4 bg-gradient-to-tr from-brand-teal/30 to-brand-teal-light rounded-3xl blur-2xl opacity-75" />
            
            {/* The Box Image */}
            <div className="relative w-full h-full transform hover:scale-102 transition-transform duration-500 ease-out drop-shadow-[0_20px_35px_rgba(28,82,90,0.12)]">
              <Image
                src="/images/Box_Aura.svg"
                alt="Auraskin Smart Box"
                fill
                priority
                className="object-contain"
                sizes="(max-width: 768px) 320px, 400px"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
