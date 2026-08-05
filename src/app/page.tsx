import Header from '@/components/sections/Header';
import About from '@/components/sections/About';
import Gallery from '@/components/sections/Gallery';
import Contact from '@/components/sections/Contact';
import Footer from '@/components/sections/Footer';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <About />
        <Gallery />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
