"use client";

import { useEffect } from "react";

export default function ScrollToTop() {
  useEffect(() => {
    // Make topFunction globally available
    (window as any).topFunction = () => {
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
    };

    // Handle scroll visibility
    const handleScroll = () => {
      const mybutton = document.getElementById("backTop");
      if (document.body.scrollTop > 250 || document.documentElement.scrollTop > 250) {
        if (mybutton) mybutton.style.display = "block";
      } else {
        if (mybutton) mybutton.style.display = "none";
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <button 
      onClick={() => (window as any).topFunction()} 
      id="backTop" 
      title="Go to top"
      style={{ display: 'none' }}
    >
      <i className="fa fa-arrow-up" />
    </button>
  );
}
