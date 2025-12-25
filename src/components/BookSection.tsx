import { useEffect, useRef, useState } from 'react';

const BookSection = () => {
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
      className="relative py-32 bg-twilight-light overflow-hidden"
    >
      {/* Subtle glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-gradient-radial from-primary/10 via-transparent to-transparent blur-3xl" />

      <div className="container mx-auto px-6 lg:px-12">
        <div
          className={`max-w-3xl mx-auto text-center transition-all duration-slow ease-cinematic ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}
        >
          <p className="font-display text-primary text-2xl mb-6">The Book</p>
          
          <h2 className="font-serif text-3xl md:text-4xl font-light text-foreground mb-8 leading-relaxed">
            Beyond the Well
          </h2>

          <p className="font-serif text-lg md:text-xl text-foreground/80 leading-relaxed mb-6">
            In the sun-scorched hills of Samaria, a woman named Photine carries water at midday—not for relief from heat, but to escape the whispers. A fictional retelling of the Samaritan woman's life before and after her encounter at Jacob's well.
          </p>

          <p className="font-sans text-muted-foreground italic">
            Historical Fiction · Inspirational · Faith-Based
          </p>
        </div>
      </div>
    </section>
  );
};

export default BookSection;
