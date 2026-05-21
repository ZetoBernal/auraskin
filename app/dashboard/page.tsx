"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-brand-gray-light flex flex-col font-sans">
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
        <div className="flex items-center gap-4">
          <span className="text-xs font-semibold text-zinc-500">Hola, Sofía</span>
          <Link
            href="/"
            className="text-xs font-semibold text-brand-dark-teal hover:underline transition-all"
          >
            Cerrar Sesión
          </Link>
        </div>
      </header>

      {/* Main Grid */}
      <main className="flex-1 max-w-6xl mx-auto w-full p-6 sm:p-8 grid grid-cols-1 md:grid-cols-12 gap-8">
        {/* Column Left: Routine & Products */}
        <div className="md:col-span-8 space-y-8">
          {/* Active Box Card */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-zinc-150 shadow-xs">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
              <div>
                <span className="text-[10px] font-bold tracking-widest text-brand-magenta bg-brand-magenta/5 border border-brand-magenta/10 px-2.5 py-1 rounded-full uppercase mb-2 inline-block">
                  Siguiente Envío: En Preparación
                </span>
                <h1 className="text-xl sm:text-2xl font-bold text-zinc-900">
                  Tu Caja Trimestral Inteligente
                </h1>
              </div>
              <span className="text-xs font-bold text-emerald-500 bg-emerald-50 border border-emerald-100 px-3 py-1.5 rounded-xl uppercase shrink-0">
                Suscripción Activa
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 bg-brand-gray-light rounded-2xl p-5 border border-zinc-100">
              <div className="flex flex-col gap-1">
                <span className="text-[10px] font-bold tracking-wider text-zinc-400 uppercase">
                  Productos en tu caja
                </span>
                <span className="text-sm font-semibold text-zinc-800">
                  • 1x Suero de Hidratación AI-Custom (50ml)
                </span>
                <span className="text-sm font-semibold text-zinc-800">
                  • 1x Limpiador Equilibrante Aloe (120ml)
                </span>
                <span className="text-sm font-semibold text-zinc-800">
                  • 1x Regalo: Cepillo Sónico Facial
                </span>
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-[10px] font-bold tracking-wider text-zinc-400 uppercase">
                  Entrega estimada
                </span>
                <span className="text-sm font-bold text-zinc-850 text-zinc-800">
                  25 de Mayo, 2026
                </span>
                <span className="text-xs font-medium text-zinc-400">
                  Envío prioritario express vía DHL.
                </span>
              </div>
            </div>
          </div>

          {/* AI Skin Routine Card */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-zinc-150 shadow-xs">
            <h2 className="text-lg font-bold text-zinc-900 mb-5">
              Tu Rutina Personalizada de Piel
            </h2>
            <div className="space-y-4">
              {/* Routine Step 1 */}
              <div className="flex items-start gap-4 p-4 hover:bg-brand-gray-light rounded-2xl border border-transparent hover:border-zinc-150 transition-all duration-300">
                <span className="w-8 h-8 rounded-full bg-brand-teal/10 text-brand-dark-teal flex items-center justify-center font-bold text-sm shrink-0">
                  1
                </span>
                <div>
                  <h4 className="text-sm font-bold text-zinc-800">Mañana: Limpieza & Suero</h4>
                  <p className="text-xs text-zinc-500 mt-1 leading-relaxed">
                    Aplica el limpiador equilibrante sobre rostro húmedo. Enjuaga con agua tibia y aplica 3 gotas de tu Suero AI-Custom antes del protector solar.
                  </p>
                </div>
              </div>

              {/* Routine Step 2 */}
              <div className="flex items-start gap-4 p-4 hover:bg-brand-gray-light rounded-2xl border border-transparent hover:border-zinc-150 transition-all duration-300">
                <span className="w-8 h-8 rounded-full bg-brand-teal/10 text-brand-dark-teal flex items-center justify-center font-bold text-sm shrink-0">
                  2
                </span>
                <div>
                  <h4 className="text-sm font-bold text-zinc-800">Noche: Exfoliación Sónica</h4>
                  <p className="text-xs text-zinc-500 mt-1 leading-relaxed">
                    Usa el Cepillo de Limpieza Sónico de regalo durante 1 minuto con tu limpiador para eliminar impurezas profundas acumuladas durante el día.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Column Right: Subscription Info & Settings */}
        <div className="md:col-span-4 space-y-8">
          {/* Payment Card */}
          <div className="bg-white rounded-3xl p-6 border border-zinc-150 shadow-xs">
            <h3 className="text-sm font-bold text-zinc-900 mb-4">Detalles del Plan</h3>
            <div className="space-y-3.5 mb-6 text-xs">
              <div className="flex justify-between font-medium">
                <span className="text-zinc-500">Plan actual:</span>
                <span className="font-bold text-zinc-800">Trimestral Premium</span>
              </div>
              <div className="flex justify-between font-medium">
                <span className="text-zinc-500">Facturación:</span>
                <span className="font-bold text-zinc-800">$53.000 COP /mes</span>
              </div>
              <div className="flex justify-between font-medium">
                <span className="text-zinc-500">Método de pago:</span>
                <span className="font-bold text-zinc-800">Visa terminada en 4242</span>
              </div>
            </div>
            <button className="w-full py-3 bg-brand-gray-light hover:bg-zinc-100 text-zinc-700 border border-zinc-200 text-xs font-semibold rounded-xl transition-all duration-300">
              Gestionar Suscripción
            </button>
          </div>

          {/* Quick Help Card */}
          <div className="bg-gradient-to-br from-brand-teal/20 to-teal-100/10 rounded-3xl p-6 border border-brand-teal/20 shadow-xs text-center flex flex-col items-center">
            <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center text-brand-dark-teal mb-4 shadow-2xs">
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <h4 className="text-xs font-bold text-brand-dark-teal mb-2">¿Necesitas ayuda?</h4>
            <p className="text-[10px] text-brand-dark-teal/70 leading-relaxed mb-4">
              ¿Tu tipo de piel ha cambiado o tienes dudas sobre tu rutina? Chatea con tu dermatólogo asignado.
            </p>
            <Link
              href="/contact"
              className="px-4 py-2 bg-brand-dark-teal hover:bg-brand-dark-hover text-white text-[10px] font-bold rounded-lg transition-all duration-300"
            >
              Contactar Soporte
            </Link>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="h-14 bg-white border-t border-zinc-100 flex items-center justify-center px-6 mt-12">
        <span className="text-[10px] font-medium text-zinc-400">
          Auraskin © {new Date().getFullYear()} • Dermatológicamente aprobado.
        </span>
      </footer>
    </div>
  );
}
