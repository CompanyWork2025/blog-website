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
      image: "https://dissernet.org/uploads/2022/10/31/635ff6159982d_127796_1350.jpg",
      additionalInfo: "Rostov State Medical University is one of Russia's leading institutions of higher education, renowned for its outstanding programs in medicine and healthcare. Founded in 1915, this prestigious university has a rich history of excellence in medical training, research, and clinical practice. Situated in the vibrant city of Rostov-on-Don, the university boasts state-of-the-art facilities and a global reputation for educating some of the best doctors and healthcare professionals in the country and beyond.",
      visitUrl: "https://www.rostgmu.in/"
    },
    {
      id: 2,
      title: "Kazan State Medical University: A Premier Medical Institution in Russia",
      description: "Kazan State Medical University (KSMU), established in 1814, is one of Russia's oldest and most prestigious medical institutions. Located in Kazan, Tatarstan, it operates under the Ministry of Health of Russia and offers a range of medical programs across nine faculties.",
      authorImage: "https://upload.wikimedia.org/wikipedia/ru/1/14/KSMU_logo.png",
      image: "https://mir-cdn.behance.net/v1/rendition/project_modules/max_3840/a31f24174446019.64a2deea7d659.png",
      additionalInfo: "Situated in the central area of Kazan, KSMU offers a vibrant campus life with modern facilities, including well-equipped laboratories, libraries, and comfortable hostels. The university also hosts various cultural and sports events, providing a holistic educational experience. ",
      visitUrl: "https://www.studymbbsinkazan.com/"
    },
    {
      id: 3,
      title: "Kursk State Medical University: Excellence in Higher Education in Russia",
      description: "Kursk State Medical University offers diverse academic programs with a strong focus on research and innovation, aiming to prepare students for global opportunities.",
      authorImage: "https://avatars.mds.yandex.net/i?id=f88858791dfe83477d8d4164bb0a87e1_l-4464154-images-thumbs&n=13",
      image: "https://smapse.ru/storage/2019/08/x1-37.jpg",
      additionalInfo: "KSMU provides modern facilities, including well-equipped laboratories, libraries, and comfortable hostels. The university also hosts various cultural and sports events, offering a holistic educational experience. ",
      visitUrl: "http://www.studymbbsinkursk.com/"
    },
    {
      id: 4,
      title: "Bashkir Medical State University: Russia's Top Academic Destination",
      description: "The university is renowned for its high-quality medical education and cutting-edge infrastructure that aids students in their studies and knowledge growth in the medical field. ",
      authorImage: "https://uust.ru/unit/media/uploads/subdivuploads/z_%D0%95%D0%98%D0%9A/%D0%9F%D0%B0%D1%80%D1%82%D0%BD%D0%B5%D1%80%D1%8B/bgmu.png",
      image: "https://sun6-21.userapi.com/impf/H1usIp-feHo1J4SkVQTKFcAZADWxijjQ47xK6Q/lvceRW08pjg.jpg?size=1818x606&quality=95&crop=0,0,1590,530&sign=445b61d7962fbde80789190d37a86df5&type=cover_group",
      additionalInfo: "BSMU has partnerships with reputed hospitals, clinics, research institutes, and international medical organizations, providing students with diverse clinical experiences and exposure to different medical applications and resources. ",
      visitUrl: "https://www.thedoctorsiea.in/"
    },
    {
      id: 5,
      title: "Yaroslavl State University: Leading Education in Russia and Beyond",
      description: "Yaroslavl State Medical University (YSMU), established in 1944, is a prominent medical institution located in Yaroslavl, Russia.",
      authorImage: "https://sun1-83.userapi.com/s/v1/ig2/8HYMedfwx01zUb3yXFZmad0i0x1DBcIhpw-B3OEARmryQTsR4zTuekBfJOtcVwK6sgt_J5a1knbcLkM9XzxFMw4j.jpg?size=704x705&quality=95&crop=24,9,704,705&ava=1",
      image: "https://avatars.mds.yandex.net/i?id=3390f53dea7ba1ad4c603d91ee6f242b_l-2918686-images-thumbs&n=13",
      additionalInfo: "YSMU provides modern facilities, including well-equipped laboratories, libraries, and comfortable hostels. The university also hosts various cultural and sports events, offering a holistic educational experience. ",
      visitUrl: "www.thedoctorsiea.in/"
    },
    {
      id: 6,
      title: "Crimea federal university: Medical Institute ",
      description: "The Medical Institute named after S.I. Georgievsky is a prominent division of the V.I. Vernadsky Crimean Federal University, located in Simferopol, Crimea. Established in 1918.",
      authorImage: "https://avatars.mds.yandex.net/i?id=f94d4d6785247bde9e3dd7493464e4f2_l-5233210-images-thumbs&n=13",
      image: "https://avatars.mds.yandex.net/i?id=37e43d0366c3cc89b7c753908d90689c_l-8343045-images-thumbs&n=13",
      additionalInfo: "The institute offers a vibrant campus life with various cultural, sports, and academic events. Student organizations and clubs provide opportunities for personal development and community engagement.",
      visitUrl: "https://www.rrecrussia.com/"
    },
    {
      id: 7,
      title: "Ural State Medical University: The Heart of Science in Siberia",
      description: "Ural State Medical University (USMU), established in 1930, is a prominent public medical institution located in Yekaterinburg, Russia. As a major center for medical education and research, USMU is home to approximately 6,000 students, both domestic and international.",
      authorImage: "https://prog.susu.ru/img/logoSUSU.png",
      image: "https://avatars.mds.yandex.net/i?id=5bd0c227256a18eeedd6bfa6cd3fdbd8_l-7756591-images-thumbs&n=13",
      additionalInfo: "The university provides modern facilities, including well-equipped laboratories, libraries, and comfortable accommodations. USMU also hosts various cultural and sports events, offering a holistic educational experience. ",
      visitUrl: "https://www.rrecrussia.com/"
    },
    {
      id: 8,
      title: "Kazan Federal University: Russia’s Premier Institution for International Students",
      description: "The Institute of Fundamental Medicine and Biology (IFMB) is a prominent division of Kazan Federal University (KFU), established in May 2012 through the merger of the Faculty of Biology and Soil Science with medical departments.",
      authorImage: "https://kpfu.ru/portal/docs/F1412758293/72b1797b0422d10993e2a5ed4a36198a.jpg",
      image: "https://avatars.mds.yandex.net/i?id=38cfb4a3ddcd171e7653b7fe503ab089_l-4347893-images-thumbs&n=13",
      additionalInfo: "KFU's Universiade Village, inaugurated in 2011, accommodates over 9,000 students, including international students from more than 100 countries. The complex comprises 20 buildings, sports facilities, grocery stores, and other amenities, providing a comfortable living environment for students. ",
      visitUrl: "https://www.rrecrussia.com/",
    },
    {
      id: 9,
      title: "Stavropol state medical university: Academic Excellence and Innovation",
      description: "StSMU is recognized by the Medical Council of India and is listed in the World Directory of Medical Schools published by the World Health Organization (WHO). This recognition enables graduates to pursue medical careers globally, subject to passing relevant national examinations.",
      authorImage: "https://www.jeduka.com/storage/school_image/2/stavropol-state-medical-university.png",
      image: "https://www.ruseducation.in/wp-content/uploads/2022/07/Ural-Federal-University.jpg",
      additionalInfo: "StSMU provides a supportive environment for students, with access to modern facilities, including well-equipped laboratories, libraries, and clinical training centers. The university also offers accommodation options and various extracurricular activities to enhance the overall student experience. ",
      visitUrl: "http://www.thdoctorsiea.in/"
    },
    {
      id: 10,
      title: "Pacific State Medical University (PSMU)",
      description: "Pacific State Medical University (PSMU), located in Vladivostok, Russia, was established in 1958. Originally part of the Far Eastern State University, it became an independent institution in 1958 and was later renamed PSMU in 2013. ",
      authorImage: "https://upload.wikimedia.org/wikipedia/en/b/b7/Pacific_State_Medical_University_logo.png",
      image: "https://i.ytimg.com/vi/FF5XXwZhOyw/maxresdefault.jpg",
      additionalInfo: "PSMU provides a supportive environment with modern facilities, including well-equipped laboratories, libraries, and clinical training centers. The university also offers accommodation options and various extracurricular activities to enhance the overall student experience. ",
      url: "http://www.thdoctorsiea.in/",
    },
    {
      id: 11,
      title: "Tver State Medical University (TSMU)",
      description: "TSMU maintains partnerships with several international institutions, including Saarland University in Germany and the Medical Academy of Lublin in Poland. These collaborations enhance academic exchange and research opportunities for students and faculty. ",
      authorImage: "https://kr-alliance.com/upload/iblock/82f/rnhm3lbtre3btf9ehfhpnyecq1d4590l.png",
      image: "https://i.pinimg.com/originals/75/3f/fa/753ffab9db1f845a46957278926e5f19.png",
      additionalInfo: "The university provides a supportive environment with modern facilities, including well-equipped laboratories, libraries, and clinical training centers. TSMU also offers accommodation options and various extracurricular activities to enrich the student experience. ",
      url: "http://www.thdoctorsiea.in/",
    },
    {
      id: 12,
      title: "Mari state university (Medical faculty)",
      description: "Mari State University, established in 1972, is a prominent educational institution located in Yoshkar-Ola, Russia. The university comprises six faculties and five institutes, offering a diverse range of programs across various disciplines. ",
      authorImage: "https://maristateuniversity.com/images/logo.png",
      image: "https://avatars.mds.yandex.net/i?id=ae7c812becfce5fbf93c0d429369dbd9_l-5670257-images-thumbs&ref=rim&n=13&w=1024&h=431",
      additionalInfo: "Mari State University provides a supportive environment with modern facilities, including well-equipped laboratories, libraries, and clinical training centers. The university also offers accommodation options and various extracurricular activities to enhance the overall student experience.",
      url: "http://www.thdoctorsiea.in/",
    },
    {
      id: 13,
      title: "Perm State Medical University (PSMU)",
      description: "Perm State Medical University (PSMU), established in 1916, is a prominent medical institution located in Perm, Russia. It offers a range of medical programs, including a 6-year MBBS course designed for international students.  ",
      authorImage: "https://avatars.mds.yandex.net/i?id=081a63e65952e7cf1729adc83e4e4549-4055261-images-thumbs&n=13",
      image: "https://i.ytimg.com/vi/wZF_NuTkRic/maxresdefault.jpg",
      additionalInfo: "The university's commitment to quality education and research makes it a favorable choice for medical aspirants worldwide.",
      url: "https://www.rrecrussia.com/",
    },
    {
      id: 14,
      title: "Tula State University (TSU)",
      description: "Tula State University (TSU), established in 1930, is a prominent educational institution in Russia. It comprises nine faculties, including a dedicated Medical Institute.  ",
      authorImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrSQlyrPNLCuvZQg4tZ2Iz3T54cDxXBH2t4w&s",
      image: "https://avatars.mds.yandex.net/i?id=dc724584c4569cd850ee70bc06880de3_l-5723051-images-thumbs&n=13",
      additionalInfo: "International Cooperation: TSU maintains partnerships with educational institutions in over 20 countries, including Armenia, Belarus, Bulgaria, Vietnam, Germany, Egypt, India, Spain, Italy, Jordan, Kazakhstan, Syria, Ukraine, and Montenegro.",
      url: "http://www.thedoctorsiea.in/",
    },
    {
      id: 15,
      title: "Pskov State University (PSU)",
      description: "Pskov State University (PSU), established in 1936, is a prominent educational institution in Russia. It comprises six multidisciplinary institutes, including the Institute of Medicine and Experimental Biology, which houses the medical faculty.   ",
      authorImage: "https://upload.wikimedia.org/wikipedia/en/6/68/Logo_of_Pskov_State_University.png",
      image: "https://static.mk.ru/upload/entities/2021/10/08/10/photoreportsImages/detailPicture/96/28/9c/cf/2950299_9153142.jpg",
      additionalInfo: "International Cooperation: PSU maintains partnerships with educational institutions in over 20 countries, including Armenia, Belarus, Bulgaria, Vietnam, Germany, Egypt, India, Spain, Italy, Jordan, Kazakhstan, Syria, Ukraine, and Montenegro. ",
      url: "https://www.thedoctorsiea.in/",
    },
    {
      id: 16,
      title: "Volgograd State Medical University (VSMU)",
      description: "Volgograd State Medical University (VSMU), established in 1935, is a prominent medical institution located in Volgograd, Russia. It is recognized as one of the top 10 medical universities in Russia, with a longstanding tradition of training medical professionals.    ",
      authorImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSV35SdAS0GfivWa-QphguoSOhOpRZZy8h6aQ&s",
      image: "https://i.vuzopedia.ru/storage/app/uploads/public/5a1/e07/b63/5a1e07b631fc9132948187.jpg",
      additionalInfo: "VSMU maintains partnerships with educational institutions in over 20 countries, including Armenia, Belarus, Bulgaria, Vietnam, Germany, Egypt, India, Spain, Italy, Jordan, Kazakhstan, Syria, Ukraine, and Montenegro. ",
      url: "https://www.thedoctorsiea.in/",
    },
    {
      id: 17,
      title: "North western state medical university named after I.I Mechnikov, Saint Petersburg",
      description: "North Western State Medical University named after I.I. Mechnikov is a prominent medical institution located in Saint Petersburg, Russia. The university is named in honor of Ilya Ilyich Mechnikov, a famous Russian immunologist and a Nobel laureate known for his pioneering work on the immune system. The university has a rich history and provides various medical and healthcare-related education programs. Key aspects of the university: Founding: Established in 1897, the university has played a major role in the development of medical education and healthcare practices in Russia.    ",
      authorImage: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/eb/Logoszgmu.jpg/640px-Logoszgmu.jpg",
      image: "https://luckclub.ru/images/luckclub/2019/01/5-33.jpg",
      additionalInfo: "It is located in the culturally rich city of Saint Petersburg, one of Russia’s leading cultural and educational hubs, making it an attractive destination for medical students. ",
      url: "http://rrecrussia.com/",
    },
    {
      id: 18,
      title: "Saint Petersburg State Paediatric  Medical University ",
      description: "Saint Petersburg State Pediatric Medical University (SPbSPMU) is a leading institution in Russia focused on the education and training of specialists in the field of pediatric healthcare. It is one of the top medical universities in Russia, particularly renowned for its emphasis on pediatric education, childhood diseases, and child healthcare. The university plays a significant role in the development of pediatric medicine both in Russia and internationally.    ",
      authorImage: "https://upload.wikimedia.org/wikipedia/commons/a/a7/%D0%93%D0%BF%D0%BC%D1%83.jpg",
      image: "https://sun9-7.userapi.com/impf/c629517/v629517235/4cada/KuMt--J7FXY.jpg?size=1000x507&quality=96&sign=48a35ce791c96dd298bef4b9b23461a7&c_uniq_tag=lH7M2NJqXq57-IwtnEVQJtAwqhjpiDL6oC4l4iW5FwY&type=album",
      additionalInfo: "The university's location in Saint Petersburg gives it access to rich academic traditions and global medical networks, allowing its graduates to succeed both in Russia and abroad in various healthcare and academic positions. ",
      url: "https://www.thedoctorsiea.in/",
    },
    {
      id: 19,
      title: "Immanuel Kant Baltic Federal University (Medical Faculty)",
      description: "Immanuel Kant Baltic Federal University, located in Kaliningrad, Russia, offers medical programs that provide high-level education and training for future healthcare professionals. The university’s Medical Faculty is known for its strong emphasis on clinical practice and its integration with local and international medical institutions. It equips students with the skills necessary to address healthcare challenges across the globe.",
      authorImage: "https://facultetus.ru/images/universities/a79bc5e5fb24ac791ddd3745fc89a812.png",
      image: "https://s0.rbk.ru/v6_top_pics/media/img/0/46/346909027170460.jpg",
      additionalInfo: "Immanuel Kant Baltic Federal University offers students a unique opportunity to study in a city that blends Russian, European, and global influences. With modern medical facilities, research collaborations, and a global outlook, the Medical Faculty prepares students to work in various healthcare fields around the world.",
      url: "http://www.rrecrussia.com/"
    },
    {
      id: 20,
      title: "Kemerovo State Medical University",
      description: "Kemerovo State Medical University, located in Kemerovo, Russia, is one of the leading medical educational institutions in the country. The university offers a wide range of medical programs and degrees, focusing on clinical and research-oriented training in various medical fields. Known for its strong academic traditions, it provides students with the knowledge and skills needed for a career in medicine, while also playing a significant role in medical research and healthcare development.",
      authorImage: "https://web.archive.org/web/20211215063212im_/https://kemsmu.ru/local/templates/pr.v1/images/logo.png", 
      image: "https://hedclub.com/data/universities/364/main_image/88ic2R2jm33YVyuMHLXu.jpg",
      additionalInfo: "Kemerovo State Medical University is integrated with several clinical facilities, providing students with ample practical experience. With a well-established focus on improving healthcare in the region, the university also fosters international partnerships, offering opportunities for global learning and career growth.",
      url: "http://www.rrecrussia.com/"
    },
    

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
              href={card.url || card.visitUrl}
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
