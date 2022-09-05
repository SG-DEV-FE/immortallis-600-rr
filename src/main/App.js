import React, { Component } from 'react';
import Header from '../pages/header/header';
import About from '../pages/about/About';
import Career from '../pages/career/Career';
import Footer from '../pages/footer/footer';
import Gallery from '../pages/gallery/gallery';
import Contact from '../pages/contact/contact';

class App extends Component {
  componentDidMount() {
    const script = document.createElement('script');
    script.async = true;
    script.src = '/constants/cookieBanner.js';
    document.head.appendChild(script);
  }
  render() {
    return (
      <>
        <Header />
        <main>
          <About />
          <Career />
          <Gallery />
          <Contact />
        </main>
        {/* 
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
