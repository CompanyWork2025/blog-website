import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/Scroll"; // Import the component
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import University from "./pages/University";
import CardDetail from './pages/CardDetail';
import News from "./pages/News";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/university" element={<University />} />
        <Route path="/card/:id" element={<CardDetail />} />
        <Route path="/news" element={<News />} />
      </Routes>
    </Router>
  );
}

export default App;
