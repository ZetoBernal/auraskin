"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/90 backdrop-blur-md shadow-xs border-b border-zinc-100"
          : "bg-white border-b border-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
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

        {/* Desktop Links */}
        <nav className="hidden md:flex items-center gap-8">
          <a
            href="#como-funciona"
            className="text-sm font-medium text-zinc-600 hover:text-brand-dark-teal transition-colors"
          >
            Cómo funciona
          </a>
          <a
            href="#planes"
            className="text-sm font-medium text-zinc-600 hover:text-brand-dark-teal transition-colors"
          >
            Planes
          </a>
          <a
            href="#tienda"
            className="text-sm font-medium text-zinc-600 hover:text-brand-dark-teal transition-colors"
          >
            Tienda
          </a>
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:block">
          <Link
            href="/dashboard"
            className="inline-flex items-center justify-center px-4 py-2 text-xs font-semibold text-white bg-brand-dark-teal hover:bg-brand-dark-hover rounded-lg transition-all duration-300 shadow-sm"
          >
            Mi Cuenta
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-1.5 rounded-lg text-zinc-600 hover:bg-zinc-100 transition-colors"
          aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
        >
          {isOpen ? (
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu Drawer */}
      {isOpen && (
        <div className="md:hidden absolute top-16 left-0 w-full bg-white border-b border-zinc-100 py-6 px-6 flex flex-col gap-5 shadow-lg animate-in fade-in slide-in-from-top-5 duration-200">
          <a
            href="#como-funciona"
            onClick={() => setIsOpen(false)}
            className="text-base font-medium text-zinc-700 hover:text-brand-dark-teal py-1"
          >
            Cómo funciona
          </a>
          <a
            href="#planes"
            onClick={() => setIsOpen(false)}
            className="text-base font-medium text-zinc-700 hover:text-brand-dark-teal py-1"
          >
            Planes
          </a>
          <a
            href="#tienda"
            onClick={() => setIsOpen(false)}
            className="text-base font-medium text-zinc-700 hover:text-brand-dark-teal py-1"
          >
            Tienda
          </a>
          <hr className="border-zinc-100 my-1" />
          <Link
            href="/dashboard"
            onClick={() => setIsOpen(false)}
            className="w-full inline-flex items-center justify-center py-3 text-sm font-semibold text-white bg-brand-dark-teal hover:bg-brand-dark-hover rounded-xl transition-colors shadow-sm"
          >
            Mi Cuenta
          </Link>
        </div>
      )}
    </header>
  );
}
