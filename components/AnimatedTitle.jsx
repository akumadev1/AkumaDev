"use client";

import { useEffect } from "react";

const AnimatedTitle = () => {
  useEffect(() => {
    const fullText = "AkumaDev";
    let currentIndex = 1; 
    let reverse = false;

    const updateTitle = () => {
      if (!reverse) {
        currentIndex++;
        if (currentIndex > fullText.length) {
          reverse = true; 
        }
      } else {
        currentIndex--;
        if (currentIndex === 1) {
          reverse = false; 
        }
      }

      document.title = fullText.substring(0, currentIndex);
    };

    const interval = setInterval(updateTitle, 700); 

    return () => clearInterval(interval); 
  }, []);

  return null; 
};

export default AnimatedTitle;
