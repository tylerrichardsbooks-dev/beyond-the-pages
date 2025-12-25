import { useEffect, useRef, useState } from 'react';
import { Button } from '@/components/ui/button';

const SampleCTA = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative py-32 bg-twilight-light overflow-hidden film-grain"
    >
      {/* Background glow */}
      <div className="absolute inset-0 bg-gradient-radial from-primary/5 via-transparent to-transparent" />

      <div className="container mx-auto px-6 lg:px-12">
        <div
          className={`max-w-2xl mx-auto text-center transition-all duration-slow ease-cinematic ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}
        >
          <p className="font-display text-primary text-3xl mb-6">Begin the Journey</p>
          
          <h2 className="font-serif text-2xl md:text-3xl font-light text-foreground mb-8 leading-relaxed">
            Read the first chapter free
          </h2>

          <p className="font-serif text-foreground/70 mb-10">
            Step into Photine's world. Feel the heat. Hear the whispers.
          </p>

          <Button variant="heroSolid" size="xl" className="animate-glow-pulse">
            Download Sample Chapter
          </Button>
        </div>
      </div>
    </section>
  );
};

export default SampleCTA;
