import React from 'react';
import Header from '../pages/header/header';
import About from '../pages/about/About';
import Contact from '../pages/contact/contact';
import Footer from '../pages/footer/footer';

const HomePage = () => {
  return (
    <>
      <Header />
      <main>
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  );
};

export default HomePage;
