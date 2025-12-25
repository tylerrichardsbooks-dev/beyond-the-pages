import { useEffect, useRef, useState } from 'react';

const WomanSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative py-32 bg-background overflow-hidden"
    >
      {/* Decorative line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-24 bg-gradient-to-b from-border/50 to-transparent" />

      <div className="container mx-auto px-6 lg:px-12">
        <div
          className={`max-w-2xl mx-auto text-center transition-all duration-slow ease-cinematic ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}
          style={{ transitionDelay: '200ms' }}
        >
          <p className="font-display text-primary text-2xl mb-6">The Woman</p>
          
          <h2 className="font-serif text-3xl md:text-4xl font-light text-foreground mb-8">
            Photine
          </h2>

          <p className="font-serif text-lg md:text-xl text-foreground/80 leading-relaxed italic">
            "She was fierce and fallible, practical and raw—someone who survived by wit and grit."
          </p>

          <div className="mt-12 flex justify-center">
            <div className="w-24 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WomanSection;
