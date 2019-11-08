import React from 'react';
import Header from '../pages/header/header';
import About from '../pages/about/About';
import Career from '../pages/career/Career';

function App() {
  return (
    <>
      <Header />
      <main>
        <About />
        <Career />
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
