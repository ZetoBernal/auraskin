"use client";

import React from "react";
import Image from "next/image";

export default function Pricing() {
  return (
    <section id="planes" className="bg-brand-gray-light py-16 md:py-24 border-t border-zinc-100">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center max-w-xl mx-auto mb-16 md:mb-20">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-zinc-900 mb-4">
            Elige tu plan mensual
          </h2>
          <p className="text-zinc-550 text-zinc-500 text-sm sm:text-base leading-relaxed">
            Recibe un regalo exclusivo (dispositivo de belleza o capilar) en tu primera caja.
          </p>
        </div>

        {/* 3 Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch max-w-5xl mx-auto">
          {/* CARD 1: Trimestral (Recommended) */}
          <div className="relative bg-white rounded-3xl border-2 border-brand-magenta flex flex-col p-6 sm:p-8 shadow-[0_15px_30px_-10px_rgba(192,59,108,0.08)] transform hover:scale-[1.01] transition-all duration-300">
            {/* Top Badges */}
            <div className="flex justify-between items-center mb-6">
              <span className="text-[10px] font-bold tracking-wider text-brand-magenta bg-brand-magenta/5 border border-brand-magenta/10 px-2.5 py-1 rounded-full uppercase">
                10% OFF
              </span>
              <span className="text-[9px] font-bold tracking-widest text-white bg-brand-magenta px-3 py-1 rounded-full uppercase">
                Recomendado
              </span>
            </div>

            {/* Title & Price */}
            <h3 className="text-xl font-bold text-zinc-900 mb-4">Trimestral</h3>
            <div className="mb-1">
              <span className="text-3xl sm:text-4xl font-extrabold text-zinc-950">$53.000</span>
              <span className="text-zinc-400 text-sm font-medium ml-1">/mes</span>
            </div>
            <p className="text-[11px] font-medium text-zinc-400 tracking-wide mb-6">
              $159.000 facturado cada 3 meses
            </p>

            <hr className="border-zinc-100 mb-6" />

            {/* Checklist */}
            <ul className="space-y-4 mb-8 flex-1">
              <li className="flex items-start gap-3">
                <svg
                  className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2.5}
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-xs text-zinc-600 font-medium">
                  Fórmula a medida <strong className="text-zinc-800">facial y capilar</strong>
                </span>
              </li>
              <li className="flex items-start gap-3">
                <svg
                  className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2.5}
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-xs text-zinc-600 font-medium">
                  Envío gratis y prioritario
                </span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-4 h-4 rounded-full bg-brand-magenta/10 flex items-center justify-center shrink-0 mt-0.5">
                  <svg
                    className="w-2.5 h-2.5 text-brand-magenta"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={3}
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                  </svg>
                </div>
                <span className="text-xs font-semibold text-brand-magenta">
                  Regalo: Cepillo Sónico o Masajeador Capilar
                </span>
              </li>
            </ul>

            {/* Gift Preview */}
            <div className="bg-brand-gray-light rounded-2xl p-4 border border-zinc-150 flex flex-col items-center mb-6">
              <span className="text-[9px] font-bold tracking-widest text-zinc-400 uppercase mb-3">
                Regalo en tu primera caja
              </span>
              <div className="relative w-20 h-16 bg-white rounded-lg overflow-hidden border border-zinc-100 flex items-center justify-center">
                <Image
                  src="/images/sonic-brush.png"
                  alt="Cepillo Sónico o Masajeador"
                  width={48}
                  height={48}
                  className="object-contain"
                />
              </div>
            </div>

            {/* Button */}
            <button className="w-full py-3.5 px-4 bg-brand-magenta hover:bg-brand-magenta-hover text-white text-xs font-bold rounded-xl transition-all duration-300 shadow-sm">
              Seleccionar Trimestral
            </button>
          </div>

          {/* CARD 2: Mensual */}
          <div className="bg-white rounded-3xl border border-brand-gray-border flex flex-col p-6 sm:p-8 shadow-xs transform hover:scale-[1.01] transition-all duration-300">
            {/* Top Badges */}
            <div className="flex justify-between items-center mb-6">
              <span className="text-[10px] font-bold tracking-wider text-zinc-500 bg-zinc-100 px-2.5 py-1 rounded-full uppercase">
                Flexible
              </span>
            </div>

            {/* Title & Price */}
            <h3 className="text-xl font-bold text-zinc-900 mb-4">Mensual</h3>
            <div className="mb-1">
              <span className="text-3xl sm:text-4xl font-extrabold text-zinc-950">$58.900</span>
              <span className="text-zinc-400 text-sm font-medium ml-1">/mes</span>
            </div>
            <p className="text-[11px] font-medium text-zinc-400 tracking-wide mb-6">
              Cancela cuando quieras
            </p>

            <hr className="border-zinc-100 mb-6" />

            {/* Checklist */}
            <ul className="space-y-4 mb-8 flex-1">
              <li className="flex items-start gap-3">
                <svg
                  className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2.5}
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-xs text-zinc-600 font-medium">
                  Fórmula a medida <strong className="text-zinc-800">facial y capilar</strong>
                </span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-4 h-4 rounded-full bg-brand-magenta/10 flex items-center justify-center shrink-0 mt-0.5">
                  <svg
                    className="w-2.5 h-2.5 text-brand-magenta"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={3}
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                  </svg>
                </div>
                <span className="text-xs font-semibold text-brand-magenta">
                  Regalo: Cepillo Sónico o Masajeador Capilar
                </span>
              </li>
              <li className="flex items-start gap-3">
                <svg
                  className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2.5}
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-xs text-zinc-600 font-medium">
                  Sin cláusulas de permanencia
                </span>
              </li>
            </ul>

            {/* Gift Preview */}
            <div className="bg-brand-gray-light rounded-2xl p-4 border border-zinc-150 flex flex-col items-center mb-6">
              <span className="text-[9px] font-bold tracking-widest text-zinc-400 uppercase mb-3">
                Regalo en tu primera caja
              </span>
              <div className="relative w-20 h-16 bg-white rounded-lg overflow-hidden border border-zinc-100 flex items-center justify-center">
                <Image
                  src="/images/sonic-brush.png"
                  alt="Cepillo Sónico o Masajeador"
                  width={48}
                  height={48}
                  className="object-contain"
                />
              </div>
            </div>

            {/* Button */}
            <button className="w-full py-3.5 px-4 bg-white hover:bg-zinc-50 text-zinc-700 border border-zinc-300 text-xs font-bold rounded-xl transition-all duration-300 shadow-xs">
              Seleccionar Mensual
            </button>
          </div>

          {/* CARD 3: Semestral */}
          <div className="bg-white rounded-3xl border border-brand-gray-border flex flex-col p-6 sm:p-8 shadow-xs transform hover:scale-[1.01] transition-all duration-300">
            {/* Top Badges */}
            <div className="flex justify-between items-center mb-6">
              <span className="text-[10px] font-bold tracking-wider text-zinc-500 bg-zinc-100 px-2.5 py-1 rounded-full uppercase">
                15% OFF
              </span>
            </div>

            {/* Title & Price */}
            <h3 className="text-xl font-bold text-zinc-900 mb-4">Semestral</h3>
            <div className="mb-1">
              <span className="text-3xl sm:text-4xl font-extrabold text-zinc-950">$50.065</span>
              <span className="text-zinc-400 text-sm font-medium ml-1">/mes</span>
            </div>
            <p className="text-[11px] font-medium text-zinc-400 tracking-wide mb-6">
              $300.390 facturado cada 6 meses
            </p>

            <hr className="border-zinc-100 mb-6" />

            {/* Checklist */}
            <ul className="space-y-4 mb-8 flex-1">
              <li className="flex items-start gap-3">
                <svg
                  className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2.5}
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-xs text-zinc-600 font-medium">
                  Fórmula a medida <strong className="text-zinc-800">facial y capilar</strong>
                </span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-4 h-4 rounded-full bg-brand-magenta/10 flex items-center justify-center shrink-0 mt-0.5">
                  <svg
                    className="w-2.5 h-2.5 text-brand-magenta"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={3}
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                  </svg>
                </div>
                <span className="text-xs font-semibold text-brand-magenta">
                  Regalo: Cepillo Sónico o Masajeador Capilar
                </span>
              </li>
              <li className="flex items-start gap-3">
                <svg
                  className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2.5}
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-xs text-zinc-600 font-medium">
                  Máximo ahorro anual
                </span>
              </li>
            </ul>

            {/* Gift Preview */}
            <div className="bg-brand-gray-light rounded-2xl p-4 border border-zinc-150 flex flex-col items-center mb-6">
              <span className="text-[9px] font-bold tracking-widest text-zinc-400 uppercase mb-3">
                Regalo en tu primera caja
              </span>
              <div className="relative w-20 h-16 bg-white rounded-lg overflow-hidden border border-zinc-100 flex items-center justify-center">
                <Image
                  src="/images/sonic-brush.png"
                  alt="Cepillo Sónico o Masajeador"
                  width={48}
                  height={48}
                  className="object-contain"
                />
              </div>
            </div>

            {/* Button */}
            <button className="w-full py-3.5 px-4 bg-white hover:bg-zinc-50 text-zinc-700 border border-zinc-300 text-xs font-bold rounded-xl transition-all duration-300 shadow-xs">
              Seleccionar Semestral
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
