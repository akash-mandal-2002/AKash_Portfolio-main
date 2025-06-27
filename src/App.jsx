
import { BrowserRouter , Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";
import "./Style/App.css";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Project from "./Pages/Project";
import Contact from "./Pages/Contact";
function App() {
  return (
     <div className="flex flex-col min-h-[100vh]">
     <BrowserRouter>
      <Navbar />
      <main className="flex-1">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/project" element={<Project />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      </main>
      {/* <Footer /> */}
      </BrowserRouter>
    </div>
  );
}

export default App;
