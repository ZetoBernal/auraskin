"use client";

import React from "react";
import Image from "next/image";

export default function Testimonials() {
  return (
    <section className="bg-white py-16 md:py-24 border-t border-zinc-50">
      <div className="max-w-7xl mx-auto px-6 flex flex-col items-center">
        {/* Large Styled Quote Icon */}
        <span className="font-serif text-5xl md:text-6xl text-rose-300 font-bold leading-none mb-4 select-none">
          ”
        </span>

        {/* Section Header */}
        <div className="text-center max-w-xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-zinc-900 mb-2">
            Lo que dicen nuestras clientas
          </h2>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl w-full">
          {/* Testimonial 1 */}
          <div className="bg-brand-gray-light rounded-3xl p-6 sm:p-8 border border-zinc-150/70 shadow-xs flex flex-col justify-between">
            <p className="text-zinc-650 text-sm sm:text-base leading-relaxed italic text-zinc-700 mb-6">
              "Llevaba años probando cremas sin ver resultados reales. Con Auraskin mi piel se siente hidratada y equilibrada por primera vez."
            </p>
            <div className="flex items-center gap-3.5 mt-auto">
              <div className="relative w-8 h-8 rounded-full border border-zinc-200 overflow-hidden bg-zinc-100 shrink-0">
                <Image
                  src="/sofia-avatar.png"
                  alt="Sofía L. Avatar"
                  fill
                  className="object-cover"
                  sizes="32px"
                />
              </div>
              <div>
                <h4 className="text-xs font-bold text-zinc-900">Sofía L.</h4>
                <p className="text-[10px] text-zinc-400 font-medium tracking-wide">
                  Cliente Premium desde 2023
                </p>
              </div>
            </div>
          </div>

          {/* Testimonial 2 */}
          <div className="bg-brand-gray-light rounded-3xl p-6 sm:p-8 border border-zinc-150/70 shadow-xs flex flex-col justify-between">
            <p className="text-zinc-650 text-sm sm:text-base leading-relaxed italic text-zinc-700 mb-6">
              "La comodidad de recibir mis productos cada mes me ha ahorrado tiempo y dinero. ¡Es como tener un dermatólogo en casa!"
            </p>
            <div className="flex items-center gap-3.5 mt-auto">
              <div className="relative w-8 h-8 rounded-full border border-zinc-200 overflow-hidden bg-zinc-100 shrink-0">
                <Image
                  src="/elena-avatar.png"
                  alt="Elena R. Avatar"
                  fill
                  className="object-cover"
                  sizes="32px"
                />
              </div>
              <div>
                <h4 className="text-xs font-bold text-zinc-900">Elena R.</h4>
                <p className="text-[10px] text-zinc-400 font-medium tracking-wide">
                  Cliente Basic
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
