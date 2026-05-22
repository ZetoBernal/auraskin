"use client";

import React, { useState, useTransition } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useAuthStore } from "@/store/auth-store";
import AuthGuard from "@/components/AuthGuard";

function RegisterForm() {
  const router = useRouter();
  const { register } = useAuthStore();
  const [isPending, startTransition] = useTransition();

  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [accepted, setAccepted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const passwordStrength = (() => {
    if (password.length === 0) return null;
    if (password.length < 6) return "weak";
    if (password.length < 10) return "medium";
    return "strong";
  })();

  const strengthLabels = {
    weak: { label: "Débil", color: "bg-red-400", text: "text-red-500" },
    medium: { label: "Media", color: "bg-amber-400", text: "text-amber-500" },
    strong: { label: "Fuerte", color: "bg-emerald-400", text: "text-emerald-500" },
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    if (password !== confirmPassword) {
      setError("Las contraseñas no coinciden.");
      return;
    }
    if (password.length < 6) {
      setError("La contraseña debe tener al menos 6 caracteres.");
      return;
    }
    if (!accepted) {
      setError("Debes aceptar los términos y condiciones.");
      return;
    }

    startTransition(async () => {
      const result = await register(name.trim(), lastName.trim(), email, password);
      if (result.ok) {
        router.replace("/onboarding");
      } else {
        setError(result.error ?? "Error al crear la cuenta.");
      }
    });
  };

  return (
    <div className="min-h-screen bg-brand-gray-light flex flex-col font-sans">
      {/* Top Bar */}
      <header className="h-16 bg-white border-b border-zinc-100 flex items-center px-6 justify-between">
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
        <p className="text-xs text-zinc-500">
          ¿Ya tienes cuenta?{" "}
          <Link href="/login" className="font-semibold text-brand-dark-teal hover:underline">
            Inicia sesión
          </Link>
        </p>
      </header>

      {/* Main */}
      <main className="flex-1 flex items-center justify-center px-6 py-12">
        <div className="w-full max-w-md">
          {/* Card */}
          <div className="bg-white rounded-3xl border border-zinc-150 shadow-sm p-8 sm:p-10">
            {/* Header */}
            <div className="mb-8">
              <span className="text-[10px] font-bold tracking-widest text-brand-teal bg-brand-teal/10 border border-brand-teal/20 px-3 py-1 rounded-full uppercase">
                Nueva cuenta
              </span>
              <h1 className="text-2xl font-bold text-zinc-900 mt-4 mb-1">
                Crea tu perfil Auraskin
              </h1>
              <p className="text-sm text-zinc-500">
                Tu fórmula dermatológica personalizada empieza aquí.
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4" noValidate>
              {/* Name row */}
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label htmlFor="reg-name" className="block text-xs font-bold text-zinc-700 mb-1.5">
                    Nombre
                  </label>
                  <input
                    id="reg-name"
                    type="text"
                    autoComplete="given-name"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Sofía"
                    className="w-full h-11 px-4 text-sm rounded-xl border border-zinc-200 bg-white text-zinc-900 placeholder-zinc-400 outline-none focus:border-brand-teal focus:ring-2 focus:ring-brand-teal/20 transition-all duration-200"
                  />
                </div>
                <div>
                  <label htmlFor="reg-lastname" className="block text-xs font-bold text-zinc-700 mb-1.5">
                    Apellido
                  </label>
                  <input
                    id="reg-lastname"
                    type="text"
                    autoComplete="family-name"
                    required
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    placeholder="Gómez"
                    className="w-full h-11 px-4 text-sm rounded-xl border border-zinc-200 bg-white text-zinc-900 placeholder-zinc-400 outline-none focus:border-brand-teal focus:ring-2 focus:ring-brand-teal/20 transition-all duration-200"
                  />
                </div>
              </div>

              {/* Email */}
              <div>
                <label htmlFor="reg-email" className="block text-xs font-bold text-zinc-700 mb-1.5">
                  Correo electrónico
                </label>
                <input
                  id="reg-email"
                  type="email"
                  autoComplete="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="tu@correo.com"
                  className="w-full h-11 px-4 text-sm rounded-xl border border-zinc-200 bg-white text-zinc-900 placeholder-zinc-400 outline-none focus:border-brand-teal focus:ring-2 focus:ring-brand-teal/20 transition-all duration-200"
                />
              </div>

              {/* Password */}
              <div>
                <label htmlFor="reg-password" className="block text-xs font-bold text-zinc-700 mb-1.5">
                  Contraseña
                </label>
                <div className="relative">
                  <input
                    id="reg-password"
                    type={showPassword ? "text" : "password"}
                    autoComplete="new-password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Mínimo 6 caracteres"
                    className="w-full h-11 px-4 pr-11 text-sm rounded-xl border border-zinc-200 bg-white text-zinc-900 placeholder-zinc-400 outline-none focus:border-brand-teal focus:ring-2 focus:ring-brand-teal/20 transition-all duration-200"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-zinc-400 hover:text-zinc-700 transition-colors"
                  >
                    {showPassword ? (
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88" />
                      </svg>
                    ) : (
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    )}
                  </button>
                </div>
                {/* Password strength */}
                {passwordStrength && (
                  <div className="mt-2 flex items-center gap-2">
                    <div className="flex gap-1">
                      {(["weak", "medium", "strong"] as const).map((level, i) => (
                        <div
                          key={level}
                          className={`h-1 w-8 rounded-full transition-all duration-300 ${
                            ["weak", "medium", "strong"].indexOf(passwordStrength) >= i
                              ? strengthLabels[passwordStrength].color
                              : "bg-zinc-200"
                          }`}
                        />
                      ))}
                    </div>
                    <span className={`text-[11px] font-semibold ${strengthLabels[passwordStrength].text}`}>
                      {strengthLabels[passwordStrength].label}
                    </span>
                  </div>
                )}
              </div>

              {/* Confirm Password */}
              <div>
                <label htmlFor="reg-confirm" className="block text-xs font-bold text-zinc-700 mb-1.5">
                  Confirmar contraseña
                </label>
                <input
                  id="reg-confirm"
                  type={showPassword ? "text" : "password"}
                  autoComplete="new-password"
                  required
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  placeholder="Repite tu contraseña"
                  className={`w-full h-11 px-4 text-sm rounded-xl border bg-white text-zinc-900 placeholder-zinc-400 outline-none focus:ring-2 transition-all duration-200 ${
                    confirmPassword && confirmPassword !== password
                      ? "border-red-300 focus:border-red-400 focus:ring-red-100"
                      : "border-zinc-200 focus:border-brand-teal focus:ring-brand-teal/20"
                  }`}
                />
                {confirmPassword && confirmPassword !== password && (
                  <p className="text-[11px] text-red-500 font-medium mt-1">Las contraseñas no coinciden.</p>
                )}
              </div>

              {/* Terms */}
              <label
                htmlFor="reg-terms"
                className="flex items-start gap-3 cursor-pointer group"
              >
                <div className="relative mt-0.5">
                  <input
                    id="reg-terms"
                    type="checkbox"
                    checked={accepted}
                    onChange={(e) => setAccepted(e.target.checked)}
                    className="sr-only"
                  />
                  <div
                    className={`w-4 h-4 rounded border transition-all duration-200 flex items-center justify-center ${
                      accepted
                        ? "bg-brand-dark-teal border-brand-dark-teal"
                        : "border-zinc-300 bg-white group-hover:border-brand-teal"
                    }`}
                  >
                    {accepted && (
                      <svg className="w-2.5 h-2.5 text-white" fill="none" stroke="currentColor" strokeWidth={3} viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    )}
                  </div>
                </div>
                <span className="text-[11px] text-zinc-500 leading-relaxed">
                  Acepto los{" "}
                  <a href="#" className="font-semibold text-brand-dark-teal hover:underline">
                    Términos de servicio
                  </a>{" "}
                  y la{" "}
                  <a href="#" className="font-semibold text-brand-dark-teal hover:underline">
                    Política de privacidad
                  </a>{" "}
                  de Auraskin.
                </span>
              </label>

              {/* Error */}
              {error && (
                <div className="flex items-start gap-2.5 p-3.5 bg-red-50 border border-red-100 rounded-xl">
                  <svg className="w-4 h-4 text-red-500 shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
                  </svg>
                  <p className="text-xs font-medium text-red-600">{error}</p>
                </div>
              )}

              {/* Submit */}
              <button
                id="btn-register-submit"
                type="submit"
                disabled={isPending || !name || !lastName || !email || !password || !confirmPassword}
                className="w-full h-11 bg-brand-dark-teal hover:bg-brand-dark-hover disabled:opacity-50 disabled:cursor-not-allowed text-white text-sm font-semibold rounded-xl transition-all duration-300 shadow-sm flex items-center justify-center gap-2 mt-2"
              >
                {isPending ? (
                  <>
                    <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                    </svg>
                    Creando tu cuenta...
                  </>
                ) : (
                  "Crear cuenta y comenzar →"
                )}
              </button>
            </form>
          </div>

          {/* Login link */}
          <p className="text-center text-xs text-zinc-500 mt-6">
            ¿Ya tienes un perfil Auraskin?{" "}
            <Link href="/login" className="font-semibold text-brand-dark-teal hover:underline">
              Inicia sesión
            </Link>
          </p>
        </div>
      </main>

      {/* Footer */}
      <footer className="h-12 bg-white border-t border-zinc-100 flex items-center justify-center px-6">
        <span className="text-[10px] font-medium text-zinc-400">
          Auraskin © {new Date().getFullYear()} · Dermatológicamente aprobado.
        </span>
      </footer>
    </div>
  );
}

export default function RegisterPage() {
  return (
    <AuthGuard redirectIfAuthenticated>
      <RegisterForm />
    </AuthGuard>
  );
}
