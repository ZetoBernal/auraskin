"use client";

import React from "react";
import Image from "next/image";

export default function LuminaAI() {
  return (
    <section className="relative bg-gradient-to-br from-white via-brand-teal/5 to-white py-20 md:py-28 overflow-hidden border-t border-zinc-50">
      {/* Decorative backdrop glow */}
      <div className="absolute left-[-10%] top-[20%] -z-10 w-[50%] h-[50%] bg-brand-teal/10 rounded-full blur-3xl opacity-60 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
        {/* Left Visual Column */}
        <div className="lg:col-span-6 w-full flex justify-center">
          <div className="relative w-full max-w-[480px] aspect-[4/3] rounded-3xl overflow-hidden bg-white/70 p-3 border border-brand-teal/25 shadow-[0_20px_50px_rgba(123,195,204,0.2)] backdrop-blur-xs transform hover:scale-102 transition-all duration-500 ease-out group">
            <div className="relative w-full h-full rounded-2xl overflow-hidden bg-brand-gray-light">
              <Image
                src="/images/IA_Image.svg"
                alt="Lumina AI Skincare & Haircare Technology"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-103"
                sizes="(max-width: 768px) 100vw, 480px"
              />
            </div>
          </div>
        </div>

        {/* Right Copy Column */}
        <div className="lg:col-span-6 flex flex-col items-start text-left">
          {/* Section Subtitle Badge */}
          <span className="text-[10px] font-bold tracking-widest text-brand-magenta bg-brand-magenta/5 border border-brand-magenta/10 px-3 py-1 rounded-full uppercase mb-4 shadow-3xs">
            Lumina AI Technology
          </span>

          {/* Section Title */}
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-zinc-900 leading-tight mb-6">
            IA al servicio de tu piel
          </h2>

          {/* Intro Paragraph */}
          <p className="text-zinc-600 text-sm sm:text-base leading-relaxed mb-8 max-w-xl">
            Nuestra inteligencia artificial avanzada te guía para alcanzar el éxito en tu cuidado facial, analizando los factores clave de tu cutis para recomendarte la combinación idónea de activos.
          </p>

          {/* Structured Features Grid - Adding color and removing empty space */}
          <div className="space-y-6 w-full max-w-xl mb-8">
            {/* Feature 1 */}
            <div className="flex gap-4 items-start">
              <div className="w-10 h-10 rounded-xl bg-brand-teal/15 flex items-center justify-center text-brand-dark-teal shrink-0 shadow-2xs">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <h4 className="text-sm font-bold text-zinc-900 mb-1">
                  Análisis Multidimensional
                </h4>
                <p className="text-xs text-zinc-500 leading-relaxed">
                  Evaluamos los niveles de hidratación, sebo, porosidad y sensibilidad dérmica a través de un test clínico interactivo.
                </p>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="flex gap-4 items-start">
              <div className="w-10 h-10 rounded-xl bg-brand-teal/15 flex items-center justify-center text-brand-dark-teal shrink-0 shadow-2xs">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12c0-1.232-.046-2.453-.138-3.662a4.006 4.006 0 00-3.7-3.7 48.656 48.656 0 00-7.324 0 4.006 4.006 0 00-3.7 3.7c-.017.22-.032.441-.046.662M19.5 12l3-3m-3 3l-3-3M4.5 12l-3 3m3-3l3 3" />
                </svg>
              </div>
              <div>
                <h4 className="text-sm font-bold text-zinc-900 mb-1">
                  Fórmulas de Precisión Activa
                </h4>
                <p className="text-xs text-zinc-500 leading-relaxed">
                  Nuestros algoritmos seleccionan las concentraciones científicas óptimas de vitaminas, sueros y compuestos adaptógenos.
                </p>
              </div>
            </div>

            {/* Feature 3 */}
            <div className="flex gap-4 items-start">
              <div className="w-10 h-10 rounded-xl bg-brand-teal/15 flex items-center justify-center text-brand-dark-teal shrink-0 shadow-2xs">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 21v-7.5a.75.75 0 01.75-.75h3a.75.75 0 01.75.75V21m-4.5 0H2.36m11.14 0H18m0 0h3.64m-1.39 0V9.349m-16.5 11.65V9.35m0 0a3.001 3.001 0 003.75-.615A2.993 2.993 0 009.75 9.75c.896 0 1.7-.393 2.25-1.016a2.993 2.993 0 002.25 1.016c.896 0 1.7-.393 2.25-1.015a3.001 3.001 0 003.75.614m-16.5 0a3.004 3.004 0 01-.621-4.72L4.318 3.44A1.5 1.5 0 015.378 3h13.243a1.5 1.5 0 011.06.44l1.19 1.189a3 3 0 01-.621 4.72M6.75 18h3.5a.75.75 0 00.75-.75V13.5a.75.75 0 00-.75-.75h-3.5a.75.75 0 00-.75.75v3.75c0 .414.336.75.75.75z" />
                </svg>
              </div>
              <div>
                <h4 className="text-sm font-bold text-zinc-900 mb-1">
                  Evolución en Rutina Inteligente
                </h4>
                <p className="text-xs text-zinc-500 leading-relaxed">
                  Tu suscripción aprende de tu evolución, modulando los ingredientes según tu respuesta climática, estacional y respuesta de tu piel.
                </p>
              </div>
            </div>
          </div>

          {/* Disclaimer Footer */}
          <div className="border-t border-zinc-150 pt-5 mt-2 w-full max-w-xl">
            <p className="text-[11px] leading-relaxed text-zinc-400 italic">
              *Esta es una recomendación basada en datos de fisionomía. Para condiciones clínicas severas de piel o caída capilar grave, aconsejamos siempre consultar a un médico especialista.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
