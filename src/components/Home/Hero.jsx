import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import bgImage from '../../assets/banner.png';  // Adjust the path according to where the image is stored in the src folder
import { FaArrowRight } from "react-icons/fa";
import { motion } from "framer-motion";

// Sample images for the carousel
const images = [
  {
    id: 1,
    src: "https://www.rostgmu.in/assets/logo-Dg4MTXqr.png",
    alt: "First image description",
  },
  {
    id: 2,
    src: "https://www.eeua.ru/images/CFU_logo.png",
    alt: "Second image description",
  },
  {
    id: 3,
    src: "https://i0.wp.com/vetrinichayam.com/wp-content/uploads/2021/05/vetrinichayam-logo.png",
    alt: "Third image description",
  },
];

export default function HeroSection() {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div 
  className="bg-cover bg-center bg-no-repeat relative py-36 px-5" 
  style={{ backgroundImage: `url(${bgImage})` }}
>
      {/* Bottom clip with gradient effect that moves from center outwards */}
      <div className="clip-bottom-arrow absolute inset-x-0 bottom-0 bg-white" />

      <div className="container mx-auto px-24 flex flex-col lg:flex-row items-center relative z-10">
        <div className="text-center lg:text-left -mt-20 lg:-mt-14 max-w-4xl">
          <h1 className="text-4xl lg:text-5xl mb-6 lg:mb-0 font-serif font-bold leading-tight lg:text-left text-white uppercase">
            Discover Opportunities at <br /> Top Universities in Russia
          </h1>
          <p className="text-lg mb-8 text-white mt-8 max-w-2xl italic">
            Explore our blog to learn more about academic programs, campus life, and the
            rich cultural experiences offered by Russia's leading universities. Stay
            informed with the latest updates and guidance for international students.
          </p>

          <div className="flex justify-center lg:justify-start gap-4">
            <Link to="/university"> {/* Link wraps the button */}
              <button className="bg-purple-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg shadow-md flex items-center gap-2">
                Explore Blogs
                <FaArrowRight className="w-5 h-5" />
              </button>
            </Link>
          </div>
        </div>

        <div className="relative mt-10 lg:mt-0 lg:ml-10 w-full max-w-sm h-64">
          {/* Map through images and create an animated image carousel */}
          {images.map((image, index) => (
            <motion.div
              key={image.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{
                opacity: currentImage === index ? 1 : 0,
                y: currentImage === index ? 0 : 20,
              }}
              transition={{ duration: 0.5 }}
              className="absolute inset-0 flex justify-center items-center"
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full max-w-xs mx-auto rounded-lg"
              />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Custom styling for the background clip (starts from the center and goes out) */}
      <style>{`
        .clip-bottom-arrow {
          clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
          height: 50px; /* You can adjust this value for a bigger or smaller clip effect */
        }
      `}</style>
    </div>
  );
}
