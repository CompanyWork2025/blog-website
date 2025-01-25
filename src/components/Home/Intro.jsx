import React from 'react';

const ImageGridComponent = () => {
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
      src: 'https://smapse.com/storage/2019/03/converted/825_585_unicamillus-medical-university-3.jpg',
      alt: 'Image 4',
      title: 'UNICAMILLUS Medical University',
      description: 'Study in a world-class medical university in Europe.',
    },
  ];

  return (
    <div className="text-center py-10">
      <h1 className="text-2xl lg:text-4xl text-blue-400 font-semibold mb-6">Welcome to Our Website</h1>

      {/* Paragraph */}
      <p className="lg:text-lg text-gray-700 mb-12">
        Explore top medical universities around the world and take your education to the next level. Discover more below!
      </p>

      <div className="flex flex-wrap justify-center gap-8">
        {images.map((image) => (
          <div
            key={image.id}
            className="relative flex flex-col max-w-xs rounded-xl shadow-xl overflow-hidden group"
          >
            <div className="z-10 h-96 w-full border border-gray-200 opacity-80 transition duration-300 ease-in-out group-hover:opacity-100 dark:border-gray-700 dark:opacity-70">
              <img
                src={image.src}
                alt={image.alt}
                className="animate-fade-in block w-full h-full object-cover object-center opacity-100 transition duration-300 group-hover:scale-110"
                style={{
                  objectFit: 'cover',
                  objectPosition: 'center center', // Ensures the image is centered.
                }}
              />
            </div>
            <div className="absolute bottom-0 z-20 p-4 transition duration-300 ease-in-out group-hover:-translate-y-1 group-hover:translate-x-3 group-hover:scale-110">
              <h2 className="text-xl text-left font-semibold text-white shadow-xl">{image.title}</h2>
              <p className="text-sm text-gray-200 shadow-xl">{image.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageGridComponent;
