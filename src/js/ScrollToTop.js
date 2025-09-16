import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';
import '../styles/style.css';
import '../styles/responsive.css';

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [fillHeight, setFillHeight] = useState(0);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const documentHeight = Math.max(
        document.body.scrollHeight,
        document.body.offsetHeight,
        document.documentElement.clientHeight,
        document.documentElement.scrollHeight,
        document.documentElement.offsetHeight
      );
      const windowHeight = window.innerHeight;
      const scrollableHeight = documentHeight - windowHeight;
      
      // Calculate scroll percentage more accurately
      const scrollPercent = scrollableHeight > 0 ? (scrollTop / scrollableHeight) * 100 : 0;
      
      // Ensure the percentage is between 0 and 100
      const clampedPercent = Math.min(Math.max(scrollPercent, 0), 100);
      
      // Show button when scrolled more than 300px
      setIsVisible(scrollTop > 300);
      
      // Set fill height based on scroll percentage
      setFillHeight(clampedPercent);
    };

    // Initial call to set correct state
    handleScroll();
    
    // Add scroll event listener with throttling for better performance
    let ticking = false;
    const throttledHandleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', throttledHandleScroll);
    window.addEventListener('resize', handleScroll); // Handle window resize
    
    return () => {
      window.removeEventListener('scroll', throttledHandleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, []);

  return (
    isVisible && (
      <div className="back-to-top" onClick={scrollToTop}>
        <div className="water-fill" style={{ height: `${fillHeight}%` }}>
          <div className="wave wave1"></div>
          <div className="wave wave2"></div>
        </div>
        <span className="text">
          <FontAwesomeIcon icon={faArrowUp} />
        </span>
      </div>
    )
  );
};

export default ScrollToTop;