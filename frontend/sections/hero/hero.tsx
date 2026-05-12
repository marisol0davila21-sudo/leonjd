'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Sparkles } from 'lucide-react'
import Image from 'next/image'

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative flex items-center pt-32 pb-16 px-4 overflow-hidden bg-[var(--bg-main)] transition-colors duration-300"
    >
      <div className="container-main w-full">
        {/* Main Hero Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative overflow-hidden rounded-[60px] border border-[var(--border-main)] bg-[var(--bg-card)] min-h-[400px] lg:min-h-[480px] flex flex-col justify-center transition-colors duration-300"
        >
          {/* Background Images */}
          <div className="absolute inset-0 z-0">
              <div className="hidden md:block dark:hidden absolute inset-0">
                <Image src="/images/Hero/Hero-web-light.webp" alt="Background" fill sizes="100vw" className="object-cover object-left" priority />
              </div>
              <div className="hidden md:dark:block absolute inset-0">
                <Image src="/images/Hero/Hero-web-dark.webp" alt="Background" fill sizes="100vw" className="object-cover object-left" priority />
              </div>
              <div className="md:hidden dark:hidden absolute inset-0">
                <Image src="/images/Hero/Hero-mobile-light.webp" alt="Background" fill sizes="100vw" className="object-cover object-top" priority />
              </div>
              <div className="hidden dark:block md:dark:hidden absolute inset-0">
                <Image src="/images/Hero/Hero-mobile-dark.webp" alt="Background" fill sizes="100vw" className="object-cover object-top" priority />
              </div>
             <div className="absolute inset-0 bg-white/5 dark:bg-black/20" />
          </div>

          <div className="relative z-10 h-full w-full flex flex-col md:flex-row">
            {/* Left Content Side */}
            <div className="p-8 md:p-12 lg:p-20 flex flex-col justify-center h-full max-w-full md:max-w-[60%]">
              <div className="inline-flex items-center gap-2 text-[#9a7824] bg-[#c9a84c10] px-4 py-2 rounded-full mb-8 w-fit backdrop-blur-sm border border-[#c9a84c20]">
                <Sparkles size={14} className="text-[#c9a84c]" />
                <span className="text-[10px] font-bold tracking-[0.2em] uppercase">Artesanía de Calidad</span>
              </div>

              <div className="mb-6">
                <h1 className="text-display text-3xl md:text-5xl lg:text-6xl font-bold text-[var(--text-main)] leading-[1.15] tracking-tight transition-colors duration-300">
                  Impresiones <br />
                  <span className="gold-gradient italic font-serif lowercase">que dejan</span> huella
                </h1>
              </div>

              <p className="text-body text-base md:text-lg text-[var(--text-muted)] max-w-md mb-10 leading-relaxed transition-colors duration-300">
                Personalizamos cada detalle para que tus recuerdos sean inolvidables.
              </p>

              <div className="flex flex-wrap gap-4 items-center">
                <a
                  href="https://wa.me/51906455032?text=Hola%2C%20me%20interesa%20un%20pedido"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#1a1a1a] dark:bg-[#e8c96d] text-[#e8c96d] dark:text-[#111111] border-2 border-[#e8c96d] px-8 py-4 rounded-full font-bold text-sm hover:bg-[#e8c96d] hover:text-black dark:hover:bg-white active:scale-95 transition-all flex items-center gap-2.5 group"
                >
                  Cotizar Ahora
                  <ArrowRight size={18} strokeWidth={2.5} className="group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
