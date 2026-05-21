"use client";

import React from "react";
import Link from "next/link";

export default function CtaBanner() {
  return (
    <section className="bg-white py-16 md:py-20 border-t border-zinc-50">
      <div className="max-w-5xl mx-auto px-6">
        {/* Banner Container */}
        <div className="relative overflow-hidden bg-brand-teal/50 rounded-[2rem] py-16 px-6 sm:px-12 md:py-20 text-center flex flex-col items-center shadow-xs">
          {/* Subtle gradient background inside */}
          <div className="absolute inset-0 -z-10 bg-gradient-to-br from-brand-teal/40 to-teal-100/30 opacity-75" />

          {/* Heading */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-brand-dark-teal mb-5 leading-tight">
            ¿Lista para el cambio?
          </h2>

          {/* Subtitle */}
          <p className="text-brand-dark-teal/80 text-sm sm:text-base font-medium leading-relaxed max-w-xl mb-10">
            Empieza hoy tu camino hacia una piel saludable y radiante con Auraskin.
          </p>

          {/* Button */}
          <Link
            href="/quiz"
            className="inline-flex items-center justify-center px-8 py-4 text-sm font-semibold text-white bg-brand-dark-teal hover:bg-brand-dark-hover rounded-xl transition-all duration-300 shadow-[0_4px_20px_-5px_rgba(28,82,90,0.3)] hover:scale-102 transform active:scale-98"
          >
            Comenzar mi evaluación
          </Link>
        </div>
      </div>
    </section>
  );
}
