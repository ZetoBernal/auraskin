"use client";

import React, { useState } from "react";

interface FaqItem {
  question: string;
  answer: string;
}

export default function Faq() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const faqItems: FaqItem[] = [
    {
      question: "¿Qué es Auraskin y cómo funciona el cuidado inteligente?",
      answer: "Auraskin es un servicio de suscripción mensual personalizado que une ciencia y tecnología avanzada. A través de nuestro test interactivo impulsado por Lumina AI, analizamos las necesidades únicas de tu piel y tu cabello. Cada mes, recibes en tu puerta fórmulas magistrales elaboradas con ingredientes activos de alta calidad y dispositivos de belleza adaptados a tu evolución corporal."
    },
    {
      question: "¿Cómo analiza Lumina AI mi piel y mi cabello?",
      answer: "Lumina AI utiliza un cuestionario clínico interactivo desarrollado por dermatólogos y tricólogos (especialistas capilares). Analizamos múltiples factores, como el tipo de cutis (seco, graso, mixto), tus principales objetivos (hidratación, antiedad, acné), y las características de tu cabello (porosidad, grosor del pelo, estado del cuero cabelludo) para formular una rutina 100% personalizada."
    },
    {
      question: "¿Los productos son realmente dermatológicamente probados?",
      answer: "Sí, absolutamente. Todos los sueros, cremas y lociones que incluimos en tus cajas están clínicamente validados, libres de parabenos y siliconas nocivas, y dermatológica y capilarmente probados para garantizar la máxima tolerancia y eficacia en cualquier tipo de piel y hebra capilar."
    },
    {
      question: "¿Puedo cancelar o pausar mi suscripción mensual en cualquier momento?",
      answer: "¡Por supuesto! Auraskin está pensado para adaptarse a tu estilo de vida. Puedes pausar, cambiar de plan o cancelar tu suscripción mensual en cualquier momento sin penalizaciones ni cláusulas de permanencia, directamente desde tu panel de usuario de forma 100% online."
    },
    {
      question: "¿Cómo se personaliza mi rutina capilar?",
      answer: "Al realizar la evaluación, no solo consideramos tu rostro, sino también tu cuero cabelludo y necesidades capilares. Dependiendo de los resultados, tu caja mensual incluirá champús restauradores, acondicionadores personalizados, o tónicos anticaída formulados con principios activos como el ácido hialurónico, péptidos y biotina."
    }
  ];

  const toggleIndex = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section id="faq" className="bg-white py-16 md:py-24 border-t border-zinc-50">
      <div className="max-w-4xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center max-w-xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-zinc-900 mb-4">
            Preguntas Frecuentes
          </h2>
          <p className="text-zinc-500 text-sm sm:text-base">
            Resolvemos tus dudas sobre el cuidado inteligente de Auraskin.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {faqItems.map((item, index) => {
            const isOpen = activeIndex === index;
            return (
              <div
                key={index}
                className={`border rounded-2xl transition-all duration-300 ${
                  isOpen
                    ? "border-brand-teal/40 bg-brand-teal/5 shadow-xs"
                    : "border-zinc-200 bg-white hover:border-zinc-300"
                }`}
              >
                {/* Accordion Trigger Header */}
                <button
                  onClick={() => toggleIndex(index)}
                  className="w-full text-left px-6 py-5 flex justify-between items-center gap-4 group"
                  aria-expanded={isOpen}
                >
                  <span className="text-sm sm:text-base font-bold text-zinc-800 group-hover:text-brand-dark-teal transition-colors">
                    {item.question}
                  </span>
                  
                  {/* Chevron Icon */}
                  <span
                    className={`w-6 h-6 rounded-full flex items-center justify-center shrink-0 border transition-all duration-300 ${
                      isOpen
                        ? "border-brand-teal text-brand-dark-teal bg-white"
                        : "border-zinc-200 text-zinc-400 group-hover:border-zinc-300"
                    }`}
                  >
                    <svg
                      className={`w-3.5 h-3.5 transform transition-transform duration-300 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2.5}
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                    </svg>
                  </span>
                </button>

                {/* Accordion Content Panel */}
                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    isOpen ? "max-h-[300px] border-t border-brand-teal/20" : "max-h-0"
                  }`}
                >
                  <p className="px-6 py-5 text-xs sm:text-sm leading-relaxed text-zinc-600">
                    {item.answer}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
