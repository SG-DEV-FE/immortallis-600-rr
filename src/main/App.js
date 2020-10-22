import React, { Component } from 'react';
import Header from '../pages/header/header';
import About from '../pages/about/About';
import Career from '../pages/career/Career';
import Testimonial from '../pages/career/Testimonial';
import Hobbies from '../pages/about/hobbies/hobbies';
import Footer from '../pages/footer/footer';

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
          <Testimonial />
          <Hobbies />
        </main>
        {/* 
    <Insta />
    <Gallery />*/}
        <Footer />
      </>
    );
  }
}

export default App;
