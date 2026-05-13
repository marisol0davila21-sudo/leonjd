'use client'

import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react'
import Image from 'next/image'

export interface TestimonialType {
  id: number | string
  name: string
  role: string
  event: string
  stars: number
  text: string
  image: string
}

const INITIAL_TESTIMONIALS: TestimonialType[] = [
  {
    id: 1,
    name: 'María Fernanda R.',
    role: 'Cliente Premium',
    event: 'Recuerdos de Bautizo',
    stars: 5,
    text: 'Los recuerdos para el bautizo de mi hija quedaron preciosos. Se nota la dedicación en cada detalle elaborado y la elegancia del acabado.',
    image: '/images/testimonios/icon-1.webp',
  },
  {
    id: 2,
    name: 'Carlos & Lucía',
    role: 'Emprendedores',
    event: 'Impresión UV Rígida',
    stars: 5,
    text: 'La impresión UV sobre MDF para nuestra señalización superó las expectativas. Los colores son vivos y la calidad del material es excepcional.',
    image: '/images/testimonios/icon-2.webp',
  },
  {
    id: 3,
    name: 'Andrea V.',
    role: 'Coleccionista',
    event: 'Imanes Turísticos',
    stars: 5,
    text: 'Compré una colección de imanes turísticos y a mis clientes les encantan. Diseños únicos y coleccionables con una nitidez impresionante.',
    image: '/images/testimonios/icon-3.webp',
  },
]

interface TestimonialsProps {
  externalTestimonials?: TestimonialType[]
}

export default function Testimonials({ externalTestimonials = [] }: TestimonialsProps) {
  const [items, setItems] = useState<TestimonialType[]>(INITIAL_TESTIMONIALS)
  const [index, setIndex] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const [transitioning, setTransitioning] = useState(false)

  // Fetch from database on mount
  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        const response = await fetch('/api/testimonials');
        if (response.ok) {
          const dbTestimonials = await response.json();
          
          const sanitizePath = (path: string) => {
            if (!path) return '';
            // Match the files on disk: icon-1.webp, etc.
            return path
              .toLowerCase()
              .replace(/ñ/g, 'n')
              .replace(/\s+/g, '-')
              .replace(/[()]/g, '')
              .replace(/-+/g, '-');
          };

          const formatted = dbTestimonials.map((t: any) => ({
            id: t._id,
            name: t.name,
            role: t.role,
            event: t.event,
            stars: t.rating || t.stars,
            text: t.content || t.text,
            image: sanitizePath(t.avatar || t.image)
          }));
          
          const sanitizedInitial = INITIAL_TESTIMONIALS.map(t => ({
            ...t,
            image: sanitizePath(t.image)
          }));

          setItems([...sanitizedInitial, ...formatted]);
        } else {
          console.warn('Testimonials API returned non-ok status:', response.status);
        }
      } catch (error) {
        console.error('Fetch Testimonials Error:', error);
      }
    };

    fetchTestimonials();
  }, []);

  // Sync external testimonials (from props)
  useEffect(() => {
    if (externalTestimonials.length > 0) {
      setItems((prev) => [...prev, ...externalTestimonials])
    }
  }, [externalTestimonials])

  const showSlider = items.length > 3

  // For infinite loop without "snap back", we duplicate items in the track
  // We'll show [Items][Items] and reset index when needed
  const displayItems = showSlider ? [...items, ...items] : items

  useEffect(() => {
    if (!showSlider || isPaused || transitioning) return
    const timer = setInterval(() => {
      handleNext()
    }, 6000)
    return () => clearInterval(timer)
  }, [showSlider, isPaused, items.length, transitioning])

  const handleNext = () => {
    if (transitioning) return
    
    if (index >= items.length) {
      // Instant reset to middle (invisible jump)
      setTransitioning(true)
      setIndex(0)
      setTimeout(() => {
        setTransitioning(false)
        setIndex(1)
      }, 50)
    } else {
      setIndex((prev) => prev + 1)
    }
  }

  const handlePrev = () => {
    if (transitioning) return
    if (index <= 0) {
      setTransitioning(true)
      setIndex(items.length)
      setTimeout(() => {
        setTransitioning(false)
        setIndex(items.length - 1)
      }, 50)
    } else {
      setIndex((prev) => prev - 1)
    }
  }

  return (
    <section
      id="testimonios"
      className="section-pad bg-[#f5efe4] dark:bg-[#050505] transition-colors duration-500 overflow-x-hidden scroll-mt-12"
    >
      <div className="container-main px-6 md:px-12 lg:px-20">
        {/* Header */}
        <div className="flex flex-col md:flex-row items-center justify-between mb-16 gap-8 text-center md:text-left">
          <div>
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-body text-[10px] font-bold tracking-[0.4em] uppercase text-[#9a7824] mb-3 block"
            >
              Ellos confían en nosotros
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-display text-4xl md:text-5xl font-bold text-[var(--text-main)]"
            >
              Lo que dicen {' '}<span className="gold-gradient italic font-serif lowercase">nuestros clientes</span>
            </motion.h2>
          </div>
          
          {showSlider && (
            <div className="flex gap-4">
              <button 
                onClick={handlePrev}
                className="w-12 h-12 rounded-full border border-[#e8c96d30] dark:border-white/10 flex items-center justify-center text-[#e8c96d] hover:bg-[#e8c96d] hover:text-black transition-all active:scale-90"
              >
                <ChevronLeft size={24} />
              </button>
              <button 
                onClick={handleNext}
                className="w-12 h-12 rounded-full border border-[#e8c96d30] dark:border-white/10 flex items-center justify-center text-[#e8c96d] hover:bg-[#e8c96d] hover:text-black transition-all active:scale-90"
              >
                <ChevronRight size={24} />
              </button>
            </div>
          )}
        </div>

        {/* Display Container */}
        <div 
          className="relative px-2 md:px-6"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {showSlider ? (
            <div className="overflow-hidden">
              <motion.div
                animate={{ x: `-${index * (100 / 3)}%` }}
                transition={transitioning ? { duration: 0 } : { duration: 1.2, ease: [0.32, 0.72, 0, 1] }}
                className="flex gap-8 py-4"
              >
                {displayItems.map((t, i) => (
                  <div
                    key={`${t.id}-${i}`}
                    className="w-full md:w-[calc(33.333%-1.35rem)] flex-shrink-0"
                  >
                    <TestimonialCard t={t} />
                  </div>
                ))}
              </motion.div>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {items.map((t) => (
                <TestimonialCard key={t.id} t={t} />
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

function TestimonialCard({ t }: { t: TestimonialType }) {
  return (
    <div className="flex flex-col h-full bg-white dark:bg-[#0c0c0c] rounded-[40px] p-8 md:p-10 border border-[#e8c96d30] dark:border-white/10 transition-colors duration-500 hover:border-[#e8c96d80] hover:-translate-y-1">
      <div className="flex justify-between items-start mb-6">
        <div className="flex gap-1">
          {[...Array(t.stars)].map((_, j) => (
            <Star key={j} size={14} fill="#e8c96d" className="text-[#e8c96d]" />
          ))}
        </div>
        <Quote size={24} className="text-[#e8c96d40] dark:text-[#e8c96d20]" strokeWidth={1.5} />
      </div>

      <p className="text-body text-base text-[var(--text-muted)] leading-relaxed italic mb-8 flex-grow">
        &ldquo;{t.text}&rdquo;
      </p>

      <div className="flex items-center gap-4 pt-6 border-t border-[#e8c96d20] dark:border-white/5">
        <div className="w-14 h-14 rounded-2xl relative overflow-hidden flex-shrink-0 border border-[#e8c96d30] p-0.5 bg-[#fdfaf5] dark:bg-[#1a1a1a]">
          <div className="w-full h-full rounded-[14px] overflow-hidden relative">
            <Image 
              src={t.image} 
              alt={t.name} 
              fill 
              unoptimized
              sizes="56px"
              className="object-cover" 
            />
          </div>
        </div>
        <div>
          <h4 className="text-body text-base font-bold text-[var(--text-main)] leading-none mb-1">
            {t.name}
          </h4>
          <p className="text-body text-[10px] text-[#9a7824] dark:text-[#e8c96d] uppercase tracking-widest font-bold">
            {t.event}
          </p>
        </div>
      </div>
    </div>
  )
}
