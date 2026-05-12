'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Bell, Mail, PartyPopper, MailCheck, Loader2, ArrowRight } from 'lucide-react'

type Status = 'idle' | 'loading' | 'success' | 'exists' | 'error'

export default function NewsletterSection() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<Status>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) return

    setStatus('loading')

    try {
      const response = await fetch('/api/newsletter/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (data.status === 'exists') {
        setStatus('exists');
      } else if (data.success) {
        setStatus('success');
        setEmail('');
      } else {
        setStatus('error');
      }
    } catch (error) {
      console.error('Newsletter Error:', error);
      setStatus('error');
    }
  }

  return (
    <section className="bg-white dark:bg-[#080808] border-y border-[#e8c96d20] py-16 transition-colors duration-500">
      <div className="container-main">
        <div className="max-w-6xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col lg:flex-row lg:items-center gap-10 lg:gap-16"
          >
            {/* Left: Info */}
            <div className="flex items-center gap-5 shrink-0">
              <div className="w-14 h-14 rounded-2xl flex items-center justify-center shrink-0 bg-[#c9a84c15] dark:bg-[#c9a84c10] border border-[#c9a84c20]">
                <Bell size={24} className="text-[#c9a84c] animate-bounce-subtle" />
              </div>
              <div>
                <h3 className="font-display text-xl sm:text-2xl font-bold text-[var(--text-main)] leading-tight">
                  Últimas novedades
                </h3>
                <p className="text-sm text-[var(--text-muted)] mt-1">
                  Sé el primero en conocer nuestros nuevos proyectos y ofertas.
                </p>
              </div>
            </div>

            {/* Right: Form Area */}
            <div className="flex-1 w-full max-w-2xl lg:ml-auto">
              <AnimatePresence mode="wait">
                {status === 'idle' || status === 'loading' ? (
                  <motion.form 
                    key="form"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    onSubmit={handleSubmit}
                    className="flex flex-col sm:flex-row gap-3 w-full"
                  >
                    <div className="flex-1 relative">
                      <Mail size={18} className="absolute left-5 top-1/2 -translate-y-1/2 text-[var(--text-dim)]" />
                      <input 
                        placeholder="Tu correo electrónico" 
                        className="w-full pl-12 pr-6 py-4 rounded-full bg-[#fdfaf5] dark:bg-[#111111] text-sm border border-[#e8c96d40] focus:outline-none focus:ring-2 focus:ring-[#c9a84c] transition-all text-[var(--text-main)]"
                        required 
                        type="email" 
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        disabled={status === 'loading'}
                      />
                    </div>
                    
                    <button 
                      type="submit" 
                      disabled={status === 'loading'}
                      className="bg-[#1a1a1a] dark:bg-[#e8c96d] text-[#e8c96d] dark:text-[#111111] border-2 border-[#e8c96d] px-10 py-4 rounded-full font-bold text-sm hover:bg-[#e8c96d] hover:text-black dark:hover:bg-white active:scale-95 transition-all flex items-center justify-center gap-2.5 group disabled:opacity-70"
                    >
                      {status === 'loading' ? (
                        <Loader2 size={20} className="animate-spin" />
                      ) : (
                        <>
                          Suscribirme
                          <ArrowRight size={18} strokeWidth={2.5} className="group-hover:translate-x-1 transition-transform" />
                        </>
                      )}
                    </button>
                  </motion.form>
                ) : status === 'success' ? (
                  <motion.div 
                    key="success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex items-center gap-4 bg-green-50 dark:bg-green-900/10 border border-green-200 dark:border-green-800/30 rounded-2xl px-6 py-4 w-full"
                  >
                    <div className="w-12 h-12 rounded-full bg-green-100 dark:bg-green-900/20 flex items-center justify-center shrink-0">
                      <PartyPopper size={24} className="text-green-600 dark:text-green-400" />
                    </div>
                    <div className="flex-1">
                      <p className="font-bold text-green-800 dark:text-green-300 text-sm">¡Suscripción exitosa!</p>
                      <p className="text-xs text-green-600 dark:text-green-500">Te avisaremos de las últimas novedades.</p>
                    </div>
                    <button 
                      onClick={() => setStatus('idle')}
                      className="text-xs text-green-700 dark:text-green-400 hover:underline font-bold whitespace-nowrap"
                    >
                      Enviar otro
                    </button>
                  </motion.div>
                ) : (
                  <motion.div 
                    key="exists"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex items-center gap-4 bg-amber-50 dark:bg-amber-900/10 border border-amber-200 dark:border-amber-800/30 rounded-2xl px-6 py-4 w-full"
                  >
                    <div className="w-12 h-12 rounded-full bg-amber-100 dark:bg-amber-900/20 flex items-center justify-center shrink-0">
                      <MailCheck size={24} className="text-amber-600 dark:text-amber-400" />
                    </div>
                    <div className="flex-1">
                      <p className="font-bold text-amber-800 dark:text-amber-300 text-sm">¡Ya estás suscrito!</p>
                      <p className="text-xs text-amber-600 dark:text-amber-500">Este correo ya forma parte de nuestra comunidad.</p>
                    </div>
                    <button 
                      onClick={() => setStatus('idle')}
                      className="text-xs text-amber-700 dark:text-amber-400 hover:underline font-bold whitespace-nowrap"
                    >
                      Usar otro correo
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </div>

      <style jsx>{`
        @keyframes bounce-subtle {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-3px); }
        }
        .animate-bounce-subtle {
          animation: bounce-subtle 3s ease-in-out infinite;
        }
      `}</style>
    </section>
  )
}
