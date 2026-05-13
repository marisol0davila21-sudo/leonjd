'use client'

import { useState, useEffect } from 'react'
import { Menu, X, Phone, Sun, Moon, ChevronLeft } from 'lucide-react'
import Image from 'next/image'

const NAV_LINKS = [
  { label: 'Inicio',     href: '#inicio' },
  { label: 'Servicios',  href: '/#servicios' },
  { label: 'Proceso',    href: '/#proceso' },
  { label: 'Galería',    href: '/#galeria' },
  { label: 'Testimonios',href: '/#testimonios' },
  { label: 'Contacto',   href: '/#contacto' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [isDark, setIsDark] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    
    // Sync state with the actual class present on the document
    setIsDark(document.documentElement.classList.contains('dark'))
    
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const toggleTheme = () => {
    const newTheme = !isDark
    setIsDark(newTheme)
    if (newTheme) {
      document.documentElement.classList.add('dark')
      localStorage.setItem('theme', 'dark')
    } else {
      document.documentElement.classList.remove('dark')
      localStorage.setItem('theme', 'light')
    }
  }

  return (
    <header className="fixed top-0 left-0 w-full z-50 px-4 py-6 transition-all duration-300">
      <nav 
        className={`container-main mx-auto h-16 md:h-18 flex items-center justify-between px-6 md:px-10 rounded-full transition-all duration-300 border ${
          scrolled 
            ? 'bg-white/80 dark:bg-black/80 backdrop-blur-lg border-[#ede0c4] dark:border-white/10' 
            : 'bg-white/90 dark:bg-black/90 border-[#ede0c4] dark:border-white/10'
        }`}
      >
        {/* Logo */}
        <a href="/" className="flex items-center gap-3 group shrink-0">
          <div className="relative w-10 h-10 overflow-hidden rounded-full border-2 border-[#e8c96d] group-hover:scale-110 transition-transform duration-300">
            <Image 
              src="/images/logo.webp" 
              alt="León de Judá Logo" 
              fill 
              sizes="40px"
              className="object-cover"
            />
          </div>
          <div className="flex flex-col">
            <span className="text-display text-lg font-bold text-[var(--text-main)] leading-none">León de Judá</span>
            <span className="text-body text-[8px] font-bold tracking-[0.2em] uppercase text-[var(--text-dim)]">Impresiones Gráficas</span>
          </div>
        </a>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-body text-sm font-semibold text-[var(--text-muted)] hover:text-[#c9a84c] transition-colors relative group"
            >
              {link.label}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#c9a84c] transition-all group-hover:w-full" />
            </a>
          ))}
        </div>

        {/* Right Actions */}
        <div className="flex items-center gap-3">
          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className={`w-10 h-10 flex items-center justify-center rounded-full transition-all duration-300 ${
              isDark 
                ? 'bg-[#e8c96d] text-[#111111] hover:bg-white' 
                : 'bg-stone-200 text-stone-900 hover:bg-[#c9a84c] hover:text-white'
            }`}
            aria-label="Cambiar tema"
          >
            {isDark ? (
              <Sun size={18} strokeWidth={2.5} />
            ) : (
              <Moon size={18} strokeWidth={2.5} />
            )}
          </button>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center">
            <a
              href="https://wa.me/51906455032"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#1a1a1a] dark:bg-[#e8c96d] text-[#e8c96d] dark:text-[#111111] border-2 border-[#e8c96d] text-body text-sm font-bold px-6 py-2 rounded-full hover:bg-[#e8c96d] hover:text-black dark:hover:bg-white active:scale-95 transition-all duration-300"
            >
              Contáctanos
            </a>
          </div>

          {/* Mobile Menu Trigger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className={`lg:hidden relative w-12 h-12 flex items-center justify-center rounded-full transition-all duration-500 group ${
              menuOpen 
                ? 'bg-[#1a1a1a] dark:bg-[#e8c96d] text-[#e8c96d] dark:text-black' 
                : 'bg-white/80 dark:bg-black/20 text-[var(--text-main)] backdrop-blur-md border border-[#ede0c4] dark:border-white/10'
            }`}
          >
            <div className="relative z-10">
              {menuOpen ? <X size={20} /> : <Menu size={20} />}
            </div>
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div 
        className={`lg:hidden absolute top-24 right-4 w-[280px] bg-white/95 dark:bg-[#0c0c0c]/98 backdrop-blur-2xl rounded-[32px] border border-[#ede0c4] dark:border-white/10 transition-all duration-500 shadow-2xl z-[60] ${
          menuOpen ? 'opacity-100 translate-y-0 visible' : 'opacity-0 -translate-y-4 invisible pointer-events-none'
        }`}
      >
        <div className="p-8 flex flex-col gap-1">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="group flex items-center justify-between py-3.5 border-b border-[#ede0c430] dark:border-white/5 last:border-none"
            >
              <span className="text-body text-base font-bold text-[var(--text-main)] group-hover:text-[#c9a84c] transition-colors relative">
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#c9a84c] transition-all group-hover:w-full" />
              </span>
            </a>
          ))}
          
          <div className="mt-6 flex justify-center">
            <a
              href="https://wa.me/51906455032"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#1a1a1a] dark:bg-[#e8c96d] text-[#e8c96d] dark:text-[#111111] border-2 border-[#e8c96d] text-body text-sm font-bold px-8 py-2.5 rounded-full hover:bg-[#e8c96d] hover:text-black dark:hover:bg-white dark:hover:text-black active:scale-95 transition-all duration-300"
            >
              Contáctanos
            </a>
          </div>
        </div>
      </div>
    </header>
  )
}
