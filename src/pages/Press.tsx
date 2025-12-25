import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import bookCover from '@/assets/book-cover.png';

const Press = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-32 pb-20">
        <section className="container mx-auto px-6 lg:px-12 py-20">
          <div className="max-w-4xl mx-auto">
            {/* Header */}
            <div className="text-center mb-20">
              <p className="font-display text-primary text-2xl mb-4">Media</p>
              <h1 className="font-serif text-4xl md:text-5xl font-light text-foreground">
                Press Kit
              </h1>
            </div>

            {/* Content Grid */}
            <div className="grid lg:grid-cols-2 gap-16">
              {/* Book Info */}
              <div className="space-y-8">
                <div>
                  <h2 className="font-serif text-2xl text-foreground mb-4">About the Book</h2>
                  <p className="font-serif text-foreground/80 leading-relaxed">
                    Beyond the Well is a work of historical fiction exploring the life of the Samaritan woman before and after her encounter with Jesus at Jacob's well. Through meticulous research and imaginative storytelling, author Lauree Brown gives voice to a woman history nearly forgot.
                  </p>
                </div>

                <div>
                  <h2 className="font-serif text-2xl text-foreground mb-4">About the Author</h2>
                  <p className="font-serif text-foreground/80 leading-relaxed">
                    Lauree Brown writes historical fiction that illuminates the strength of women through faith. Beyond the Well is her debut novel.
                  </p>
                </div>

                <div className="pt-4">
                  <Button variant="heroSolid" size="lg">
                    Download Press Kit
                  </Button>
                </div>
              </div>

              {/* Cover Image */}
              <div className="flex justify-center lg:justify-end">
                <img
                  src={bookCover}
                  alt="Beyond the Well Cover"
                  className="w-64 h-auto shadow-xl"
                />
              </div>
            </div>

            {/* Contact */}
            <div className="mt-20 pt-16 border-t border-border/30 text-center">
              <p className="font-sans text-sm tracking-widest uppercase text-muted-foreground mb-4">
                Media Inquiries
              </p>
              <p className="font-serif text-foreground">
                laureebrown1@gmail.com
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Press;
