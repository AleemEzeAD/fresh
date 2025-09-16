import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Layouts/Header';
import Footer from './components/Layouts/Footer';
import Preloader from './components/Preloader';
import Hero from './pages/Hero';
import Popular from './pages/Popular';
import Products from './pages/Products';
import Natural from './pages/Natural';
import Testimonial from './pages/Testimonial';
import Latest from './pages/Latest';
import Seller from './pages/Seller';
import Newsletter from './pages/Newsletter';
import Blogs from './pages/Blogs';


function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading (replace with actual logic if needed)
    const timer = setTimeout(() => setLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  if (loading) return <Preloader />;

  return (
    <div>
      <Header />
      <Routes>
        <Route
          path="/" element={
            <>
              <Hero />
              <Popular />
              <Products />
              <Natural />
              <Testimonial />
              <Latest />
              <Seller />
              <Newsletter />
              <Blogs />
            </>
          }
        />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
