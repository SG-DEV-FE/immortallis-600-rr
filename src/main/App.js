import React from 'react';
import Header from '../pages/header/header';
import About from '../pages/about/About';
import Career from '../pages/career/Career';
import Testimonial from '../pages/career/Testimonial';

function App() {
  return (
    <>
      <Header />
      <main>
        <About />
        <Career />
        <Testimonial />
      </main>
      {/* 
    <Testimonial />
    <Career />
    <Insta />
    <Footer /> */}
    </>
  );
}

export default App;
