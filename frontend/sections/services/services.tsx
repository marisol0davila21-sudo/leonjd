'use client'

import { motion, Variants } from 'framer-motion'
import {
  Printer,
  Gift,
  Compass,
  Sparkles,
  ArrowRight
} from 'lucide-react'

const SERVICES = [
  {
    id: '01',
    icon: Printer,
    title: 'Impresión UV',
    desc: 'Calidad premium en materiales rígidos como foam, celtex y PVC. Ideal para señalización y publicidad.',
    waMsg: '¡Hola León de Judá! Me interesa cotizar una impresión UV en materiales rígidos. ¿Podrían darme más información?',
  },
  {
    id: '02',
    icon: Compass,
    title: 'Imanes Turísticos',
    desc: 'Diseños decorativos y coleccionables únicos. El recuerdo perfecto para llevar un pedacito de cada lugar.',
    waMsg: '¡Hola! Me encantaron sus imanes turísticos. Me gustaría saber sobre precios y diseños personalizados.',
  },
  {
    id: '03',
    icon: Gift,
    title: 'Recuerdos para Eventos',
    desc: 'Detalles personalizados para bodas, bautizos y comuniones. Hacemos que cada momento sea inolvidable.',
    waMsg: '¡Hola! Estoy planeando un evento especial y busco recuerdos únicos. ¿Me podrían asesorar con sus opciones?',
  },
  {
    id: '04',
    icon: Sparkles,
    title: 'Detalles Elaborados',
    desc: 'Regalos artesanales hechos con dedicación. La opción ideal para sorprender en ocasiones especiales.',
    waMsg: '¡Hola! Busco un detalle elaborado y personalizado para una ocasión especial. ¿Qué opciones me recomiendan?',
  },
]

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      delay: i * 0.1,
      ease: [0.21, 0.45, 0.32, 1],
    },
  }),
}

export default function Services() {
  return (
    <section
      id="servicios"
      className="section-pad bg-[#fdfaf5] dark:bg-[#050505] transition-colors duration-500 scroll-mt-12"
    >
      <div className="container-main">
        {/* Centered Header */}
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-body text-[10px] font-bold tracking-[0.4em] uppercase text-[#9a7824] mb-3 block"
          >
            NuestrosServicios
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-display text-4xl md:text-5xl font-bold text-[var(--text-main)]"
          >
            Especializados en <span className="gold-gradient italic font-serif lowercase">acabados</span>
          </motion.h2>
        </div>

        {/* 4-Column Centered Grid - Super Compact Design */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {SERVICES.map((s, i) => (
            <motion.div
              key={s.id}
              custom={i}
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="group h-full"
            >
              <div className="relative h-full bg-white dark:bg-[#0c0c0c] rounded-[40px] p-8 md:p-10 border border-[#e8c96d30] dark:border-white/10 transition-all duration-500 hover:border-[#e8c96d80] hover:-translate-y-2 flex flex-col items-center text-center">
                
                {/* Visible Number ID */}
                <div className="absolute top-8 left-0 right-0 flex justify-center opacity-20 group-hover:opacity-40 transition-opacity">
                  <span className="text-display text-4xl font-black text-[#e8c96d] dark:text-[#e8c96d]">
                    {s.id}
                  </span>
                </div>

                {/* Centered Icon Container */}
                <div className="relative z-10 w-14 h-14 rounded-2xl flex items-center justify-center bg-[#fdfaf5] dark:bg-[#1a1a1a] border border-[#e8c96d25] mb-6 transition-all duration-500 group-hover:bg-[#e8c96d] group-hover:scale-110">
                  <s.icon size={24} className="text-[#e8c96d] transition-colors duration-500 group-hover:text-black" />
                </div>

                {/* Content - Compact Typography */}
                <h3 className="relative z-10 text-display text-lg font-bold text-[var(--text-main)] mb-3 leading-tight transition-colors group-hover:text-[#9a7824] dark:group-hover:text-[#e8c96d]">
                  {s.title}
                </h3>
                <p className="relative z-10 text-body text-xs md:text-sm text-[var(--text-muted)] leading-relaxed mb-8 flex-grow max-w-[180px] mx-auto">
                  {s.desc}
                </p>

                {/* Consultar Link */}
                <a 
                  href={`https://wa.me/51906455032?text=${encodeURIComponent(s.waMsg)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative z-10 mt-auto inline-flex items-center gap-2 text-[10px] font-bold tracking-widest uppercase text-[#9a7824] dark:text-[#e8c96d] hover:gap-3 transition-all group/link"
                >
                  Consultar ahora
                  <ArrowRight size={14} className="transition-transform group-hover/link:translate-x-1" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
