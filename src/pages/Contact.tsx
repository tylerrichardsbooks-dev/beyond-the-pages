import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { toast } from '@/hooks/use-toast';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message sent",
      description: "Thank you for reaching out. Lauree will respond soon.",
    });
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-32 pb-20">
        <section className="container mx-auto px-6 lg:px-12 py-20">
          <div className="max-w-2xl mx-auto">
            {/* Header */}
            <div className="text-center mb-16">
              <p className="font-display text-primary text-2xl mb-4">Get in Touch</p>
              <h1 className="font-serif text-4xl md:text-5xl font-light text-foreground mb-6">
                Contact
              </h1>
              <p className="font-serif text-foreground/70">
                Questions, book club inquiries, or speaking requests—I'd love to hear from you.
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block font-sans text-sm tracking-widest uppercase text-muted-foreground mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    className="w-full bg-transparent border-b border-border/50 py-3 font-serif text-foreground focus:border-primary focus:outline-none transition-colors duration-medium"
                  />
                </div>
                <div>
                  <label className="block font-sans text-sm tracking-widest uppercase text-muted-foreground mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                    className="w-full bg-transparent border-b border-border/50 py-3 font-serif text-foreground focus:border-primary focus:outline-none transition-colors duration-medium"
                  />
                </div>
              </div>

              <div>
                <label className="block font-sans text-sm tracking-widest uppercase text-muted-foreground mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  required
                  className="w-full bg-transparent border-b border-border/50 py-3 font-serif text-foreground focus:border-primary focus:outline-none transition-colors duration-medium"
                />
              </div>

              <div>
                <label className="block font-sans text-sm tracking-widest uppercase text-muted-foreground mb-2">
                  Message
                </label>
                <textarea
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                  rows={5}
                  className="w-full bg-transparent border-b border-border/50 py-3 font-serif text-foreground focus:border-primary focus:outline-none transition-colors duration-medium resize-none"
                />
              </div>

              <div className="pt-4">
                <Button type="submit" variant="heroSolid" size="lg" className="w-full sm:w-auto">
                  Send Message
                </Button>
              </div>
            </form>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
