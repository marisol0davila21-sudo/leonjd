'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { MessageCircle, Palette, Sparkles, Truck } from 'lucide-react'

const STEPS = [
  {
    icon: MessageCircle,
    step: '01',
    title: 'Cuéntanos tu idea',
    desc: 'Escríbenos por WhatsApp. Escuchamos tus necesidades y te orientamos sin compromiso.',
  },
  {
    icon: Palette,
    step: '02',
    title: 'Diseñamos a tu medida',
    desc: 'Creamos una propuesta visual personalizada. Ajustamos cada detalle hasta que sea perfecto.',
  },
  {
    icon: Sparkles,
    step: '03',
    title: 'Calidad Artesanal',
    desc: 'Cuidamos cada pieza con materiales especializados para un resultado impecable y duradero.',
  },
  {
    icon: Truck,
    step: '04',
    title: 'Envío a todo el país',
    desc: 'Empaque cuidadoso y envío garantizado a cualquier rincón del Perú.',
  },
]

export default function Process() {
  const [activeStep, setActiveStep] = useState(0)
  const [glowIndex, setGlowIndex] = useState(0)
  const [cycleKey, setCycleKey] = useState(0)
  const positions = ['0%', '33.33%', '66.66%', '100%']

  useEffect(() => {
    const timer = setTimeout(() => {
      const next = (activeStep + 1) % STEPS.length

      if (next === 0) {
        // Al llegar al final, reseteamos el ciclo de forma instantánea
        setCycleKey(prev => prev + 1)
        setGlowIndex(0)
        setActiveStep(0)
      } else {
        // El punto viaja y el avance lo sigue
        setGlowIndex(next)
        setTimeout(() => {
          setActiveStep(next)
        }, 1400)
      }
    }, 2400)

    return () => clearTimeout(timer)
  }, [activeStep])

  return (
    <section
      id="proceso"
      className="section-pad relative overflow-hidden bg-[#f5efe4] dark:bg-[#050505] transition-colors duration-500"
    >
      <div className="container-main relative z-10">
        <div className="max-w-2xl mx-auto text-center mb-20 md:mb-28">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-body text-xs font-semibold tracking-[0.3em] uppercase text-[#9a7824] mb-4 block"
          >
            Cómo trabajamos
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-display text-4xl md:text-5xl font-bold text-[var(--text-main)] mb-6"
          >
            Procesos <span className="gold-gradient italic font-serif">visibles</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-body text-base text-[var(--text-muted)] leading-relaxed max-w-xl mx-auto"
          >
            Diseñamos cada detalle contigo, desde la idea inicial hasta la entrega final.
          </motion.p>
        </div>

        <div className="relative">
          {/* Continuous Glow & Progress Line - key={cycleKey} ensures instant reset */}
          <div className="hidden lg:block absolute top-[48px] left-[12%] right-[12%] z-0" key={cycleKey}>
            {/* Base Line */}
            <div className="relative h-[2px] bg-[#d7c7aa]/40 dark:bg-[#2a2a2a]">
              
              {/* Filling Progress Line */}
              <motion.div
                initial={{ width: positions[activeStep] }}
                animate={{
                  width: positions[glowIndex],
                }}
                transition={{
                  duration: 1.4,
                  ease: [0.4, 0, 0.2, 1],
                }}
                className="absolute top-0 left-0 h-full bg-[#c9a84c] dark:bg-[#e8c96d] shadow-[0_0_10px_rgba(201,168,76,0.3)]"
              />

              {/* Glow Point */}
              <motion.div
                initial={{ left: positions[activeStep] }}
                animate={{
                  left: positions[glowIndex],
                }}
                transition={{
                  duration: 1.4,
                  ease: [0.4, 0, 0.2, 1],
                }}
                className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-4 h-4 z-10"
              >
                <div className="w-full h-full rounded-full bg-[#c9a84c] dark:bg-[#e8c96d] shadow-[0_0_20px_#c9a84c] border-2 border-white dark:border-[#050505]" />
              </motion.div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-20">
            {STEPS.map((item, index) => {
              const isActive = activeStep === index

              return (
                <div
                  key={item.step}
                  onClick={() => {
                    setGlowIndex(index)
                    setActiveStep(index)
                    setCycleKey(prev => prev + 1) // Reset visual logic on manual click
                  }}
                  className="group cursor-pointer"
                >
                  <div className="flex flex-col items-center text-center">
                    <div className="relative mb-8">
                      {/* Background Shield to hide the line */}
                      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] bg-[#f5efe4] dark:bg-[#050505] rounded-full z-10 transition-colors duration-500" />
                      
                      <motion.div
                        animate={{
                          borderColor: isActive ? '#c9a84c' : 'rgba(201, 168, 76, 0)',
                          scale: isActive ? 1.1 : 1,
                          boxShadow: isActive ? '0 0 0 8px rgba(201,168,76,0.1)' : '0 0 0 0px rgba(201, 168, 76, 0)',
                        }}
                        className={`w-20 h-20 md:w-24 md:h-24 rounded-full flex items-center justify-center border z-20 relative transition-all duration-300 ${
                          isActive ? 'bg-white dark:bg-[#111111]' : 'bg-white/40 dark:bg-[#111111]/40'
                        } shadow-sm`}
                      >
                        <item.icon
                          size={isActive ? 32 : 28}
                          className={`transition-all duration-300 ${
                            isActive ? 'text-[#c9a84c]' : 'text-[var(--text-dim)]'
                          }`}
                        />
                        
                        <div className={`absolute -top-1 -right-1 w-7 h-7 rounded-full flex items-center justify-center text-[10px] font-bold transition-all duration-300 ${
                          isActive ? 'bg-[#c9a84c] text-white shadow-lg' : 'bg-white/80 dark:bg-[#1a1a1a] text-[var(--text-muted)] border border-[var(--border-main)]'
                        }`}>
                          {item.step}
                        </div>
                      </motion.div>
                    </div>

                    <motion.div
                      animate={{
                        opacity: isActive ? 1 : 0.72,
                        y: isActive ? -5 : 0,
                      }}
                    >
                      <h3 className={`text-body text-lg font-bold mb-3 transition-colors duration-300 ${
                        isActive ? 'text-[var(--text-main)]' : 'text-[var(--text-muted)]'
                      }`}>
                        {item.title}
                      </h3>
                      <p className={`text-body text-sm leading-relaxed transition-colors duration-300 px-4 ${
                        isActive ? 'text-[var(--text-muted)]' : 'text-[var(--text-dim)]'
                      }`}>
                        {item.desc}
                      </p>
                    </motion.div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
