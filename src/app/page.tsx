import Header from '@/components/sections/Header';
import Personality from '@/components/sections/Personality';
import Skills from '@/components/sections/Skills';
import Career from '@/components/sections/Career';
import Testimonials from '@/components/sections/Testimonials';
import Gallery from '@/components/sections/Gallery';
import Contact from '@/components/sections/Contact';
import Footer from '@/components/sections/Footer';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Personality />
        <Skills />
        <Career />
        <Testimonials />
        <Gallery />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
