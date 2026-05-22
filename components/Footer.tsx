"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-white border-t border-zinc-100 py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8">
        {/* Left Brand Column */}
        <div className="md:col-span-4 flex flex-col items-start gap-4">
          <Link href="/" className="flex items-center gap-2.5 group">
            <div className="w-8 h-8 rounded-md bg-brand-teal flex items-center justify-center transition-transform duration-300 group-hover:scale-105 shadow-xs">
              <Image
                src="/images/logo-droplet.png"
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
          
          <div className="mt-2 text-xs text-zinc-400 space-y-1">
            <p>© {new Date().getFullYear()} Auraskin.</p>
            <p className="font-medium text-zinc-500">Dermatológica y capilarmente probado.</p>
          </div>
        </div>

        {/* Right Links Columns */}
        <div className="md:col-span-8 grid grid-cols-2 sm:grid-cols-3 gap-8 sm:gap-6">
          {/* Column 1: Compañía */}
          <div className="flex flex-col gap-4">
            <h4 className="text-xs font-bold text-zinc-800 uppercase tracking-widest">
              Compañía
            </h4>
            <ul className="flex flex-col gap-2.5">
              <li>
                <Link
                  href="/about"
                  className="text-xs font-medium text-zinc-500 hover:text-brand-dark-teal transition-colors"
                >
                  Sobre nosotros
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy"
                  className="text-xs font-medium text-zinc-500 hover:text-brand-dark-teal transition-colors"
                >
                  Privacidad
                </Link>
              </li>
              <li>
                <Link
                  href="/terms"
                  className="text-xs font-medium text-zinc-500 hover:text-brand-dark-teal transition-colors"
                >
                  Términos
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 2: Soporte */}
          <div className="flex flex-col gap-4">
            <h4 className="text-xs font-bold text-zinc-800 uppercase tracking-widest">
              Soporte
            </h4>
            <ul className="flex flex-col gap-2.5">
              <li>
                <Link
                  href="/contact"
                  className="text-xs font-medium text-zinc-500 hover:text-brand-dark-teal transition-colors"
                >
                  Contacto
                </Link>
              </li>
              <li>
                <Link
                  href="/faq"
                  className="text-xs font-medium text-zinc-500 hover:text-brand-dark-teal transition-colors"
                >
                  Preguntas Frecuentes
                </Link>
              </li>
              <li>
                <Link
                  href="/returns"
                  className="text-xs font-medium text-zinc-500 hover:text-brand-dark-teal transition-colors"
                >
                  Devoluciones
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Social */}
          <div className="flex flex-col gap-4 col-span-2 sm:col-span-1">
            <h4 className="text-xs font-bold text-zinc-800 uppercase tracking-widest">
              Social
            </h4>
            <ul className="flex flex-col gap-2.5">
              <li>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-medium text-zinc-500 hover:text-brand-dark-teal transition-colors"
                >
                  Instagram
                </a>
              </li>
              <li>
                <a
                  href="https://tiktok.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-medium text-zinc-500 hover:text-brand-dark-teal transition-colors"
                >
                  TikTok
                </a>
              </li>
              <li>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-medium text-zinc-500 hover:text-brand-dark-teal transition-colors"
                >
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
