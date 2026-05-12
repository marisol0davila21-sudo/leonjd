'use client'

import Navbar from '@/components/navigation/navbar'
import Footer from '@/components/layout/footer'
import { ShieldCheck, Lock, Eye, FileText, ChevronLeft } from 'lucide-react'
import Link from 'next/link'

export default function PrivacyPolicy() {
  return (
    <>
      <Navbar />
      <main className="pt-32 pb-24 bg-[#fdfaf5] dark:bg-[#080808] transition-colors duration-500">
        <div className="container-main">
          {/* Header */}
          <div className="max-w-3xl mx-auto mb-16">
            <Link 
              href="/" 
              className="inline-flex items-center gap-2 text-sm text-[#9a7824] hover:text-[#c9a84c] transition-colors mb-8 group"
            >
              <ChevronLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
              Volver al inicio
            </Link>
            
            <h1 className="text-display text-4xl md:text-5xl font-bold text-[var(--text-main)] mb-6">
              Política de <span className="gold-gradient italic font-serif">Privacidad</span>
            </h1>
            <p className="text-body text-base text-[var(--text-muted)] leading-relaxed">
              En León de Judá Impresiones Gráficas, valoramos tu confianza. Esta política describe cómo manejamos tu información personal con total transparencia y seguridad.
            </p>
          </div>

          {/* Content Grid */}
          <div className="max-w-3xl mx-auto grid gap-12">
            
            {/* Section 1 */}
            <section className="group">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-10 h-10 rounded-xl bg-[#c9a84c15] flex items-center justify-center text-[#c9a84c]">
                  <Eye size={20} />
                </div>
                <h2 className="text-xl font-bold text-[var(--text-main)]">Información que Recolectamos</h2>
              </div>
              <div className="pl-14">
                <p className="text-body text-[var(--text-muted)] leading-relaxed">
                  Solo solicitamos la información necesaria para brindarte un servicio personalizado:
                </p>
                <ul className="list-disc pl-5 mt-4 space-y-2 text-[var(--text-muted)] text-sm">
                  <li>Datos de contacto (Nombre, Correo electrónico, Teléfono).</li>
                  <li>Especificaciones de tus proyectos de impresión.</li>
                  <li>Información de envío para entregas a domicilio.</li>
                </ul>
              </div>
            </section>

            {/* Section 2 */}
            <section className="group">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-10 h-10 rounded-xl bg-[#c9a84c15] flex items-center justify-center text-[#c9a84c]">
                  <Lock size={20} />
                </div>
                <h2 className="text-xl font-bold text-[var(--text-main)]">Cómo Protegemos tus Datos</h2>
              </div>
              <div className="pl-14 text-sm text-[var(--text-muted)] leading-relaxed space-y-4">
                <p>
                  Toda la comunicación a través de WhatsApp y nuestro formulario de contacto está protegida. No vendemos ni compartimos tu información con terceros con fines publicitarios.
                </p>
                <p>
                  Tus archivos de diseño y fotografías personales se utilizan exclusivamente para la producción de tu pedido y se eliminan de nuestros servidores temporales tras la entrega, a menos que solicites conservarlos para futuras reimpresiones.
                </p>
              </div>
            </section>

            {/* Section 3 */}
            <section className="group">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-10 h-10 rounded-xl bg-[#c9a84c15] flex items-center justify-center text-[#c9a84c]">
                  <FileText size={20} />
                </div>
                <h2 className="text-xl font-bold text-[var(--text-main)]">Tus Derechos</h2>
              </div>
              <div className="pl-14 text-sm text-[var(--text-muted)] leading-relaxed">
                <p>
                  Como usuario, tienes derecho a acceder, rectificar o eliminar tus datos de nuestra base de datos en cualquier momento. Solo debes escribirnos a través de nuestros canales oficiales.
                </p>
              </div>
            </section>

            {/* Banner info */}
            <div className="mt-8 p-8 rounded-[32px] bg-white dark:bg-[#111111] border border-[#e8c96d30] flex flex-col md:flex-row items-center gap-6 shadow-sm">
              <div className="w-16 h-16 rounded-2xl bg-gold-gradient flex items-center justify-center text-black shrink-0">
                <ShieldCheck size={32} />
              </div>
              <div>
                <h3 className="font-bold text-[var(--text-main)] mb-1">Compromiso de Confidencialidad</h3>
                <p className="text-xs text-[var(--text-muted)] leading-relaxed">
                  Entendemos que tus recuerdos y proyectos son valiosos. Nos comprometemos a tratarlos con el respeto y la discreción que merecen.
                </p>
              </div>
            </div>

          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
