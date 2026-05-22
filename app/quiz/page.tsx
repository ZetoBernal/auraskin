"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function QuizPage() {
  const [step, setStep] = useState(1);
  const [answers, setAnswers] = useState<Record<string, string>>({});

  const questions = [
    {
      id: "skin_type",
      question: "¿Cómo describirías el estado general de tu piel la mayor parte del tiempo?",
      options: [
        { value: "dry", label: "Seca o tirante", desc: "Sientes descamación o falta de hidratación." },
        { value: "oily", label: "Grasa o brillante", desc: "Brillos frecuentes en zona T o en todo el rostro." },
        { value: "mixed", label: "Mixta", desc: "Zonas secas en mejillas pero grasa en la zona T." },
        { value: "sensitive", label: "Sensible", desc: "Se enrojece o irrita con facilidad ante productos." }
      ]
    },
    {
      id: "concern",
      question: "¿Cuál es tu principal preocupación u objetivo de cuidado?",
      options: [
        { value: "hydration", label: "Hidratación Profunda", desc: "Restaurar la elasticidad y suavidad." },
        { value: "anti_aging", label: "Líneas de expresión o arrugas", desc: "Prevenir y suavizar signos de la edad." },
        { value: "acne", label: "Control de brotes / imperfecciones", desc: "Reducir espinillas y limpiar poros." },
        { value: "spots", label: "Manchas o tono irregular", desc: "Aportar luminosidad y unificar el tono." }
      ]
    }
  ];

  const handleSelect = (questionId: string, value: string) => {
    setAnswers({ ...answers, [questionId]: value });
    if (step < questions.length) {
      setStep(step + 1);
    } else {
      setStep(step + 1); // Finished
    }
  };

  const currentQuestion = questions[step - 1];

  return (
    <div className="min-h-screen bg-brand-gray-light flex flex-col justify-between font-sans">
      {/* Header */}
      <header className="h-16 bg-white border-b border-zinc-100 flex items-center px-6 justify-between sticky top-0 z-50">
        <Link href="/" className="flex items-center gap-2.5 group">
          <div className="w-8 h-8 rounded-md bg-brand-teal flex items-center justify-center transition-transform duration-300 group-hover:scale-105 shadow-xs">
            <Image
              src="/logo-droplet.png"
              alt="Auraskin Icon"
              width={16}
              height={16}
              className="object-contain"
            />
          </div>
          <span className="font-semibold text-lg tracking-tight text-brand-dark-teal">
            Auraskin
          </span>
        </Link>
        <Link
          href="/"
          className="text-xs font-semibold text-zinc-500 hover:text-zinc-800 transition-colors"
        >
          Salir
        </Link>
      </header>

      {/* Main Container */}
      <main className="flex-1 flex items-center justify-center p-6 md:p-12 max-w-2xl mx-auto w-full">
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-zinc-150 shadow-sm w-full transition-all duration-300">
          {step <= questions.length ? (
            <div>
              {/* Progress Indicator */}
              <div className="w-full bg-zinc-100 h-1.5 rounded-full overflow-hidden mb-8">
                <div
                  className="bg-brand-teal h-full transition-all duration-500 ease-out"
                  style={{ width: `${(step / questions.length) * 100}%` }}
                />
              </div>

              {/* Step counter */}
              <span className="text-[10px] font-bold tracking-widest text-brand-teal uppercase mb-3 block">
                Paso {step} de {questions.length}
              </span>

              {/* Question */}
              <h1 className="text-xl sm:text-2xl font-bold text-zinc-900 leading-tight mb-8">
                {currentQuestion.question}
              </h1>

              {/* Options */}
              <div className="grid grid-cols-1 gap-4">
                {currentQuestion.options.map((opt) => (
                  <button
                    key={opt.value}
                    onClick={() => handleSelect(currentQuestion.id, opt.value)}
                    className="w-full text-left p-4 rounded-2xl border border-zinc-200 hover:border-brand-teal hover:bg-brand-teal/5 transition-all duration-300 group flex flex-col gap-1 active:scale-[0.99] transform"
                  >
                    <span className="text-sm font-bold text-zinc-800 group-hover:text-brand-dark-teal">
                      {opt.label}
                    </span>
                    <span className="text-xs text-zinc-400 group-hover:text-zinc-500 font-medium">
                      {opt.desc}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          ) : (
            <div className="text-center py-6 flex flex-col items-center">
              {/* Success Checkmark Circle */}
              <div className="w-16 h-16 bg-emerald-50 text-emerald-500 rounded-full flex items-center justify-center mb-6 border border-emerald-100/50">
                <svg
                  className="w-8 h-8"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2.5}
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </div>

              {/* Title */}
              <h1 className="text-2xl font-bold text-zinc-900 mb-4">
                ¡Análisis de Piel Completo!
              </h1>
              
              {/* Description */}
              <p className="text-zinc-650 text-sm leading-relaxed max-w-md mb-8 text-zinc-600">
                Lumina AI ha analizado tus respuestas. Tu fórmula de ingredientes activos y tu cepillo sónico están listos para ser preparados. Su caja también incluirá una rutina de cuidado capilar.
              </p>

              {/* Box Info */}
              <div className="bg-brand-gray-light rounded-2xl p-5 border border-zinc-150 text-left w-full mb-8">
                <h3 className="text-xs font-bold text-zinc-700 uppercase tracking-wider mb-3">
                  Tu Recomendación
                </h3>
                <div className="space-y-3">
                  <div className="flex flex-col sm:flex-row sm:justify-between text-xs font-medium text-zinc-600 gap-1">
                    <span>Fórmula recomendada:</span>
                    <span className="font-bold text-brand-dark-teal sm:text-right">AquaControl + Hydration Booster</span>
                  </div>
                  <div className="flex flex-col sm:flex-row sm:justify-between text-xs font-medium text-zinc-600 gap-1 border-t border-zinc-200/60 pt-2">
                    <span>Cuidado capilar de regalo:</span>
                    <span className="font-bold text-brand-dark-teal sm:text-right">Champú & Acondicionador AI-Hair</span>
                  </div>
                  <div className="flex flex-col sm:flex-row sm:justify-between text-xs font-medium text-zinc-600 gap-1 border-t border-zinc-200/60 pt-2">
                    <span>Tratamiento de inicio:</span>
                    <span className="font-bold text-brand-magenta sm:text-right">Cepillo Sónico + Masajeador Capilar (Regalo)</span>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 w-full">
                <Link
                  href="/#planes"
                  className="flex-1 text-center py-3.5 px-4 bg-brand-dark-teal hover:bg-brand-dark-hover text-white text-xs font-bold rounded-xl transition-all duration-300 shadow-sm"
                >
                  Ver Planes de Suscripción
                </Link>
                <button
                  onClick={() => setStep(1)}
                  className="flex-1 py-3.5 px-4 bg-white hover:bg-zinc-50 text-zinc-700 border border-zinc-300 text-xs font-bold rounded-xl transition-all duration-300 shadow-xs"
                >
                  Repetir Evaluación
                </button>
              </div>
            </div>
          )}
        </div>
      </main>

      {/* Footer */}
      <footer className="h-14 bg-white border-t border-zinc-100 flex items-center justify-center px-6">
        <span className="text-[10px] font-medium text-zinc-400">
          Auraskin © {new Date().getFullYear()} • Dermatológicamente aprobado.
        </span>
      </footer>
    </div>
  );
}
