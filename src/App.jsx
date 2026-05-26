import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Products from './components/Products';
import Features from './components/Features';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';

function App() {
  return (
    <div className="app">
      <Navbar />
      <Hero />
      <section className="promo-banner-section" aria-label="HOMCOT Amazon Banner">
        <div className="container">
          <a
            href="https://www.amazon.in/s?k=HOMCOT&ref=bl_dp_s_web_0"
            target="_blank"
            rel="noopener noreferrer"
            className="promo-banner-link"
          >
            <div
              className="promo-banner-image"
              role="img"
              aria-label="HOMCOT Premium Collection Banner"
            />
          </a>
        </div>
      </section>
      <Products />
      <Features />
      <Testimonials />
      <Footer />
    </div>
  );
}

export default App;
