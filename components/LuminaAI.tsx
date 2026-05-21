"use client";

import React from "react";
import Image from "next/image";

export default function LuminaAI() {
  return (
    <section className="bg-white py-16 md:py-24 overflow-hidden border-t border-zinc-50">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-16 items-center">
        {/* Left Visual Column */}
        <div className="md:col-span-6 w-full flex justify-center md:justify-start">
          <div className="relative w-full max-w-[420px] aspect-[4/3] rounded-2xl overflow-hidden bg-brand-gray-light border border-zinc-150/80 shadow-[0_10px_30px_-10px_rgba(123,195,204,0.3)]">
            <Image
              src="/images/IA_Image.svg"
              alt="Lumina AI Technology - Future of Beauty"
              fill
              className="object-cover transition-transform duration-700 hover:scale-105"
              sizes="(max-width: 768px) 100vw, 420px"
            />
          </div>
        </div>

        {/* Right Copy Column */}
        <div className="md:col-span-6 flex flex-col items-start text-left">
          {/* Section Subtitle Badge */}
          <span className="text-[10px] font-bold tracking-widest text-brand-magenta uppercase mb-4">
            Lumina AI Technology
          </span>

          {/* Section Title */}
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-zinc-900 leading-snug mb-6">
            IA al servicio de tu piel
          </h2>

          {/* Body Paragraph */}
          <p className="text-zinc-655 text-zinc-600 text-sm sm:text-base leading-relaxed mb-6">
            Nuestra inteligencia artificial te guía para alcanzar el éxito en tu cuidado facial, brindando recomendaciones personalizadas de productos e ingredientes clave para una piel radiante. Una rutina a tu medida, sin importar tu tono o tipo de piel.
          </p>

          {/* Disclaimer Footer */}
          <div className="border-t border-zinc-100 pt-5 mt-2">
            <p className="text-[11px] leading-relaxed text-zinc-400 italic">
              *Esta es una recomendación basada en datos. Para condiciones dermatológicas severas, sugerimos siempre visitar a un dermatólogo colegiado.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
