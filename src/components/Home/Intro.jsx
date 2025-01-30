import React from 'react';
import 'animate.css';  // Import animate.css

const Intro = () => {
  const images = [
    {
      id: 1,
      src: 'https://studymbbsinrussia.co.in/wp-content/uploads/2021/06/MSMU.jpg',
      alt: 'Image 1',
      title: 'MSMU, Russia',
      description: 'Top-ranked university for medical programs in Russia.',
    },
    {
      id: 2,
      src: 'https://doctorsquery.com/static/images/universities/Far-Eastern-Federal-University.webp',
      alt: 'Image 2',
      title: 'Far Eastern Federal University',
      description: 'Explore medical education opportunities in Russia.',
    },
    {
      id: 3,
      src: 'https://www.justmbbs.com/img/college/russia/rostov-state-medical-university-banner.jpg',
      alt: 'Image 3',
      title: 'Rostov State Medical University',
      description: 'One of the leading medical universities in Russia.',
    },
    {
      id: 4,
      src: 'https://avatars.mds.yandex.net/i?id=9600986cd3c762269cce8bacd8b487aa_l-9144733-images-thumbs&n=13',
      alt: 'Image 4',
      title: 'Perm State Medical University (PSMU)',
      description: 'Established in 1916, is a prominent medical institution located in Perm, Russia.',
    },
  ];

  return (
    <div className="flex justify-center items-center min-h-screen lg:-mt-40 bg-gray-50">
      <div className="w-[350px] lg:w-[1200px] bg-white rounded-t-2xl -mt-24 text-center py-10 z-20">
        <h1 className="text-2xl lg:text-4xl font-expressa text-purple-400 font-semibold mb-6 animate__animated animate__fadeInDown animate__delay-1s">
          Welcome to Our Blog Website
        </h1>

        <p className="lg:text-lg px-4 md:px-0 text-gray-700 mb-12 animate__animated animate__fadeInDown animate__delay-1.5s">
          Explore top medical universities around the world and take your education to the next level. Discover more below!
        </p>

        <div className="grid grid-cols-1 px-4 sm:grid-cols-2 lg:grid-cols-4 shadow-lg py-4 gap-8 px-4">
          {images.map((image) => (
            <div
              key={image.id}
              className="relative flex flex-col max-w-xs rounded-xl shadow-xl overflow-hidden group mx-auto"
            >
              <div className="z-10 h-80 w-full border border-gray-200 opacity-80 transition duration-300 ease-in-out group-hover:opacity-100 dark:border-gray-700 dark:opacity-70">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="block w-full h-full object-cover object-center transition duration-300 group-hover:scale-110"
                />
              </div>
              <div className="absolute bottom-0 z-20 p-4 transition duration-300 ease-in-out group-hover:-translate-y-1 group-hover:translate-x-3 group-hover:scale-110">
                {/* Title first with no delay */}
                <h2 className="text-xl text-left font-semibold text-white shadow-xl opacity-0 animate__animated animate__fadeInDown animate__delay-0.5s">
                  {image.title}
                </h2>
                {/* Description after title with longer delay */}
                <p className="text-sm text-left text-gray-200 shadow-xl opacity-0 animate__animated animate__fadeInDown animate__delay-1s">
                  {image.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Intro;
