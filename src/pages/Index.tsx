import Header from '@/components/Header';
import HeroSlider from '@/components/HeroSlider';
import BookSection from '@/components/BookSection';
import WomanSection from '@/components/WomanSection';
import ThemesSection from '@/components/ThemesSection';
import AuthorTeaser from '@/components/AuthorTeaser';
import SampleCTA from '@/components/SampleCTA';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSlider />
        <BookSection />
        <WomanSection />
        <ThemesSection />
        <AuthorTeaser />
        <SampleCTA />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
