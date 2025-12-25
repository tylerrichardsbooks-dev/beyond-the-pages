import { useEffect, useRef, useState } from 'react';
import { Heart, Sparkles, Sun } from 'lucide-react';

const themes = [
  {
    icon: Heart,
    title: 'Redemption',
    description: 'Finding grace in the aftermath of shame.',
  },
  {
    icon: Sparkles,
    title: 'Womanhood',
    description: 'Strength forged through survival and choice.',
  },
  {
    icon: Sun,
    title: 'Faith',
    description: 'Light that meets us at our darkest hour.',
  },
];

const ThemesSection = () => {
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
      <div className="container mx-auto px-6 lg:px-12">
        <div
          className={`text-center mb-16 transition-all duration-slow ease-cinematic ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}
        >
          <p className="font-display text-primary text-2xl mb-4">Core Themes</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-12 max-w-4xl mx-auto">
          {themes.map((theme, index) => (
            <div
              key={theme.title}
              className={`text-center transition-all duration-slow ease-cinematic ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
              }`}
              style={{ transitionDelay: `${(index + 1) * 200}ms` }}
            >
              <div className="inline-flex items-center justify-center w-16 h-16 mb-6 border border-primary/30 rounded-full">
                <theme.icon className="w-7 h-7 text-primary" strokeWidth={1.5} />
              </div>
              <h3 className="font-serif text-xl text-foreground mb-3">{theme.title}</h3>
              <p className="font-sans text-sm text-muted-foreground leading-relaxed">
                {theme.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ThemesSection;
