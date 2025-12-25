import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Link } from 'react-router-dom';

const blogPosts = [
  {
    id: 1,
    title: 'The Woman Behind the Story',
    excerpt: 'Exploring the historical context of Photine.',
    date: 'December 2024',
    category: 'Research',
  },
  {
    id: 2,
    title: 'Writing Through Faith',
    excerpt: 'How spirituality shapes storytelling.',
    date: 'November 2024',
    category: 'Process',
  },
  {
    id: 3,
    title: 'Finding Light in Shame',
    excerpt: 'The themes that drive Beyond the Well.',
    date: 'October 2024',
    category: 'Themes',
  },
];

const Blog = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-32 pb-20">
        <section className="container mx-auto px-6 lg:px-12 py-20">
          <div className="max-w-4xl mx-auto">
            {/* Header */}
            <div className="text-center mb-20">
              <p className="font-display text-primary text-2xl mb-4">Reflections</p>
              <h1 className="font-serif text-4xl md:text-5xl font-light text-foreground">
                Blog
              </h1>
            </div>

            {/* Posts Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.map((post) => (
                <article
                  key={post.id}
                  className="group bg-twilight-light border border-border/30 p-8 transition-all duration-medium ease-cinematic hover:border-primary/30"
                >
                  <p className="font-sans text-xs tracking-widest uppercase text-primary mb-4">
                    {post.category}
                  </p>
                  <h2 className="font-serif text-xl text-foreground mb-3 group-hover:text-primary transition-colors duration-medium">
                    {post.title}
                  </h2>
                  <p className="font-serif text-foreground/60 text-sm mb-6">
                    {post.excerpt}
                  </p>
                  <p className="font-sans text-xs text-muted-foreground">
                    {post.date}
                  </p>
                </article>
              ))}
            </div>

            {/* Coming Soon Note */}
            <div className="text-center mt-16">
              <p className="font-serif text-muted-foreground italic">
                More reflections coming soon...
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Blog;
