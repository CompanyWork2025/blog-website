import { useState } from 'react';
import { Link } from 'react-router-dom';

function University() {
  const [searchTerm, setSearchTerm] = useState(""); // Search term for filtering
  const [currentPage, setCurrentPage] = useState(1); // State to track the current page
  const postsPerPage = 8; // Define how many posts per page

  // Array of blog cards data
  const blogCards = [
    {
      id: 1,
      title: "Rostov University: A Leading Educational Hub in Russia",
      description: "Explore Rostov University, one of Russia's top institutions offering world-class education, cutting-edge research, and diverse academic programs. Learn about its rich history, innovative approach to learning, and vibrant student life.",
      authorImage: "https://worldwidecolleges.com/wp-content/uploads/2022/03/logo252.png",
      image: "https://satyamevedu.co.in/wp-content/uploads/2023/04/WhatsApp-Image-2022-05-10-at-12.18.11-AM-1024x683.jpeg",
      url: "https://www.rostgmu.in/",
    },
    {
      id: 2,
      title: "Bashkir State Medical University: A Premier Medical Institution in Russia",
      description: "Bashkir State Medical University in Ufa, Russia, offers exceptional medical programs. With state-of-the-art facilities and experienced faculty, it stands out as a leading institution for aspiring medical professionals from around the world.",
      authorImage: "https://radicaleducation.in/wp-content/uploads/2024/05/Artboard-1-100.jpg",
      image: "https://www.ruseducation.in/wp-content/uploads/2022/01/Bashkir-State-Medical-University.webp",
      url: "https://bashgmu.ru/en/",
    },
    {
      id: 3,
      title: "Crimea University: Excellence in Higher Education in Russia",
      description: "Crimea University, located in the heart of Crimea, Russia, offers a broad range of academic programs with a strong focus on research and innovation. Known for its diverse student body and distinguished faculty, it prepares students for global opportunities in various fields.",
      authorImage: "https://radicaleducation.in/wp-content/uploads/2024/05/Artboard-1-100.jpg",
      image: "https://www.ruseducation.in/wp-content/uploads/2022/01/Crimea-Federal-University.webp",
      url: "https://eng.cfuv.ru/",
    },
    {
      id: 4,
      title: "Saint Petersburg State University: Russia's Top Academic Destination",
      description: "Saint Petersburg State University is one of Russia's oldest and most prestigious institutions. With a legacy of excellence in various fields, it attracts students globally for its highly respected programs in humanities, science, and engineering.",
      authorImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvn6EfY6nsur1_DybAZqGzbaJWpNeH9hyWQQ&s",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFnaWh38SY7rlrqq_Pa5WMMP93Q_Bnc5RfeQ&s",
      url: "https://english.spbu.ru/",
    },
    {
      id: 5,
      title: "Moscow State University: Leading Education in Russia and Beyond",
      description: "Moscow State University is Russia's largest and most influential educational institution, renowned for its exceptional research, science programs, and globally recognized faculty. Learn about its various specialized academic departments.",
      authorImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSG8KS_x0o8jd3a7Po00tt1Sl85TXwtz2N9CQ&s",
      image: "https://images.shiksha.com/mediadata/images/1423632114phpSVpSVi_g.jpg",
      url: "https://msu.ru/en/",
    },
    {
      id: 6,
      title: "Tomsk State University: Innovation and Research at Its Core",
      description: "Known for its strong emphasis on scientific research and innovation, Tomsk State University is a leading institution for students aiming to engage in cutting-edge technological development and research. Explore what makes this university a standout in the Russian academic landscape.",
      authorImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmmee60G2-AQRk1C_ZKC02ZmHEsKgPRnWSTQ&s",
      image: "https://blog.rmgoe.org/wp-content/uploads/2022/06/Tomsk-State-University-Russia.webp",
      url: "https://en.tsu.ru/",
    },
    {
      id: 7,
      title: "Novosibirsk State University: The Heart of Science in Siberia",
      description: "Novosibirsk State University is renowned for its specialized focus on science and engineering. Located in Siberia, this prestigious university has gained international acclaim for its outstanding research programs and scientific contributions.",
      authorImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLrXtOEX-VY96R4mL2Ke0sUu8eKKjdmZFhFA&s",
      image: "https://www.rusvuz.com/wp-content/uploads/2020/05/Novosibirsk-State-University-1024x742.jpg",
      url: "https://english.nsu.ru/",
    },
    {
      id: 8,
      title: "Kazan Federal University: Russia’s Premier Institution for International Students",
      description: "Kazan Federal University stands out for its comprehensive and inclusive educational approach, attracting students worldwide. Offering top-tier programs in the arts, sciences, and engineering, this university plays a major role in higher education across Russia and abroad.",
      authorImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmwpT87t_KxKQ5zjbDV8WuJVgwA9XeKvEhIg&s",
      image: "https://studypalacehub.com/wp-content/uploads/2023/03/cr2.webp",
      url: "https://eng.kpfu.ru/",
    },
    {
      id: 9,
      title: "Ural Federal University: Academic Excellence and Innovation",
      description: "Ural Federal University, located in Yekaterinburg, is one of Russia’s major centers for research and higher education, offering innovative programs in science, engineering, and technology. Learn about its state-of-the-art facilities and collaborative international programs.",
      authorImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOsBZ-knGDQ8_W1NiFqBonexPMldaIWE8mJA&s",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThX_hIpllds7jW783nLyN-j9rYpjmDqlZWHg&s",
      url: "https://urfu.ru/en/",
    }
  ];

  // Filter blogCards based on the search term
  const filteredBlogCards = blogCards.filter((card) =>
    card.title.toLowerCase().includes(searchTerm.toLowerCase()) || card.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Get the current page's blog posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = filteredBlogCards.slice(indexOfFirstPost, indexOfLastPost);

  // Handle the Next and Previous button logic
  const nextPage = () => {
    if (currentPage < Math.ceil(filteredBlogCards.length / postsPerPage)) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div className="min-h-screen lg:px-20 bg-gray-100 py-8">
      <div className="text-center mb-12">
        <h1 className="lg:text-5xl text-2xl font-bold text-blue-400 mb-6">University Blog: Explore Top Universities</h1>
        <p className="lg:text-xl text-md px-4 text-gray-700 mb-8">
          Discover the prestigious universities in Russia with a rich history, top-tier programs, cutting-edge research, and opportunities for students from all around the world. Dive into the world of academic excellence, innovation, and growth.
        </p>

        {/* Search Bar */}
        <input
          type="text"
          placeholder="Search blogs..."
          className="px-4 py-2 w-80 lg:w-1/3 border border-2 rounded-md"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {/* Grid Layout for Blog Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 px-8">
        {/* Mapping through filtered blogCards array */}
        {currentPosts.map((card, index) => (
          <div key={index} className="bg-white shadow-lg rounded-lg overflow-hidden flex flex-col">
            <img
              src={card.image}
              alt="Blog image"
              className="w-full h-48 object-cover"
            />
            <div className="p-4 flex-1">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">{card.title}</h2>
              <p className="text-gray-600 text-sm mb-4">{card.description}</p>
            </div>
            {/* Footer with author image and See More link */}
            <div className="flex justify-between items-center p-4 border-t">
              <div className="w-10 h-10 rounded-full overflow-hidden">
                <img
                  src={card.authorImage}
                  alt="Author"
                  className="w-full h-full object-cover"
                />
              </div>
              <Link
                to={`/card/${card.id}/${encodeURIComponent(card.url)}`} // Concatenate card.id with the dynamic URL part
                className="text-blue-500 hover:text-blue-700 text-sm"
              >
                See More
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination Controls */}
      <div className="flex justify-center items-center mt-8">
        <button
          onClick={prevPage}
          className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 mx-2"
          disabled={currentPage === 1}
        >
          Previous
        </button>
        <button
          onClick={nextPage}
          className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 mx-0"
          disabled={currentPage === Math.ceil(filteredBlogCards.length / postsPerPage)}
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default University;
