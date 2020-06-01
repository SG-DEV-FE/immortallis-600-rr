import React from 'react';
import Header from '../pages/header/header';
import About from '../pages/about/About';
import Career from '../pages/career/Career';
import Testimonial from '../pages/career/Testimonial';
import Hobbies from '../pages/about/hobbies/hobbies';
import Footer from '../pages/footer/footer';

function App() {
  return (
    <>
      <Header />
      <main>
        <About />
        <Career />
        <Testimonial />
        <Hobbies />
      </main>
      {/* 
    <Insta />*/}
      <Footer />
    </>
  );
}

export default App;
