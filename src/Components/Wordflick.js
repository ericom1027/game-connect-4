import React, { useState, useEffect } from "react";

const Typewriter = () => {
  const text = "Powered by: EMD IT Solutions...";
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const typingEffect = setTimeout(() => {
      if (currentIndex < text.length) {
        setDisplayText((prevText) => prevText + text[currentIndex]);
        setCurrentIndex((prevIndex) => prevIndex + 1);
      }
    }, 150);

    return () => clearTimeout(typingEffect);
  }, [currentIndex, text]);

  return (
    <div>
      <p>{displayText}</p>
    </div>
  );
};

export default Typewriter;
