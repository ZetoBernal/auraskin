"use client";

import React from "react";
import type { SkinType, SkinConcern } from "@/store/auth-store";

interface Step2Props {
  skinType: SkinType;
  concern: SkinConcern;
  onSkinType: (value: SkinType) => void;
  onConcern: (value: SkinConcern) => void;
  onNext: () => void;
  onBack: () => void;
}

export default function Step2Skin({ skinType, concern, onSkinType, onConcern, onNext, onBack }: Step2Props) {
  const skinOptions: { value: SkinType; label: string; desc: string }[] = [
    { value: "dry", label: "Seca o tirante", desc: "Descamación o falta de hidratación" },
    { value: "oily", label: "Grasa o brillante", desc: "Brillos frecuentes en zona T" },
    { value: "mixed", label: "Mixta", desc: "Zonas secas y zonas grasas" },
    { value: "sensitive", label: "Sensible", desc: "Se irrita con facilidad" },
  ];

  const concernOptions: { value: SkinConcern; label: string; icon: string }[] = [
    { value: "hydration", label: "Hidratación", icon: "💧" },
    { value: "anti_aging", label: "Antiedad", icon: "✨" },
    { value: "acne", label: "Control de acné", icon: "🎯" },
    { value: "spots", label: "Manchas", icon: "🌿" },
  ];

  return (
    <div>
      <span className="text-[10px] font-bold tracking-widest text-brand-magenta bg-brand-magenta/5 border border-brand-magenta/10 px-3 py-1 rounded-full uppercase">
        Paso 2 · Tu piel
      </span>
      <h2 className="text-xl sm:text-2xl font-bold text-zinc-900 mt-4 mb-2">
        Análisis Lumina AI
      </h2>
      <p className="text-sm text-zinc-500 mb-8">
        Selecciona el tipo de piel y tu objetivo principal.
      </p>

      <div className="mb-6">
        <p className="text-xs font-bold text-zinc-700 mb-3">¿Cómo es tu piel normalmente?</p>
        <div className="grid grid-cols-1 gap-3">
          {skinOptions.map((opt) => (
            <button
              key={opt.value}
              type="button"
              onClick={() => onSkinType(opt.value)}
              className={`text-left px-4 py-3.5 rounded-2xl border-2 transition-all duration-200 flex items-center gap-3 ${
                skinType === opt.value
                  ? "border-brand-teal bg-brand-teal/5"
                  : "border-zinc-200 bg-white hover:border-zinc-300"
              }`}
            >
              <div
                className={`w-3 h-3 rounded-full border-2 shrink-0 transition-all ${
                  skinType === opt.value
                    ? "border-brand-teal bg-brand-teal"
                    : "border-zinc-300"
                }`}
              />
              <div>
                <span className="text-sm font-semibold text-zinc-800 block">{opt.label}</span>
                <span className="text-[11px] text-zinc-500">{opt.desc}</span>
              </div>
            </button>
          ))}
        </div>
      </div>

      <div className="mb-8">
        <p className="text-xs font-bold text-zinc-700 mb-3">¿Tu objetivo principal es...?</p>
        <div className="grid grid-cols-2 gap-3">
          {concernOptions.map((opt) => (
            <button
              key={opt.value}
              type="button"
              onClick={() => onConcern(opt.value)}
              className={`flex items-center gap-2.5 px-4 py-3.5 rounded-2xl border-2 transition-all duration-200 ${
                concern === opt.value
                  ? "border-brand-teal bg-brand-teal/5"
                  : "border-zinc-200 bg-white hover:border-zinc-300"
              }`}
            >
              <span className="text-xl">{opt.icon}</span>
              <span className="text-xs font-semibold text-zinc-800">{opt.label}</span>
            </button>
          ))}
        </div>
      </div>

      <div className="flex gap-3">
        <button
          type="button"
          onClick={onBack}
          className="flex-1 h-11 border border-zinc-200 bg-white hover:bg-zinc-50 text-zinc-700 text-sm font-semibold rounded-xl transition-all duration-300"
        >
          ← Atrás
        </button>
        <button
          type="button"
          onClick={onNext}
          disabled={!skinType || !concern}
          className="flex-[2] h-11 bg-brand-dark-teal hover:bg-brand-dark-hover disabled:opacity-40 disabled:cursor-not-allowed text-white text-sm font-semibold rounded-xl transition-all duration-300 shadow-sm"
        >
          Ver mi perfil →
        </button>
      </div>
    </div>
  );
}
