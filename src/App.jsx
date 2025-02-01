import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/Scroll";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import University from "./pages/University";
import CardDetail from './pages/CardDetail';
import News from "./pages/News";
import Apply from "./pages/Contact";
import Chatbot from './components/Chatbot'; // Import the Chatbot

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/universities" element={<University />} />
        <Route path="/:slug" element={<CardDetail />} />
        <Route path="/apply" element={<Apply />} />
        <Route path="/news" element={<News />} />
      </Routes>
      <Footer />
      <Chatbot /> {/* Add the Chatbot component */}
    </Router>
  );
}

export default App;
