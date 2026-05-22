"use client";

import React from "react";

const MAX_BIRTH_DATE = (() => {
  const date = new Date();
  date.setFullYear(date.getFullYear() - 10);
  return date.toISOString().split("T")[0];
})();

interface Step1Props {
  gender: string;
  birthDate: string;
  onGender: (value: string) => void;
  onBirthDate: (value: string) => void;
  onNext: () => void;
}

export default function Step1Profile({ gender, birthDate, onGender, onBirthDate, onNext }: Step1Props) {
  const genderOptions = [
    { value: "female", label: "Mujer", emoji: "👩" },
    { value: "male", label: "Hombre", emoji: "👨" },
    { value: "other", label: "Prefiero no decirlo", emoji: "✨" },
  ];

  return (
    <div>
      <span className="text-[10px] font-bold tracking-widest text-brand-teal bg-brand-teal/10 px-3 py-1 rounded-full uppercase">
        Paso 1 · Tu perfil
      </span>
      <h2 className="text-xl sm:text-2xl font-bold text-zinc-900 mt-4 mb-2">
        Cuéntanos sobre ti
      </h2>
      <p className="text-sm text-zinc-500 mb-8">
        Estos datos ayudan a Lumina AI a personalizar mejor tu rutina.
      </p>

      <div className="mb-6">
        <p className="text-xs font-bold text-zinc-700 mb-3">¿Con qué género te identificas?</p>
        <div className="grid grid-cols-3 gap-3">
          {genderOptions.map((opt) => (
            <button
              key={opt.value}
              type="button"
              onClick={() => onGender(opt.value)}
              className={`flex flex-col items-center gap-2 p-4 rounded-2xl border-2 transition-all duration-200 ${
                gender === opt.value
                  ? "border-brand-teal bg-brand-teal/5 shadow-xs"
                  : "border-zinc-200 bg-white hover:border-zinc-300"
              }`}
            >
              <span className="text-2xl">{opt.emoji}</span>
              <span className="text-[11px] font-semibold text-zinc-700 text-center leading-tight">{opt.label}</span>
            </button>
          ))}
        </div>
      </div>

      <div className="mb-8">
        <label htmlFor="ob-birthdate" className="block text-xs font-bold text-zinc-700 mb-1.5">
          Fecha de nacimiento
        </label>
        <input
          id="ob-birthdate"
          type="date"
          value={birthDate}
          onChange={(e) => onBirthDate(e.target.value)}
          max={MAX_BIRTH_DATE}
          className="w-full h-11 px-4 text-sm rounded-xl border border-zinc-200 bg-white text-zinc-900 outline-none focus:border-brand-teal focus:ring-2 focus:ring-brand-teal/20 transition-all duration-200"
        />
      </div>

      <button
        type="button"
        onClick={onNext}
        disabled={!gender || !birthDate}
        className="w-full h-11 bg-brand-dark-teal hover:bg-brand-dark-hover disabled:opacity-40 disabled:cursor-not-allowed text-white text-sm font-semibold rounded-xl transition-all duration-300 shadow-sm"
      >
        Continuar →
      </button>
    </div>
  );
}
