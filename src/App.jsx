import Header from "./components/Header";
import Home from "./components/Home";
import AboutUs from "./components/AboutUs";
import { Routes, Route } from "react-router-dom";
import Contact from "./components/Contact";
import Projects from "./components/Projects";
import Skill from "./components/Skill";
function App() {
  return (
    <main className=" relative">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/project" element={<Projects />} />
        <Route path="/skill" element={<Skill />} />
      </Routes>
    </main>
  );
}

export default App;
