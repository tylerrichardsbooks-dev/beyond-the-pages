import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import authorImage from '@/assets/author-headshot.jpg';

const AuthorTeaser = () => {
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
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 items-center max-w-5xl mx-auto">
          {/* Image */}
          <div
            className={`transition-all duration-slow ease-cinematic ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'
            }`}
          >
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-radial from-primary/10 via-transparent to-transparent blur-2xl" />
              <img
                src={authorImage}
                alt="Lauree Brown"
                className="relative w-full max-w-sm mx-auto lg:mx-0 aspect-[3/4] object-cover object-top grayscale hover:grayscale-0 transition-all duration-slow"
                style={{
                  filter: 'drop-shadow(0 20px 40px rgba(0, 0, 0, 0.3))',
                }}
              />
            </div>
          </div>

          {/* Content */}
          <div
            className={`transition-all duration-slow ease-cinematic ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'
            }`}
            style={{ transitionDelay: '200ms' }}
          >
            <p className="font-display text-primary text-2xl mb-4">The Author</p>
            <h2 className="font-serif text-3xl md:text-4xl font-light text-foreground mb-6">
              Lauree Brown
            </h2>
            <p className="font-serif text-lg text-foreground/80 leading-relaxed mb-8">
              Lauree writes to give voice to women whose stories history almost forgot—fierce, fallible, and finding their way toward light.
            </p>
            <Link to="/about">
              <Button variant="elegant" className="font-sans tracking-widest uppercase text-sm">
                Learn More
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AuthorTeaser;
