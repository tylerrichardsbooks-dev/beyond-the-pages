import { useState, useEffect, useCallback } from 'react';
import { Button } from '@/components/ui/button';
import bookCover from '@/assets/book-cover.png';
import heroBg1 from '@/assets/hero-bg-1.jpg';
import heroBg2 from '@/assets/hero-bg-2.jpg';
import heroBg3 from '@/assets/hero-bg-3.jpg';

interface Slide {
  id: number;
  headline: string;
  tagline: string;
  background: string;
}

const slides: Slide[] = [
  {
    id: 1,
    headline: 'A Story of Redemption',
    tagline: 'One woman\'s journey from shame to grace.',
    background: heroBg1,
  },
  {
    id: 2,
    headline: 'Strength Beyond Survival',
    tagline: 'She chose to live, not just endure.',
    background: heroBg2,
  },
  {
    id: 3,
    headline: 'Faith Beyond Shame',
    tagline: 'Where guilt ends, grace begins.',
    background: heroBg3,
  },
];

const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [parallaxOffset, setParallaxOffset] = useState(0);

  const goToSlide = useCallback((index: number) => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentSlide(index);
    setTimeout(() => setIsAnimating(false), 1200);
  }, [isAnimating]);

  useEffect(() => {
    const timer = setInterval(() => {
      goToSlide((currentSlide + 1) % slides.length);
    }, 7000);
    return () => clearInterval(timer);
  }, [currentSlide, goToSlide]);

  useEffect(() => {
    const handleScroll = () => {
      setParallaxOffset(window.scrollY * 0.3);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Background images with parallax */}
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-[1.5s] ease-cinematic ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
          style={{
            transform: `translateY(${parallaxOffset}px) scale(1.1)`,
          }}
        >
          <img
            src={slide.background}
            alt=""
            className="absolute inset-0 w-full h-full object-cover"
          />
          {/* Dark overlay for text readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/70 to-background/40" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/30" />
        </div>
      ))}

      {/* Film grain overlay */}
      <div 
        className="absolute inset-0 pointer-events-none z-20 opacity-40"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%' height='100%' filter='url(%23noise)' opacity='0.05'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Animated light particles */}
      <div className="absolute inset-0 z-10 pointer-events-none">
        <div 
          className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full opacity-20"
          style={{
            background: 'radial-gradient(ellipse at center, hsl(28 75% 55% / 0.3) 0%, transparent 70%)',
            animation: 'float 15s ease-in-out infinite',
          }}
        />
        <div 
          className="absolute bottom-1/3 right-1/4 w-64 h-64 rounded-full opacity-15"
          style={{
            background: 'radial-gradient(ellipse at center, hsl(38 85% 60% / 0.3) 0%, transparent 70%)',
            animation: 'float 12s ease-in-out infinite reverse',
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-30 container mx-auto px-6 lg:px-12 min-h-screen flex items-center">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center w-full py-32 lg:py-0">
          
          {/* Book Cover */}
          <div className="order-2 lg:order-1 flex justify-center lg:justify-start">
            <div className="relative">
              {/* Glow behind cover */}
              <div className="absolute -inset-12 bg-gradient-radial from-primary/30 via-primary/10 to-transparent blur-3xl animate-glow-pulse" />
              
              <img
                src={bookCover}
                alt="Beyond the Well by Dr. Lauree Brown"
                className="relative w-64 md:w-80 lg:w-96 h-auto shadow-2xl animate-float"
                style={{
                  filter: 'drop-shadow(0 30px 60px rgba(0, 0, 0, 0.6))',
                }}
              />
            </div>
          </div>

          {/* Text Content */}
          <div className="order-1 lg:order-2 space-y-8">
            {slides.map((slide, index) => (
              <div
                key={slide.id}
                className={`transition-all duration-slow ease-cinematic ${
                  index === currentSlide
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-8 absolute pointer-events-none'
                }`}
              >
                <p className="font-display text-primary text-2xl md:text-3xl mb-4">
                  Beyond the Well
                </p>
                <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-light text-foreground leading-tight mb-6">
                  {slide.headline}
                </h1>
                <p className="font-serif text-xl md:text-2xl text-foreground/70 font-light italic mb-10">
                  {slide.tagline}
                </p>
              </div>
            ))}

            {/* CTAs - always visible */}
            <div className="flex flex-col sm:flex-row gap-4 relative z-10">
              <Button variant="heroSolid" size="lg">
                Read a Free Sample
              </Button>
              <Button variant="hero" size="lg">
                Buy the Book
              </Button>
            </div>

            {/* Slide indicators */}
            <div className="flex gap-3 pt-8 relative z-10">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`h-0.5 transition-all duration-medium ease-cinematic ${
                    index === currentSlide
                      ? 'w-12 bg-primary'
                      : 'w-6 bg-foreground/30 hover:bg-foreground/50'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30">
        <div className="flex flex-col items-center gap-2 animate-bounce">
          <span className="font-sans text-xs tracking-widest uppercase text-foreground/40">Scroll</span>
          <div className="w-px h-12 bg-gradient-to-b from-foreground/40 to-transparent" />
        </div>
      </div>
    </section>
  );
};

export default HeroSlider;
