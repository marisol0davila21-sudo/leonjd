'use client'

import Image from 'next/image'
import { ArrowUp, ShieldCheck } from 'lucide-react'

const TikTok = ({ size = 20, ...props }: any) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
  </svg>
)

const LINKS = [
  { label: 'Servicios',   href: '#servicios' },
  { label: 'Proceso',     href: '#proceso' },
  { label: 'Galería',     href: '#galeria' },
  { label: 'Testimonios', href: '#testimonios' },
  { label: 'Contacto',    href: '#contacto' },
]

const SOCIAL = [
  { icon: TikTok, href: 'https://www.tiktok.com/@impresionesgraficasldj', label: 'TikTok' },
]

export default function Footer() {
  return (
    <footer className="relative bg-[#fdfaf5] dark:bg-[#050505] border-t border-[#e8c96d40] transition-colors duration-500 bg-mesh">
      {/* Centered Scroll to Top Button (Joinnus Style) */}
      <div className="relative -mt-6 flex w-full items-center justify-center z-10">
        <button 
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="relative box-border inline-flex select-none appearance-none items-center justify-center whitespace-nowrap font-semibold subpixel-antialiased outline-none ease-in-out rounded-full cursor-pointer h-12 w-12 min-w-12 border-none ring-0 bg-[#c9a84c] text-white hover:bg-white hover:text-[#c9a84c] dark:hover:bg-[#1a1a1a] dark:hover:text-[#e8c96d] focus:ring-2 focus:ring-[#c9a84c] focus:ring-offset-2 focus:ring-offset-white dark:focus:ring-offset-[#050505] active:ring-8 active:ring-[#c9a84c30] active:ring-offset-0 transition-all duration-300 group"
          aria-label="Volver arriba"
          type="button"
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            fill="none" 
            viewBox="0 0 24 24" 
            strokeWidth="2" 
            stroke="currentColor" 
            className="h-5 w-5 group-hover:-translate-y-1 transition-transform"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 10.5 12 3m0 0 7.5 7.5M12 3v18" />
          </svg>
        </button>
      </div>

      <div className="container-main py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <div className="mb-6 flex items-center gap-3">
              <div className="relative w-12 h-12 overflow-hidden rounded-xl border border-[#e8c96d20]">
                <Image
                  src="/images/logo.webp"
                  alt="Logo León de Judá"
                  fill
                  sizes="48px"
                  className="object-contain"
                />
              </div>
              <div className="flex flex-col leading-tight">
                <p className="text-display text-xl font-bold text-[var(--text-main)]">
                  León de Judá
                </p>
                <p className="text-body text-[10px] text-[#9a7824] tracking-[0.2em] uppercase font-bold">
                  Impresiones Gráficas
                </p>
              </div>
            </div>
            <p className="text-body text-sm text-[var(--text-muted)] leading-relaxed max-w-xs">
              Especializados en impresiones personalizadas, recuerdos para
              eventos y fotografía fine art con acabado de autor.
            </p>
          </div>

          {/* Nav links */}
          <div className="flex flex-col items-center md:items-start">
            <p className="text-body text-[10px] font-bold uppercase tracking-[0.3em] text-[#9a7824] mb-6">
              Navegación
            </p>
            <nav className="flex flex-col gap-3 text-center md:text-left">
              {LINKS.map((l) => (
                <a
                  key={l.label}
                  href={l.href}
                  className="text-body text-sm text-[var(--text-muted)] hover:text-[#c9a84c] transition-colors duration-200"
                >
                  {l.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Social & Contact */}
          <div className="flex flex-col items-center md:items-start">
            <p className="text-body text-[10px] font-bold uppercase tracking-[0.3em] text-[#9a7824] mb-6">
              Síguenos
            </p>
            <div className="flex gap-4 mb-8">
              {SOCIAL.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="w-10 h-10 rounded-xl flex items-center justify-center bg-white dark:bg-[#111111] text-[var(--text-dim)] border border-[#e8c96d10] hover:border-[#e8c96d] hover:text-[#c9a84c] transition-all"
                >
                  <s.icon size={18} />
                </a>
              ))}
            </div>
            
            <div className="text-center md:text-left">
              <p className="text-body text-[10px] text-[#9a7824] uppercase tracking-widest font-bold mb-2">
                WhatsApp Directo
              </p>
              <a
                href="https://wa.me/51906455032"
                target="_blank"
                rel="noopener noreferrer"
                className="text-display text-lg text-[var(--text-main)] hover:text-[#c9a84c] transition-colors font-bold"
              >
                +51 906 455 032
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-[#e8c96d10] flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-body text-xs text-[var(--text-dim)]" suppressHydrationWarning>
            © {new Date().getFullYear()} León de Judá. Todos los derechos reservados.
          </p>
          
          <div className="flex items-center gap-6">
            <a href="/politica-privacidad" className="text-body text-xs text-[var(--text-dim)] hover:text-[#c9a84c] flex items-center gap-2 transition-colors">
              <ShieldCheck size={14} />
              Privacidad
            </a>
            <div className="h-4 w-[1px] bg-[#e8c96d20]" />
            <p className="text-body text-[10px] text-[#9a7824] font-bold tracking-widest uppercase">
              Lima, Perú
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
