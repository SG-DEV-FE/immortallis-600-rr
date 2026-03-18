import React, { Component } from 'react';
import Header from '../pages/header/header';
import About from '../pages/about/About';
import Footer from '../pages/footer/footer';
import Gallery from '../pages/gallery/gallery';
import Contact from '../pages/contact/contact';

class App extends Component {
  render() {
    return (
      <>
        <Header />
        <main>
          <About />
          <Gallery />
          <Contact />
        </main>
        {/*
        <Career />
    <Insta />
    <Testimonial />
           <Hobbies />
    */}
        <Footer />
      </>
    );
  }
}

export default App;
