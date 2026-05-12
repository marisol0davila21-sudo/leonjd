'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { MessageSquare, X, Star, Send, User, Image as ImageIcon } from 'lucide-react'

interface FeedbackFormProps {
  onAddTestimonial: (testimonial: any) => void
}

export default function FeedbackForm({ onAddTestimonial }: FeedbackFormProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [rating, setRating] = useState(5)
  const [name, setName] = useState('')
  const [message, setMessage] = useState('')
  const [gender, setGender] = useState<'H' | 'M'>('M')

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!name || !message || isSubmitting) return

    setIsSubmitting(true)

    try {
      const response = await fetch('/api/testimonials', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name,
          text: message,
          stars: rating,
          image: gender === 'M' ? '/images/Hero/Avatar (M).webp' : '/images/Hero/Avatar (H).webp',
          role: 'Cliente',
          event: 'Opinión Web'
        }),
      });

      if (response.ok) {
        setSubmitted(true)
        setTimeout(() => {
          setIsOpen(false)
          setSubmitted(false)
          setName('')
          setMessage('')
          setRating(5)
        }, 2000)
      }
    } catch (error) {
      console.error('Submit Feedback Error:', error);
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <>
      {/* Backdrop blur effect */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 bg-black/40 backdrop-blur-md z-[90]"
          />
        )}
      </AnimatePresence>

      <div className="fixed right-6 bottom-10 z-[100] hidden lg:block">
        <AnimatePresence mode="wait">
          {!isOpen ? (
            <motion.button
              key="trigger"
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              onClick={() => setIsOpen(true)}
              className="relative flex items-center justify-center bg-white dark:bg-[#0c0c0c] border border-[#e8c96d] w-16 h-16 rounded-full group transition-transform active:scale-95"
            >
              <MessageSquare size={24} className="text-[#e8c96d]" />
              
              {/* Sharp Corner Bubble with Gold Border (No Shadows) */}
              <div className="absolute bottom-full right-full mb-1 translate-x-2 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0 pointer-events-none">
                <div className="relative min-w-[100px] h-10 flex items-center justify-center">
                  <svg 
                    viewBox="0 0 120 50" 
                    className="absolute inset-0 w-full h-full overflow-visible"
                    preserveAspectRatio="none"
                  >
                    <path 
                      d="M 12 0 H 108 Q 120 0 120 12 V 35 L 120 50 L 100 40 H 12 Q 0 40 0 28 V 12 Q 0 0 12 0 Z" 
                      fill="white" 
                      stroke="#e8c96d" 
                      strokeWidth="1.2"
                      vectorEffect="non-scaling-stroke"
                      className="dark:fill-[#1a1a1a]"
                    />
                  </svg>
                  <span className="relative z-10 px-6 text-[#9a7824] dark:text-[#e8c96d] text-[11px] font-bold uppercase tracking-widest whitespace-nowrap -translate-y-1">
                    ¡Opínanos!
                  </span>
                </div>
              </div>
            </motion.button>
          ) : (
            <motion.div
              key="form"
              initial={{ opacity: 0, x: 50, scale: 0.9 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: 50, scale: 0.9 }}
              className="w-[380px] bg-white dark:bg-[#0c0c0c] border-2 border-[#e8c96d] rounded-[40px] p-8 flex flex-col gap-6"
            >
              <div className="flex justify-between items-center">
                <div>
                  <h3 className="text-display text-xl font-bold text-[var(--text-main)]">Tu Experiencia</h3>
                  <p className="text-[10px] text-[#9a7824] uppercase tracking-widest font-medium mt-1">Queremos escucharte</p>
                </div>
                <button 
                  onClick={() => setIsOpen(false)} 
                  className="w-10 h-10 rounded-full flex items-center justify-center bg-[#fdfaf5] dark:bg-[#1a1a1a] text-[var(--text-dim)] hover:text-red-500 transition-colors border border-[#e8c96d10]"
                >
                  <X size={18} />
                </button>
              </div>

              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                {/* Name */}
                <div>
                  <label className="text-[9px] font-bold uppercase tracking-widest text-[#9a7824] mb-2 block ml-2">Nombre Completo</label>
                  <div className="relative">
                    <User className="absolute left-4 top-1/2 -translate-y-1/2 text-[#e8c96d]" size={14} />
                    <input 
                      type="text" 
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Ej. María García"
                      className="w-full bg-[#fdfaf5] dark:bg-[#1a1a1a] border border-[#e8c96d20] rounded-2xl py-3 pl-11 pr-4 text-sm outline-none focus:border-[#e8c96d] transition-colors"
                      required
                    />
                  </div>
                </div>

                {/* Rating */}
                <div className="bg-[#fdfaf5] dark:bg-[#1a1a1a] p-4 rounded-2xl border border-[#e8c96d10]">
                  <div className="flex justify-between items-center">
                    <label className="text-[9px] font-bold uppercase tracking-widest text-[#9a7824]">¿Qué tal fue el servicio?</label>
                    <div className="flex gap-1.5">
                      {[1, 2, 3, 4, 5].map((star) => {
                        const isActive = star <= rating;
                        return (
                          <motion.button 
                            key={star} 
                            type="button" 
                            onClick={() => setRating(star)}
                            animate={{
                              scale: isActive ? 1.1 : 1,
                            }}
                          >
                            <Star 
                              size={18} 
                              fill={isActive ? "#e8c96d" : "none"} 
                              className={isActive ? "text-[#e8c96d]" : "text-[var(--text-dim)]/30"} 
                            />
                          </motion.button>
                        )
                      })}
                    </div>
                  </div>
                </div>

                {/* Gender (For Avatar) */}
                <div>
                  <label className="text-[9px] font-bold uppercase tracking-widest text-[#9a7824] mb-2 block ml-2">Selecciona tu Avatar</label>
                  <div className="flex gap-3">
                    <button 
                      type="button"
                      onClick={() => setGender('M')}
                      className={`flex-1 py-3 rounded-2xl text-[10px] font-bold uppercase tracking-wider transition-all border flex items-center justify-center gap-2 ${gender === 'M' ? 'bg-[#e8c96d10] border-[#e8c96d] text-[#9a7824]' : 'bg-[#fdfaf5] dark:bg-[#1a1a1a] border-[#e8c96d10] text-[var(--text-dim)]'}`}
                    >
                      <User size={14} />
                      Mujer
                    </button>
                    <button 
                      type="button"
                      onClick={() => setGender('H')}
                      className={`flex-1 py-3 rounded-2xl text-[10px] font-bold uppercase tracking-wider transition-all border flex items-center justify-center gap-2 ${gender === 'H' ? 'bg-[#e8c96d10] border-[#e8c96d] text-[#9a7824]' : 'bg-[#fdfaf5] dark:bg-[#1a1a1a] border-[#e8c96d10] text-[var(--text-dim)]'}`}
                    >
                      <User size={14} />
                      Hombre
                    </button>
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label className="text-[9px] font-bold uppercase tracking-widest text-[#9a7824] mb-2 block ml-2">Tu Comentario</label>
                  <textarea 
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Cuéntanos qué te pareció el servicio..."
                    className="w-full bg-[#fdfaf5] dark:bg-[#1a1a1a] border border-[#e8c96d20] rounded-2xl py-3 px-4 text-sm outline-none focus:border-[#e8c96d] transition-colors min-h-[100px] resize-none"
                    required
                  />
                </div>

                {/* Submit */}
                <button 
                  type="submit"
                  disabled={isSubmitting || submitted}
                  className={`w-full py-4 rounded-2xl font-bold text-[11px] uppercase tracking-[0.2em] transition-all flex items-center justify-center gap-2 ${
                    submitted 
                      ? 'bg-green-500 text-white cursor-default' 
                      : 'bg-[#1a1a1a] dark:bg-[#e8c96d] text-[#e8c96d] dark:text-black hover:bg-black dark:hover:bg-white'
                  } disabled:opacity-70`}
                >
                  {isSubmitting ? (
                    'Enviando...'
                  ) : submitted ? (
                    '¡Gracias por tu opinión!'
                  ) : (
                    <>
                      Publicar Opinión
                      <Send size={14} />
                    </>
                  )}
                </button>
              </form>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  )
}
