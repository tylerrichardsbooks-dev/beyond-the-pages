import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import bookCover from '@/assets/book-cover.png';

const Book = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-32 pb-20">
        {/* Hero */}
        <section className="container mx-auto px-6 lg:px-12 py-20">
          <div className="grid lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
            {/* Book Cover */}
            <div className="flex justify-center">
              <div className="relative">
                <div className="absolute -inset-8 bg-gradient-radial from-primary/20 via-transparent to-transparent blur-2xl animate-glow-pulse" />
                <img
                  src={bookCover}
                  alt="Beyond the Well by Lauree Brown"
                  className="relative w-72 md:w-80 lg:w-96 h-auto shadow-2xl animate-float"
                  style={{
                    filter: 'drop-shadow(0 25px 50px rgba(0, 0, 0, 0.5))',
                  }}
                />
              </div>
            </div>

            {/* Content */}
            <div className="space-y-8">
              <div>
                <p className="font-display text-primary text-2xl mb-4">Beyond the Well</p>
                <h1 className="font-serif text-4xl md:text-5xl font-light text-foreground mb-6">
                  A Novel Inspired by the Woman at the Well
                </h1>
              </div>

              <div className="space-y-6">
                <p className="font-serif text-lg text-foreground/80 leading-relaxed">
                  Before the encounter that changed everything, there was a life—complicated, wounded, and desperately real. Photine navigates a world of whispers and survival, carrying burdens no woman should bear alone.
                </p>
                <p className="font-serif text-lg text-foreground/80 leading-relaxed">
                  This is her story—fierce and fallible, practical and raw. A journey from shame to an unexpected moment of grace at Jacob's well.
                </p>
              </div>

              <div className="pt-4">
                <p className="font-serif text-foreground/60 italic text-lg">
                  "This story is for readers who seek truth wrapped in beauty, and hope born from the ashes of shame."
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 pt-6">
                <Button variant="heroSolid" size="lg">
                  Buy the Book
                </Button>
                <Button variant="hero" size="lg">
                  Read a Free Sample
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Divider */}
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-xs mx-auto h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
        </div>

        {/* Details */}
        <section className="container mx-auto px-6 lg:px-12 py-20">
          <div className="max-w-2xl mx-auto text-center">
            <p className="font-sans text-sm tracking-widest uppercase text-muted-foreground mb-8">
              Book Details
            </p>
            <div className="grid grid-cols-3 gap-8">
              <div>
                <p className="font-serif text-2xl text-primary mb-2">Fiction</p>
                <p className="font-sans text-sm text-muted-foreground">Genre</p>
              </div>
              <div>
                <p className="font-serif text-2xl text-primary mb-2">2025</p>
                <p className="font-sans text-sm text-muted-foreground">Release</p>
              </div>
              <div>
                <p className="font-serif text-2xl text-primary mb-2">Faith</p>
                <p className="font-sans text-sm text-muted-foreground">Theme</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Book;
