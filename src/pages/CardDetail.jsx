import React from 'react';
import { useParams } from 'react-router-dom';

const CardDetail = () => {
  const { id, url } = useParams();

  // Blog card data
  const blogCards = [
    {
      id: 1,
      title: "Rostov University: A Leading Educational Hub in Russia",
      description: "Explore Rostov University, one of Russia's top institutions offering world-class education, cutting-edge research, and diverse academic programs.",
      authorImage: "https://worldwidecolleges.com/wp-content/uploads/2022/03/logo252.png",
      image: "https://nixstudyabroad.com/wp-content/uploads/2022/01/rostov-state-medical-university.jpg",
      additionalInfo: "Rostov State Medical University is one of Russia's leading institutions of higher education, renowned for its outstanding programs in medicine and healthcare. Founded in 1915, this prestigious university has a rich history of excellence in medical training, research, and clinical practice. Situated in the vibrant city of Rostov-on-Don, the university boasts state-of-the-art facilities and a global reputation for educating some of the best doctors and healthcare professionals in the country and beyond.",
      visitUrl: "https://www.rostgmu.in/"
    },
    {
        id: 2,
        title: "Bashkir State Medical University: A Premier Medical Institution in Russia",
        description: "Bashkir State Medical University is famous for exceptional medical programs. It has state-of-the-art facilities for aspiring medical professionals.",
        authorImage: "https://radicaleducation.in/wp-content/uploads/2024/05/Artboard-1-100.jpg",
        image: "https://www.ruseducation.in/wp-content/uploads/2022/01/Bashkir-State-Medical-University.webp",
        additionalInfo: "Founded in 1932, Bashkir State Medical University has become a significant leader in medical education, with its reputation for providing cutting-edge research in fields like microbiology, toxicology, and public health. It is equipped with state-of-the-art facilities, including modern laboratories and clinical settings, offering students opportunities to gain hands-on experience. With numerous collaborations with international institutions and active clinical research centers, Bashkir Medical University offers a range of specialized programs, from bachelor's degrees to postgraduate education, making it a renowned center for healthcare education in Russia and beyond.",
        visitUrl: "https://bashgmu.ru/en/"
      },
      {
        id: 3,
        title: "Crimea University: Excellence in Higher Education in Russia",
        description: "Crimea University offers diverse academic programs with a strong focus on research and innovation, aiming to prepare students for global opportunities.",
        authorImage: "https://radicaleducation.in/wp-content/uploads/2024/05/Artboard-1-100.jpg",
        image: "https://www.ruseducation.in/wp-content/uploads/2022/01/Crimea-Federal-University.webp",
        additionalInfo: "Crimea University, a prestigious institution located in the historic city of Simferopol, stands at the forefront of providing high-quality education in a wide range of fields. Known for its rich history, it offers an ideal environment for academic excellence, cultural exchange, and international collaboration. With a well-rounded curriculum that emphasizes innovation, research, and global awareness, Crimea University attracts students from all over the world. Specialized departments in engineering, arts, computer science, and social sciences ensure students are well-prepared for their future careers, providing both theoretical knowledge and practical skills. Students also have access to a variety of cultural programs, ensuring a holistic educational experience.",
        visitUrl: "https://eng.cfuv.ru/"
      },
      {
        id: 4,
        title: "Saint Petersburg State University: Russia's Top Academic Destination",
        description: "Saint Petersburg State University is renowned for its prestigious programs in humanities, science, and engineering.",
        authorImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvn6EfY6nsur1_DybAZqGzbaJWpNeH9hyWQQ&s",
        image: "https://keystoneacademic-res.cloudinary.com/image/upload/f_auto/q_auto/g_auto/c_fill/w_1280/element/63/63872_cover.jpg",
        additionalInfo: "Saint Petersburg State University (SPbU) is Russia’s oldest and most prestigious university, established in 1724 by Peter the Great. With its world-renowned academic programs, particularly in the humanities, sciences, and engineering, SPbU attracts a vast international student community. The university boasts a modern campus that incorporates cutting-edge research facilities and is renowned for its faculty members who lead in global research publications. SPbU also focuses on international exchanges and collaborations, with active partnerships with over 100 institutions worldwide. It is particularly strong in the fields of nuclear physics, environmental sciences, and political studies. Its historical charm, combined with high-quality education, makes it a magnet for scholars globally.",
        visitUrl: "https://english.spbu.ru/"
      },
      {
        id: 5,
        title: "Moscow State University: Leading Education in Russia and Beyond",
        description: "Moscow State University is the largest and most influential educational institution in Russia, offering numerous globally recognized programs.",
        authorImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSG8KS_x0o8jd3a7Po00tt1Sl85TXwtz2N9CQ&s",
        image: "https://careermantra.org/front_assets/images/Lomonosov_Moscow_State_Medical_University.jpg",
        additionalInfo: "Moscow State University (MSU) is the largest and most prestigious institution of higher education in Russia, founded in 1755. The university encompasses a broad range of disciplines, from natural sciences to the arts, engineering, economics, and law. With over 40,000 students, MSU has an extensive academic staff who are experts in their respective fields. As one of the top universities worldwide, MSU places significant importance on research and innovation, contributing to cutting-edge work in fields such as physics, mathematics, and biology. With its distinctive landmark campus located in the heart of Moscow, students not only benefit from world-class education but also from the rich cultural environment of the city.",
        visitUrl: "https://msu.ru/en/"
      },
      {
        id: 6,
        title: "Tomsk State University: Innovation and Research at Its Core",
        description: "A leading institution for scientific research and technological development, Tomsk State University is an academic hub for aspiring scientists and engineers.",
        authorImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmmee60G2-AQRk1C_ZKC02ZmHEsKgPRnWSTQ&s",
        image: "https://studyinrussiaportal.com/images/0ca1c3afa6a279b40d43257e3052446f.jpg",
        additionalInfo: "Founded in 1878, Tomsk State University is one of Russia’s leading institutions for technological innovation and research. Known for its groundbreaking work in engineering, computer science, and biotechnologies, the university offers a range of undergraduate, graduate, and doctoral programs in various disciplines. Tomsk’s robust network of research centers and close ties with international scientific communities allows students to actively engage in projects that address the world’s most pressing challenges. Its global innovation programs, focused on renewable energy, nanotechnology, and space science, help cultivate highly skilled professionals ready to take on technological advancements on the world stage.",
        visitUrl: "https://en.tsu.ru/"
      },
      {
        id: 7,
        title: "Novosibirsk State University: The Heart of Science in Siberia",
        description: "Novosibirsk State University stands as a significant institution specializing in science and engineering education and research in Siberia.",
        authorImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLrXtOEX-VY96R4mL2Ke0sUu8eKKjdmZFhFA&s",
        image: "https://www.rusvuz.com/wp-content/uploads/2020/05/Novosibirsk-State-University-1024x742.jpg",
        additionalInfo: "Novosibirsk State University (NSU) is one of Russia’s leading scientific institutions, located in the heart of Siberia’s thriving research ecosystem. Home to numerous scientific discoveries and innovations, NSU specializes in areas such as quantum physics, microbiology, and computational research. The university’s affiliation with Siberian Branch of the Russian Academy of Sciences ensures access to state-of-the-art laboratories and research facilities. NSU attracts top scholars and students from across the world who are eager to explore the frontier of scientific knowledge. Its global partnerships with various universities and institutions ensure an international experience with ample research exchange programs.",
        visitUrl: "https://english.nsu.ru/"
      },
      {
        id: 8,
        title: "Kazan Federal University: Russia’s Premier Institution for International Students",
        description: "Kazan Federal University has become a top choice for international students, offering high-quality educational programs and fostering global cooperation.",
        authorImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmwpT87t_KxKQ5zjbDV8WuJVgwA9XeKvEhIg&s",
        image: "https://medipediaoverseas.com/images/university/Kazan-Federal-University.jpg",
        additionalInfo: "Kazan Federal University, established in 1804, is renowned for its rich academic history and is one of Russia's largest and oldest universities. The university attracts a diverse international community with its vast range of programs in the sciences, humanities, and medical fields. Known for its research prowess, Kazan University is a leader",
        visitUrl: "https://eng.kpfu.ru/",  
    },    
  {
      id: 9,
      title: "Ural Federal University: Academic Excellence and Innovation",
      description: "Located in Yekaterinburg, Ural Federal University offers cutting-edge education and research opportunities in science, engineering, and technology.",
      authorImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOsBZ-knGDQ8_W1NiFqBonexPMldaIWE8mJA&s",
      image: "https://www.ruseducation.in/wp-content/uploads/2022/07/Ural-Federal-University.jpg",
      additionalInfo: "Known for innovation and collaboration, the university emphasizes developing real-world skills through research and industry projects.",
      visitUrl: "https://urfu.ru/en/"
    }
  ];

  // Find the card by its ID
  const card = blogCards.find(card => card.id === parseInt(id));

  if (!card) {
    return <div className="text-center p-8">Card not found</div>;
  }

  return (
    <div className="min-h-screen bg-gray-100 p-4 sm:p-8">
    <div className="max-w-full sm:max-w-7xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
      
  

      <div className="relative">
        <img
          src={card.image}
          alt="University"
          className="w-full h-72 sm:h-96 object-cover"
        />
        <div className="absolute bottom-4 left-4 p-4 bg-black bg-opacity-50 text-white rounded-lg">
          <h1 className="text-2xl sm:text-4xl font-semibold">{card.title}</h1>
        </div>
      </div>

      <div className="p-4 sm:p-8">
        <p className="text-lg sm:text-xl text-gray-800 mb-4">{card.description}</p>
        <p className="text-base sm:text-lg text-gray-600 mb-6">{card.additionalInfo}</p>

        <div className="flex flex-col sm:flex-row justify-between items-center mb-4">
          <div className="flex items-center mb-4 sm:mb-0">
            <img
              src={card.authorImage}
              alt="University Logo"
              className="w-12 h-12 sm:w-16 sm:h-16 rounded-full object-cover mr-4"
            />
            <p className="text-lg font-semibold">Learn more about {card.title}</p>
          </div>
          <a
            href={card.visitUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 bg-blue-500 text-white rounded-full shadow-md hover:bg-blue-600 text-center"
          >
            Visit Site
          </a>
        </div>

        <hr className="my-6" />

        <div className="mt-8">
          <h2 className="text-xl sm:text-2xl font-semibold mb-4">About the University</h2>
          <p className="text-base sm:text-lg">{card.additionalInfo}</p>
        </div>
      </div>
    </div>
  </div>
  );
};

export default CardDetail;
