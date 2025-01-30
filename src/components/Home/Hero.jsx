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
  const [bgColor, setBgColor] = useState("transparent");
  const [bgOpacity, setBgOpacity] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % 4);
    }, 7000);  // Lengthened transition interval for a more calming effect

    const handleResize = () => {
      setIsLargeScreen(window.innerWidth >= 1024);
    };

    const handleScroll = () => {
      if (window.scrollY > 50) {
        setBgColor("rgba(0, 0, 0, 0.35)"); // Stronger overlay when scrolling
        setBgOpacity(0.8);
      } else {
        setBgColor("transparent");
        setBgOpacity(1);
      }
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("scroll", handleScroll);

    return () => {
      clearInterval(interval);
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const largeScreenBackgrounds = [background1, background2, background3, background4];
  const mobileBackgrounds = [mobileBackground1, mobileBackground2, mobileBackground3, mobileBackground4];

  const backgroundImage = isLargeScreen
    ? largeScreenBackgrounds[currentIndex]
    : mobileBackgrounds[currentIndex];

  return (
    <div
      className="relative w-full bg-fixed transition-all duration-1000 ease-in-out"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
        minHeight: isLargeScreen ? "60vh" : "30vh",
        transition: "background-color 0.3s ease, opacity 0.3s ease",
        backgroundColor: bgColor,
        opacity: bgOpacity,
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-30"></div> {/* Gradient overlay */}
      
      <div
        className="hidden lg:block absolute lg:-mt-8 left-0 top-1/2 transform -translate-y-1/2 lg:px-24 p-6 text-white"
        style={{ zIndex: 10 }}

      >
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold font-expressa text-shadow-xl animate__animated animate__fadeInUp">
          Why Russia
        </h1>
        <p className="mt-6 text-lg sm:text-xl text-shadow-lg w-3/4 animate__animated animate__fadeInUp animate__delay-1s">
          Discover the rich heritage and academic excellence of Russia's leading universities. Our blog brings you the latest insights, updates, and stories from students and academics who call Russia home.
        </p>

      </div>
      <div className="h-[15vh] md:h-[55vh] lg:h-[600px]">
        {/* Additional content can be placed here */}
      </div>
    </div>
  );
};

export default Hero;
