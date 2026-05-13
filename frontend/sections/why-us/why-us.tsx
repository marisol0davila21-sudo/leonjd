'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { CheckCircle2, Sparkles, Clock, Award, Users, ShieldCheck, History } from 'lucide-react'
import Image from 'next/image'

const GALLERY_IMAGES = [
  { src: '/images/hombre/cumpleanosh.webp', alt: 'Cumpleaños para Hombre' },
  { src: '/images/mujer/cumpleanosm.webp', alt: 'Cumpleaños para Mujer' },
  { src: '/images/hombre/bautizoparah.webp', alt: 'Bautizo para Niño' },
  { src: '/images/mujer/bautizom.webp', alt: 'Bautizo para Niña' },
  { src: '/images/hombre/babyshowerh.webp', alt: 'Babyshower para niño' },
  { src: '/images/mujer/babyshowerm.webp', alt: 'Babyshower Especial' },
  { src: '/images/hombre/matrimonio.webp', alt: 'Recuerdos de Matrimonio' },
]

function StackedCarousel() {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % GALLERY_IMAGES.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  return (
    <div className="relative w-full h-[440px] flex items-center justify-center">
      {/* Top Right: Experience Badge */}
      <motion.div 
        initial={{ opacity: 0, x: 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        className="absolute -top-4 -right-4 lg:-top-6 lg:-right-6 z-40"
      >
        <div className="bg-white/95 dark:bg-[#1a1c23]/95 backdrop-blur-md px-6 py-4 rounded-3xl border-l-4 border-[#c9a84c] border border-[#ede0c4] dark:border-white/5 transition-all duration-300">
          <p className="text-[10px] font-bold text-[#9a7824] dark:text-[#c9a84c] uppercase tracking-widest mb-1">Experiencia</p>
          <div className="flex items-center gap-2">
            <History size={18} className="text-[#c9a84c]" />
            <p className="text-2xl font-bold text-[var(--text-main)] italic">
              +4 <span className="text-sm font-normal opacity-70 italic text-[#9a7824] dark:text-[#c9a84c]">años</span>
            </p>
          </div>
        </div>
      </motion.div>

      {/* Bottom Left: Confidence Badge */}
      <motion.div 
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        className="absolute -bottom-10 -left-4 lg:-bottom-12 lg:-left-6 z-40"
      >
        <div className="bg-white/95 dark:bg-[#1a1c23]/95 backdrop-blur-md px-6 py-4 rounded-3xl border-r-4 border-[#c9a84c] border border-[#ede0c4] dark:border-white/5 text-right transition-all duration-300">
          <p className="text-[10px] font-bold text-[#9a7824] dark:text-[#c9a84c] uppercase tracking-widest mb-1">Confianza</p>
          <div className="flex items-center gap-2 justify-end">
            <Users size={18} className="text-[#c9a84c]" />
            <p className="text-2xl font-bold text-[var(--text-main)] italic">
              +500 <span className="text-sm font-normal opacity-70 italic text-[#9a7824] dark:text-[#c9a84c]">clientes</span>
            </p>
          </div>
        </div>
      </motion.div>

      <div className="relative w-full h-full flex items-center justify-center">
        {GALLERY_IMAGES.map((img, i) => {
          const total = GALLERY_IMAGES.length
          let dist = i - index
          if (dist > total / 2) dist -= total
          if (dist < -total / 2) dist += total
          
          const isVisible = Math.abs(dist) <= 1
          const pos = dist === 0 ? 'center' : dist === 1 ? 'right' : dist === -1 ? 'left' : 'hidden'

          return (
            <motion.div
              key={img.src}
              initial={false}
              animate={{
                x: pos === 'center' ? 0 : pos === 'right' ? 140 : pos === 'left' ? -140 : (dist > 0 ? 300 : -300),
                scale: pos === 'center' ? 1 : 0.82,
                rotate: pos === 'center' ? 0 : pos === 'right' ? 8 : pos === 'left' ? -8 : 0,
                zIndex: pos === 'center' ? 30 : pos === 'left' ? 20 : 10,
                opacity: pos === 'center' ? 1 : (pos === 'hidden' ? 0 : 0.6),
                visibility: isVisible || Math.abs(dist) < 2 ? 'visible' : 'hidden',
              }}
              transition={{ 
                duration: 1.5, 
                ease: [0.32, 0.72, 0, 1] 
              }}
              className="absolute w-[180px] h-[260px] md:w-[220px] md:h-[320px] rounded-[40px] overflow-hidden border-[6px] border-white dark:border-stone-800 shadow-2xl"
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                unoptimized
                sizes="(max-width: 768px) 180px, 220px"
                className="object-cover"
                priority={pos === 'center'}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
            </motion.div>
          )
        })}
      </div>
    </div>
  )
}

export default function WhyUs() {
  return (
    <section
      id="galeria"
      className="section-pad overflow-hidden scroll-mt-12"
      style={{ background: 'var(--bg-main)' }}
    >
      <div className="container-main">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* Left: Stacked Carousel */}
          <motion.div
            initial={{ opacity: 0, x: -32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative order-2 lg:order-1 px-8 lg:px-0"
          >
            <StackedCarousel />
          </motion.div>

          {/* Right: Content & Hover Reasons */}
          <div className="order-1 lg:order-2">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-body text-xs font-semibold tracking-widest uppercase text-[#9a7824] mb-3 block">
                Nuestra Galería
              </span>
              <h2 className="text-display text-4xl md:text-5xl font-bold text-[var(--text-main)] mb-6 leading-tight">
                Detalles que cuentan <br />
                <span className="gold-gradient italic font-serif lowercase">historias</span>
              </h2>
              <p className="text-body text-base text-[var(--text-muted)] leading-relaxed mb-12 max-w-lg">
                Explora nuestra selección donde la elegancia y el detalle se unen para crear recuerdos inolvidables en cada ocasión.
              </p>
            </motion.div>

            {/* Hover-reveal Reasons Design */}
            <div className="flex flex-wrap md:flex-nowrap items-start gap-12 md:gap-16 border-t border-[var(--border-main)] pt-10">
              {/* Quality */}
              <div className="flex flex-col gap-2 group cursor-default">
                <div className="flex items-center gap-3">
                  {/* Hover background: Gold in both, but icon color varies for visibility */}
                  <div className="w-8 h-8 rounded-full bg-[#c9a84c15] dark:bg-[#c9a84c10] flex items-center justify-center transition-all duration-300 group-hover:bg-gold-gradient shadow-sm group-hover:shadow-md">
                    <ShieldCheck size={16} className="text-[#c9a84c] group-hover:text-[#5c4b1a] dark:group-hover:text-white transition-colors" />
                  </div>
                  <span className="text-body text-sm font-bold text-[var(--text-main)] transition-colors group-hover:text-[#9a7824] dark:group-hover:text-[#c9a84c]">Calidad</span>
                </div>
                <p className="text-[11px] text-[var(--text-dim)] pl-1 leading-relaxed opacity-0 translate-y-2 transition-all duration-500 group-hover:opacity-100 group-hover:translate-y-0 max-w-[120px]">
                  Materiales y acabados duraderos.
                </p>
              </div>
              
              {/* Attention */}
              <div className="flex flex-col gap-2 group cursor-default">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-[#c9a84c15] dark:bg-[#c9a84c10] flex items-center justify-center transition-all duration-300 group-hover:bg-gold-gradient shadow-sm group-hover:shadow-md">
                    <Clock size={16} className="text-[#c9a84c] group-hover:text-[#5c4b1a] dark:group-hover:text-white transition-colors" />
                  </div>
                  <span className="text-body text-sm font-bold text-[var(--text-main)] transition-colors group-hover:text-[#9a7824] dark:group-hover:text-[#c9a84c]">Atención</span>
                </div>
                <p className="text-[11px] text-[var(--text-dim)] pl-1 leading-relaxed opacity-0 translate-y-2 transition-all duration-500 group-hover:opacity-100 group-hover:translate-y-0 max-w-[120px]">
                  Asesoría constante en tu idea.
                </p>
              </div>

              {/* Design */}
              <div className="flex flex-col gap-2 group cursor-default">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-[#c9a84c15] dark:bg-[#c9a84c10] flex items-center justify-center transition-all duration-300 group-hover:bg-gold-gradient shadow-sm group-hover:shadow-md">
                    <Sparkles size={16} className="text-[#c9a84c] group-hover:text-[#5c4b1a] dark:group-hover:text-white transition-colors" />
                  </div>
                  <span className="text-body text-sm font-bold text-[var(--text-main)] transition-colors group-hover:text-[#9a7824] dark:group-hover:text-[#c9a84c]">Diseño</span>
                </div>
                <p className="text-[11px] text-[var(--text-dim)] pl-1 leading-relaxed opacity-0 translate-y-2 transition-all duration-500 group-hover:opacity-100 group-hover:translate-y-0 max-w-[120px]">
                  Piezas únicas y personalizadas.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
