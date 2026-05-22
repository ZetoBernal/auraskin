"use client";

import React from "react";
import type { SkinType, SkinConcern } from "@/store/auth-store";

interface Step3Props {
  userName: string;
  skinType: SkinType;
  concern: SkinConcern;
  onComplete: () => void;
  onBack: () => void;
  isPending: boolean;
}

const skinLabels: Record<SkinType, string> = {
  dry: "Seca o tirante",
  oily: "Grasa o brillante",
  mixed: "Mixta",
  sensitive: "Sensible",
};

const concernLabels: Record<SkinConcern, string> = {
  hydration: "Hidratación profunda",
  anti_aging: "Antiedad",
  acne: "Control de acné",
  spots: "Uniformar manchas",
};

const formulaMap: Record<SkinType, string> = {
  dry: "AquaRestore + Hyaluronic Serum",
  oily: "PoreControl + Niacinamide Complex",
  mixed: "BalanceFluid + Dual-Action Toner",
  sensitive: "CalmingMist + Ceramide Barrier",
};

export default function Step3Summary({ userName, skinType, concern, onComplete, onBack, isPending }: Step3Props) {
  return (
    <div>
      <span className="text-[10px] font-bold tracking-widest text-emerald-600 bg-emerald-50 border border-emerald-100 px-3 py-1 rounded-full uppercase">
        Paso 3 · Tu perfil Lumina AI
      </span>
      <h2 className="text-xl sm:text-2xl font-bold text-zinc-900 mt-4 mb-2">
        ¡Tu rutina está lista, {userName}!
      </h2>
      <p className="text-sm text-zinc-500 mb-8">
        Lumina AI ha generado tu fórmula personalizada. Actívala ahora.
      </p>

      <div className="bg-gradient-to-br from-brand-teal/5 to-white rounded-3xl border border-brand-teal/20 p-6 mb-6">
        <div className="flex items-center gap-2 mb-5">
          <div className="w-8 h-8 bg-brand-dark-teal rounded-lg flex items-center justify-center text-white text-xs font-bold">
            AI
          </div>
          <div>
            <p className="text-xs font-bold text-zinc-800">Lumina AI · Fórmula generada</p>
            <p className="text-[10px] text-zinc-400">Personalizada para tu tipo de piel</p>
          </div>
        </div>

        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <span className="text-xs text-zinc-500 font-medium">Tipo de piel detectado</span>
            <span className="text-xs font-bold text-zinc-800 bg-zinc-100 px-2.5 py-1 rounded-full">
              {skinType ? skinLabels[skinType] : "—"}
            </span>
          </div>

          <div className="h-px bg-zinc-100" />

          <div className="flex justify-between items-center">
            <span className="text-xs text-zinc-500 font-medium">Objetivo principal</span>
            <span className="text-xs font-bold text-zinc-800 bg-zinc-100 px-2.5 py-1 rounded-full">
              {concern ? concernLabels[concern] : "—"}
            </span>
          </div>

          <div className="h-px bg-zinc-100" />

          <div className="flex justify-between items-start gap-4">
            <span className="text-xs text-zinc-500 font-medium shrink-0">Fórmula recomendada</span>
            <span className="text-xs font-bold text-brand-dark-teal text-right">
              {skinType ? formulaMap[skinType] : "—"}
            </span>
          </div>

          <div className="h-px bg-zinc-100" />

          <div className="flex justify-between items-center">
            <span className="text-xs text-zinc-500 font-medium">Regalo de bienvenida</span>
            <span className="text-xs font-bold text-brand-magenta">
              🎁 Cepillo Sónico
            </span>
          </div>
        </div>
      </div>

      <p className="text-[11px] text-zinc-400 leading-relaxed mb-6 text-center">
        Podrás actualizar tu perfil en cualquier momento desde tu panel de control.
      </p>

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
          id="btn-complete-onboarding"
          onClick={onComplete}
          disabled={isPending}
          className="flex-[2] h-11 bg-brand-dark-teal hover:bg-brand-dark-hover disabled:opacity-50 text-white text-sm font-semibold rounded-xl transition-all duration-300 shadow-sm flex items-center justify-center gap-2"
        >
          {isPending ? (
            <>
              <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
              </svg>
              Activando...
            </>
          ) : (
            "Ir a mi Dashboard ✨"
          )}
        </button>
      </div>
    </div>
  );
}
