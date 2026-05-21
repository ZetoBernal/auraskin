"use client";

import React from "react";

export default function HowItWorks() {
  return (
    <section id="como-funciona" className="bg-white py-16 md:py-24 border-t border-zinc-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center max-w-xl mx-auto mb-16 md:mb-20">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-zinc-900 mb-4">
            Cómo funciona Auraskin
          </h2>
          <p className="text-zinc-550 text-zinc-500 text-sm sm:text-base leading-relaxed">
            Ciencia y tecnología al servicio de tu rutina diaria.
          </p>
        </div>

        {/* 3 Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 sm:gap-16">
          {/* Step 1 */}
          <div className="flex flex-col items-center text-center px-4">
            {/* Step Icon (Fingerprint/Scan) */}
            <div className="w-16 h-16 rounded-2xl bg-sky-50 flex items-center justify-center text-sky-500 mb-6 shadow-xs border border-sky-100/50">
              <svg
                className="w-8 h-8"
                fill="none"
                stroke="currentColor"
                strokeWidth={1.5}
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M7.864 4.243A9.003 9.003 0 0012 21a9.003 9.003 0 004.136-16.757M12 9v4m0 4h.01M9 16.5h6"
                />
                <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth={1.5} />
                <path d="M12 8a2 2 0 100 4 2 2 0 000-4z" />
              </svg>
            </div>
            
            {/* Title */}
            <h3 className="text-lg font-bold text-zinc-900 mb-3">
              1. Analizamos tu piel
            </h3>
            
            {/* Body */}
            <p className="text-zinc-600 text-sm sm:text-base leading-relaxed max-w-xs">
              Completas un test dermatológico digital desarrollado por expertos para entender tu tipo de piel y objetivos.
            </p>
          </div>

          {/* Step 2 */}
          <div className="flex flex-col items-center text-center px-4">
            {/* Step Icon (Flask) */}
            <div className="w-16 h-16 rounded-2xl bg-purple-50 flex items-center justify-center text-purple-500 mb-6 shadow-xs border border-purple-100/50">
              <svg
                className="w-8 h-8"
                fill="none"
                stroke="currentColor"
                strokeWidth={1.5}
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9.75 3.104v1.244c0 .89-.56 1.6-1.2 2.2L4.9 10.7a4.2 4.2 0 000 5.92L6.16 17.9a4.2 4.2 0 005.92 0l3.86-3.86c.6-.6 1.3-1.2 2.2-1.2h1.24M9.75 3.104h4.5M9.75 3.104c0 1.25.75 2.25 1.5 3"
                />
                <path d="M9.75 3.1h4.5M6 14.5c.5-1 2-2 3.5-1M12 18.5a6 6 0 00-6-6M19 12v6m-3-3h6" />
                <path d="M9 3v4M15 3v4M7 21h10a2 2 0 002-2v-4a2 2 0 00-2-2H7a2 2 0 00-2 2v4a2 2 0 002 2z" />
              </svg>
            </div>

            {/* Title */}
            <h3 className="text-lg font-bold text-zinc-900 mb-3">
              2. Expertos eligen
            </h3>

            {/* Body */}
            <p className="text-zinc-600 text-sm sm:text-base leading-relaxed max-w-xs">
              Nuestro algoritmo y especialistas seleccionan los ingredientes activos que realmente necesitas este mes.
            </p>
          </div>

          {/* Step 3 */}
          <div className="flex flex-col items-center text-center px-4">
            {/* Step Icon (Package) */}
            <div className="w-16 h-16 rounded-2xl bg-orange-50 flex items-center justify-center text-orange-500 mb-6 shadow-xs border border-orange-100/50">
              <svg
                className="w-8 h-8"
                fill="none"
                stroke="currentColor"
                strokeWidth={1.5}
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
                />
              </svg>
            </div>

            {/* Title */}
            <h3 className="text-lg font-bold text-zinc-900 mb-3">
              3. Recibes tu caja
            </h3>

            {/* Body */}
            <p className="text-zinc-600 text-sm sm:text-base leading-relaxed max-w-xs">
              Tu rutina personalizada llega directamente a tu puerta con instrucciones claras de uso mañana y noche.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
