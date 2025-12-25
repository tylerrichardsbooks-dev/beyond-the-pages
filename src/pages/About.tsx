import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import authorImage from '@/assets/author-headshot.jpg';

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-32 pb-20">
        {/* Hero */}
        <section className="container mx-auto px-6 lg:px-12 py-20">
          <div className="grid lg:grid-cols-2 gap-16 items-center max-w-5xl mx-auto">
            {/* Image */}
            <div className="flex justify-center lg:justify-start">
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-radial from-primary/15 via-transparent to-transparent blur-2xl" />
                <img
                  src={authorImage}
                  alt="Dr. Lauree Brown"
                  className="relative w-full max-w-md aspect-[3/4] object-cover object-top"
                  style={{
                    filter: 'drop-shadow(0 20px 40px rgba(0, 0, 0, 0.4))',
                  }}
                />
              </div>
            </div>

            {/* Content */}
            <div className="space-y-8">
              <div>
                <p className="font-display text-primary text-2xl mb-4">About the Author</p>
                <h1 className="font-serif text-4xl md:text-5xl font-light text-foreground">
                  Dr. Lauree Brown
                </h1>
              </div>

              <p className="font-serif text-lg text-foreground/80 leading-relaxed">
                Dr. Lauree Brown writes to give voice to the women whose stories history almost forgot. With Beyond the Well, she invites readers into the world of a Samaritan woman—fierce, fallible, and finding her way toward light. Through careful research and deep empathy, Dr. Brown crafts narratives that feel both ancient and urgently present.
              </p>

              <blockquote className="border-l-2 border-primary/50 pl-6 py-2">
                <p className="font-serif text-lg text-foreground/70 italic">
                  "When I met Photine on the page, she would not leave me alone. Writing her felt like pulling a thread that led to every woman I have ever known."
                </p>
              </blockquote>

              <div className="pt-4 flex flex-col sm:flex-row gap-4">
                <Button variant="hero" size="lg">
                  Book Clubs & Speaking
                </Button>
                <Button variant="outline" size="lg">
                  Contact Lauree
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;
