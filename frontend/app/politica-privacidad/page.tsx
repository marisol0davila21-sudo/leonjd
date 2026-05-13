'use client'

import Navbar from '@/components/navigation/navbar'
import Footer from '@/components/layout/footer'
import { ShieldCheck, Lock, Eye, FileText, ChevronLeft } from 'lucide-react'
import Link from 'next/link'

export default function PrivacyPolicy() {
  return (
    <>
      <Navbar />
      <main className="pt-32 pb-24 bg-[#fdfaf5] dark:bg-[#050505] transition-colors duration-500">
        <div className="container-main">
          {/* Header */}
          <div className="max-w-4xl mx-auto mb-16 text-center">
            <Link 
              href="/" 
              className="inline-flex items-center gap-2 text-[10px] font-bold tracking-[0.3em] uppercase text-[#9a7824] hover:text-[#c9a84c] transition-colors mb-12 group"
            >
              <ChevronLeft size={14} className="group-hover:-translate-x-1 transition-transform" />
              Volver al inicio
            </Link>
            
            <h1 className="text-display text-5xl md:text-6xl font-bold text-[var(--text-main)] mb-8 leading-tight">
              Política de <br />
              <span className="gold-gradient italic font-serif lowercase">privacidad</span>
            </h1>
            <div className="w-24 h-1 bg-gold-gradient mx-auto mb-8 rounded-full" />
            <p className="text-body text-lg text-[var(--text-muted)] leading-relaxed max-w-2xl mx-auto">
              En León de Judá valoramos tu confianza. Esta política describe cómo manejamos tu información personal con total transparencia y seguridad.
            </p>
          </div>

          {/* Content Card */}
          <div className="max-w-4xl mx-auto bg-white dark:bg-[#0c0c0c] border border-[#ede0c4] dark:border-white/10 rounded-[48px] p-8 md:p-16 lg:p-20 relative overflow-hidden transition-colors duration-500">
            {/* Decorative background elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#c9a84c05] rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#c9a84c03] rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

            <div className="relative z-10 grid gap-16">
              
              {/* Section 1 */}
              <section className="relative">
                <div className="flex items-start gap-6 mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-[#c9a84c10] flex items-center justify-center text-[#c9a84c] shrink-0 border border-[#c9a84c20]">
                    <Eye size={22} />
                  </div>
                  <div>
                    <h2 className="text-display text-2xl font-bold text-[var(--text-main)] mb-4">Información que Recolectamos</h2>
                    <p className="text-body text-base text-[var(--text-muted)] leading-relaxed mb-6">
                      Solo solicitamos la información estrictamente necesaria para brindarte un servicio de impresión y diseño personalizado de alta calidad:
                    </p>
                    <ul className="grid gap-4">
                      {[
                        'Datos de contacto (Nombre, Correo electrónico, Teléfono).',
                        'Especificaciones técnicas de tus proyectos de impresión.',
                        'Información logística para envíos garantizados.',
                      ].map((item, i) => (
                        <li key={i} className="flex items-center gap-3 text-sm text-[var(--text-muted)]">
                          <div className="w-1.5 h-1.5 rounded-full bg-[#c9a84c]" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </section>

              {/* Section 2 */}
              <section className="relative pt-12 border-t border-[#ede0c4] dark:border-white/5">
                <div className="flex items-start gap-6 mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-[#c9a84c10] flex items-center justify-center text-[#c9a84c] shrink-0 border border-[#c9a84c20]">
                    <Lock size={22} />
                  </div>
                  <div>
                    <h2 className="text-display text-2xl font-bold text-[var(--text-main)] mb-4">Protección de tus Datos</h2>
                    <div className="space-y-4 text-body text-base text-[var(--text-muted)] leading-relaxed">
                      <p>
                        Toda la comunicación a través de WhatsApp y nuestro formulario de contacto está protegida. No vendemos ni compartimos tu información con terceros con fines publicitarios.
                      </p>
                      <p>
                        Tus archivos de diseño y fotografías personales se utilizan exclusivamente para la producción de tu pedido y se eliminan de nuestros servidores temporales tras la entrega.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Section 3 */}
              <section className="relative pt-12 border-t border-[#ede0c4] dark:border-white/5">
                <div className="flex items-start gap-6 mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-[#c9a84c10] flex items-center justify-center text-[#c9a84c] shrink-0 border border-[#c9a84c20]">
                    <FileText size={22} />
                  </div>
                  <div>
                    <h2 className="text-display text-2xl font-bold text-[var(--text-main)] mb-4">Tus Derechos como Cliente</h2>
                    <p className="text-body text-base text-[var(--text-muted)] leading-relaxed">
                      Tienes derecho a acceder, rectificar o eliminar tus datos de nuestra base de datos en cualquier momento. Nuestro compromiso es brindarte un servicio transparente y seguro.
                    </p>
                  </div>
                </div>
              </section>

              {/* Banner info */}
              <div className="mt-12 p-8 md:p-10 rounded-[32px] bg-[#fcf9f2] dark:bg-white/5 border border-[#e8c96d30] flex flex-col md:flex-row items-center gap-8 group">
                <div className="w-20 h-20 rounded-[24px] bg-[#1a1a1a] flex items-center justify-center text-[#e8c96d] shrink-0 shadow-xl transition-transform group-hover:scale-105">
                  <ShieldCheck size={40} />
                </div>
                <div className="text-center md:text-left">
                  <h3 className="text-display text-xl font-bold text-[var(--text-main)] mb-2">Compromiso de Confidencialidad</h3>
                  <p className="text-sm text-[var(--text-muted)] leading-relaxed max-w-lg">
                    Entendemos que tus recuerdos y proyectos son valiosos. Nos comprometemos a tratarlos con el máximo respeto y la discreción que merecen.
                  </p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
