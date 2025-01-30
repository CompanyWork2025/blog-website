import React from "react";
import { Helmet } from "react-helmet";  // Import the Helmet component
import Hero from "../components/Home/Hero";
import Intro from "../components/Home/Intro";
import About from "../components/Home/About";
import Why from "../components/Home/Why";
import Slider from "../components/Home/Slider";
import FAQ from "../components/Home/FAQ";
import Subscribe from "../components/Home/Subscribe";

const Home = () => {
    return (
        <>
          <Helmet>
            <title>Russia Blog Website | Home - 2025 Latest Blogs</title>
            <meta name="description" content="Welcome to the Blog Website. Discover engaging content and articles on various topics about Russia, including news, trends, and culture." />
            <meta name="keywords" content="Russia blog, Russia news, Russian culture, blog, articles, updates, trends, 2025" />
            <meta name="author" content="https://blog-website-test.netlify.app/" />
            <link rel="canonical" href="https://blog-website-test.netlify.app/" />

            {/* Open Graph Meta Tags */}
            <meta property="og:type" content="website" />
            <meta property="og:title" content="Russia Blog Website | Home - 2025 Latest Blogs" />
            <meta property="og:description" content="Discover the latest blogs and articles about Russia, its culture, news, and trends on our website." />
            <meta property="og:image" content="/logo.jpg" />
            <meta property="og:url" content="https://blog-website-test.netlify.app/" />

            {/* Twitter Card Meta Tags */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content="Russia Blog Website | Home - 2025 Latest Blogs" />
            <meta name="twitter:description" content="Discover the latest blogs and articles about Russia, its culture, news, and trends on our website." />
            <meta name="twitter:image" content="/logo.jpg" />
          </Helmet>
          <Hero />
          <Intro />
          <About />
          <Why />
          <Slider />
          <FAQ />
          <Subscribe />
        </>
    );
}

export default Home;
