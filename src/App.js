import React, { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [isBlackSectionVisible, setIsBlackSectionVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;

      if (scrollPosition >= windowHeight * 0.8) {
        setIsBlackSectionVisible(true);
      } else {
        setIsBlackSectionVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="App">
      <div className={`white-section ${isBlackSectionVisible ? "fade-out" : ""}`}>
        <h1>White Section</h1>
      </div>
      <div className={`black-section ${isBlackSectionVisible ? "fade-in" : ""}`}>
        <h1>Black Section</h1>
      </div>
    </div>
  );
}

export default App;
