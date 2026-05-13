'use client'

import { motion } from 'framer-motion'
import { MapPin, Clock, Phone } from 'lucide-react'
import Image from 'next/image'

// Custom WhatsApp Icon SVG
const WhatsAppIcon = ({ size = 20, className = "" }: { size?: number, className?: string }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="currentColor" 
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
)

export default function ContactCTA() {
  const WA_URL =
    'https://wa.me/51906455032?text=Hola%20León%20de%20Judá!%20Me%20gustaría%20recibir%20una%20asesoría%20personalizada%20para%20un%20proyecto%20especial.%20Podrían%20ayudarme%20con%20una%20cotización?'

  return (
    <section
      id="contacto"
      className="section-pad bg-[var(--bg-main)]"
    >
      <div className="container-main">
        {/* Main CTA card */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="rounded-[40px] overflow-hidden border border-[#c9a84c35] bg-white dark:bg-[#0a0a0a] relative transition-colors duration-300"
        >
          {/* Subtle background decoration */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#c9a84c08] rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#c9a84c05] rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 pointer-events-none" />

          <div className="p-10 md:p-16 lg:p-20 grid lg:grid-cols-2 gap-16 lg:gap-24 items-center relative z-10">
            {/* Text side */}
            <div>
              <span className="text-body text-xs font-semibold tracking-[0.2em] uppercase text-[#9a7824] dark:text-[#c9a84c] mb-6 block">
                ¿Listo para crear algo especial?
              </span>
              <h2 className="text-display text-4xl md:text-5xl font-bold text-[var(--text-main)] mb-6 leading-tight">
                Hablemos de <br />
                <span className="gold-gradient italic font-serif lowercase">tu proyecto</span>
              </h2>
              <p className="text-body text-base text-[var(--text-muted)] leading-relaxed mb-10 max-w-md">
                Cuéntanos tu idea por WhatsApp y te brindaremos una asesoría personalizada en tiempo récord y sin compromisos.
              </p>

              <a
                href={WA_URL}
                target="_blank"
                rel="noopener noreferrer"
                id="contact-cta-whatsapp"
                className="bg-[#1a1a1a] dark:bg-[#e8c96d] text-[#e8c96d] dark:text-[#111111] border-2 border-[#e8c96d] px-10 py-4 rounded-full font-bold text-sm md:text-base hover:bg-[#e8c96d] hover:text-black dark:hover:bg-white active:scale-95 transition-all flex items-center gap-2.5 group w-fit"
              >
                <WhatsAppIcon size={20} className="group-hover:scale-110 transition-transform" />
                Iniciar cotización
              </a>
            </div>

            {/* Info cards & Image Decoration */}
            <div className="flex flex-col gap-8">
              <div className="flex flex-col gap-4">
                {[
                  {
                    icon: MapPin,
                    title: 'Ubicación',
                    value: 'Lima, Perú',
                    sub: 'Envíos garantizados a todo el país',
                  },
                  {
                    icon: Clock,
                    title: 'Horario de atención',
                    value: 'Lun – Dom',
                    sub: '9:00 am - 7:00 pm',
                  },
                  {
                    icon: Phone,
                    title: 'WhatsApp',
                    value: '+51 906 455 032',
                    sub: 'Respuesta en menos de 30 min',
                  },
                ].map((item) => (
                  <div
                    key={item.title}
                    className="group flex items-center gap-5 rounded-3xl px-6 py-4 bg-[#fcf9f2] dark:bg-white/5 border border-[#c9a84c15] dark:border-white/5 transition-all duration-300 hover:border-[#e8c96d50] hover:bg-white dark:hover:bg-[#111111]"
                  >
                    <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 bg-white dark:bg-[#1a1a1a] border border-[#e8c96d20] transition-all duration-300 group-hover:bg-[#e8c96d] group-hover:border-transparent">
                      <item.icon 
                        size={18} 
                        strokeWidth={2} 
                        className="text-[#e8c96d] transition-colors group-hover:text-black dark:group-hover:text-white" 
                      />
                    </div>
                    <div>
                      <p className="text-body text-[9px] text-[#9a7824] dark:text-[#e8c96d] uppercase tracking-widest font-bold">
                        {item.title}
                      </p>
                      <p className="text-body text-sm font-bold text-[var(--text-main)] leading-tight">
                        {item.value}
                      </p>
                      <p className="text-[10px] text-[var(--text-dim)]">{item.sub}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
