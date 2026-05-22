"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useAuthStore } from "@/store/auth-store";
import type { AuraskinUser, SkinType, SkinConcern } from "@/store/auth-store";
import Step1Profile from "./Step1Profile";
import Step2Skin from "./Step2Skin";
import Step3Summary from "./Step3Summary";

export default function OnboardingPage() {
  const router = useRouter();
  const { user, isAuthenticated, onboardingCompleted, completeOnboarding } = useAuthStore();

  const [step, setStep] = useState(1);
  const [isPending, setIsPending] = useState(false);

  const [gender, setGender] = useState<string>("");
  const [birthDate, setBirthDate] = useState<string>("");
  const [skinType, setSkinType] = useState<SkinType>(null);
  const [concern, setConcern] = useState<SkinConcern>(null);

  useEffect(() => {
    if (!isAuthenticated) {
      router.replace("/login");
      return;
    }
    if (onboardingCompleted) {
      router.replace("/dashboard");
    }
  }, [isAuthenticated, onboardingCompleted, router]);

  if (!isAuthenticated || onboardingCompleted) return null;

  const handleComplete = async () => {
    setIsPending(true);
    await new Promise((resolve) => setTimeout(resolve, 600));
    completeOnboarding({
      gender: gender as AuraskinUser["gender"],
      birthDate,
      skinType,
      skinConcern: concern,
    });
    router.replace("/dashboard");
  };

  return (
    <div className="min-h-screen bg-brand-gray-light flex flex-col font-sans">
      <header className="h-16 bg-white border-b border-zinc-100 flex items-center px-6 justify-between sticky top-0 z-50">
        <Link href="/" className="flex items-center gap-2.5 group">
          <div className="w-8 h-8 rounded-md bg-brand-teal flex items-center justify-center transition-transform duration-300 group-hover:scale-105 shadow-xs">
            <Image
              src="/images/logo-droplet.png"
              alt="Auraskin"
              width={16}
              height={16}
              className="object-contain"
            />
          </div>
          <span className="font-semibold text-lg tracking-tight text-brand-dark-teal">
            Auraskin
          </span>
        </Link>

        <div className="flex items-center gap-2">
          {[1, 2, 3].map((s) => (
            <div
              key={s}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                s <= step ? "bg-brand-dark-teal" : "bg-zinc-200"
              }`}
            />
          ))}
          <span className="text-xs font-medium text-zinc-400 ml-1">
            {step}/3
          </span>
        </div>
      </header>

      <div className="h-1 bg-zinc-100">
        <div
          className="h-full bg-gradient-to-r from-brand-teal to-brand-dark-teal transition-all duration-500 ease-out"
          style={{ width: `${step === 1 ? 10 : step === 2 ? 50 : 90}%` }}
        />
      </div>

      <main className="flex-1 flex items-center justify-center p-6 md:p-12">
        <div className="bg-white rounded-3xl border border-zinc-150 shadow-sm p-8 sm:p-10 w-full max-w-lg">
          {step === 1 && (
            <Step1Profile
              gender={gender}
              birthDate={birthDate}
              onGender={setGender}
              onBirthDate={setBirthDate}
              onNext={() => setStep(2)}
            />
          )}
          {step === 2 && (
            <Step2Skin
              skinType={skinType}
              concern={concern}
              onSkinType={setSkinType}
              onConcern={setConcern}
              onNext={() => setStep(3)}
              onBack={() => setStep(1)}
            />
          )}
          {step === 3 && (
            <Step3Summary
              userName={user?.name ?? ""}
              skinType={skinType}
              concern={concern}
              onComplete={handleComplete}
              onBack={() => setStep(2)}
              isPending={isPending}
            />
          )}
        </div>
      </main>

      <footer className="h-12 bg-white border-t border-zinc-100 flex items-center justify-center px-6">
        <span className="text-[10px] font-medium text-zinc-400">
          Auraskin © {new Date().getFullYear()} · Dermatológicamente aprobado.
        </span>
      </footer>
    </div>
  );
}
