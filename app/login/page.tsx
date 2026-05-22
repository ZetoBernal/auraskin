"use client";

import React, { useState, useTransition } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useAuthStore } from "@/store/auth-store";
import AuthGuard from "@/components/AuthGuard";

function LoginForm() {
  const router = useRouter();
  const { login } = useAuthStore();
  const [isPending, startTransition] = useTransition();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    startTransition(async () => {
      const result = await login(email, password);
      if (result.ok) {
        // AuthGuard will handle onboarding redirect if needed
        const { onboardingCompleted } = useAuthStore.getState();
        router.replace(onboardingCompleted ? "/dashboard" : "/onboarding");
      } else {
        setError(result.error ?? "Error al iniciar sesión.");
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
          ¿No tienes cuenta?{" "}
          <Link
            href="/register"
            className="font-semibold text-brand-dark-teal hover:underline"
          >
            Regístrate
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
              <span className="text-[10px] font-bold tracking-widest text-brand-magenta bg-brand-magenta/5 border border-brand-magenta/10 px-3 py-1 rounded-full uppercase">
                Bienvenida de vuelta
              </span>
              <h1 className="text-2xl font-bold text-zinc-900 mt-4 mb-1">
                Inicia sesión en tu cuenta
              </h1>
              <p className="text-sm text-zinc-500">
                Tu rutina inteligente te está esperando.
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-5" noValidate>
              {/* Email */}
              <div>
                <label
                  htmlFor="login-email"
                  className="block text-xs font-bold text-zinc-700 mb-1.5"
                >
                  Correo electrónico
                </label>
                <input
                  id="login-email"
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
                <div className="flex justify-between items-center mb-1.5">
                  <label
                    htmlFor="login-password"
                    className="block text-xs font-bold text-zinc-700"
                  >
                    Contraseña
                  </label>
                  <button
                    type="button"
                    className="text-[11px] font-medium text-brand-dark-teal hover:underline"
                  >
                    ¿Olvidaste tu contraseña?
                  </button>
                </div>
                <div className="relative">
                  <input
                    id="login-password"
                    type={showPassword ? "text" : "password"}
                    autoComplete="current-password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="••••••••"
                    className="w-full h-11 px-4 pr-11 text-sm rounded-xl border border-zinc-200 bg-white text-zinc-900 placeholder-zinc-400 outline-none focus:border-brand-teal focus:ring-2 focus:ring-brand-teal/20 transition-all duration-200"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-zinc-400 hover:text-zinc-700 transition-colors"
                    aria-label={showPassword ? "Ocultar contraseña" : "Mostrar contraseña"}
                  >
                    {showPassword ? (
                      <svg className="w-4.5 h-4.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88" />
                      </svg>
                    ) : (
                      <svg className="w-4.5 h-4.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    )}
                  </button>
                </div>
              </div>

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
                id="btn-login-submit"
                type="submit"
                disabled={isPending || !email || !password}
                className="w-full h-11 bg-brand-dark-teal hover:bg-brand-dark-hover disabled:opacity-50 disabled:cursor-not-allowed text-white text-sm font-semibold rounded-xl transition-all duration-300 shadow-sm flex items-center justify-center gap-2"
              >
                {isPending ? (
                  <>
                    <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                    </svg>
                    Iniciando sesión...
                  </>
                ) : (
                  "Iniciar sesión"
                )}
              </button>
            </form>

            {/* Divider */}
            <div className="my-6 flex items-center gap-3">
              <div className="flex-1 h-px bg-zinc-100" />
              <span className="text-[11px] text-zinc-400 font-medium">o continúa con</span>
              <div className="flex-1 h-px bg-zinc-100" />
            </div>

            {/* Social stub */}
            <button
              id="btn-login-google"
              type="button"
              className="w-full h-11 border border-zinc-200 hover:bg-zinc-50 rounded-xl flex items-center justify-center gap-2.5 text-sm font-medium text-zinc-700 transition-all duration-200"
            >
              <svg className="w-4.5 h-4.5" viewBox="0 0 24 24">
                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
              </svg>
              Continuar con Google
            </button>
          </div>

          {/* Register link */}
          <p className="text-center text-xs text-zinc-500 mt-6">
            ¿Aún no tienes tu perfil Auraskin?{" "}
            <Link href="/register" className="font-semibold text-brand-dark-teal hover:underline">
              Crea tu cuenta
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

export default function LoginPage() {
  return (
    <AuthGuard redirectIfAuthenticated>
      <LoginForm />
    </AuthGuard>
  );
}
