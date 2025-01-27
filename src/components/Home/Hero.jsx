import React, { useState, useEffect } from "react";
import background1 from "../../assets/3.jpg";
import background2 from "../../assets/4.jpg";
import background3 from "../../assets/5.avif";
import background4 from "../../assets/6.webp";
import mobileBackground1 from "../../assets/3.jpg";
import mobileBackground2 from "../../assets/4.jpg";
import mobileBackground3 from "../../assets/5.avif";
import mobileBackground4 from "../../assets/6.webp";

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth >= 1024);

  useEffect(() => {
    // Switch background every 5 seconds
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % 4); // Cycle through 4 images
    }, 5000);

    // Update screen size on resize
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth >= 1024);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      clearInterval(interval);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const largeScreenBackgrounds = [background1, background2, background3, background4];
  const mobileBackgrounds = [mobileBackground1, mobileBackground2, mobileBackground3, mobileBackground4];

  const backgroundImage = isLargeScreen
    ? largeScreenBackgrounds[currentIndex]
    : mobileBackgrounds[currentIndex];

  return (
    <div
      className="relative w-full transition-all duration-1000 ease-in-out"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: isLargeScreen ? "cover" : "fit",
        backgroundPosition: "center",
        backgroundAttachment: isLargeScreen ? "scroll" : "fixed",
        minHeight: isLargeScreen ? "400px" : "20vh",
      }}
    >
      {/* Left-aligned Text */}
      <div
        className="hidden lg:block absolute left-0 top-1/2 transform -translate-y-1/2 lg:px-24 p-6 text-white"
        style={{ zIndex: 10 }}
      >
        <h1 className="text-2xl sm:text-4xl md:text-6xl font-expressa font-semibold">
          Why Russia
        </h1>
        <p className="mt-4 text-lg sm:text-xl">
          Discover the rich heritage and academic excellence of Russia's leading universities. Our blog brings you the latest insights, updates, and stories from students and academics who call Russia home. 
        </p>

      </div>
      <div
        className={`h-[15vh] md:h-[55vh] lg:h-[600px]`}
      >
        {/* Additional content can be placed here */}
      </div>
    </div>
  );
};

export default Hero;
