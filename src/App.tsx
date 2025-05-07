import { Route, Routes, } from "react-router-dom";
import Footer from "./components/Footer";
import Homepage from "./components/Homepage";
import Navbar from "./components/Navbar";
import Menu from "./components/Menu";
import Contact from "./components/Contact";
import About from "./components/About";
import Service from "./components/Service";

export default function App() {

  return (
    <>
      <div
        className="min-h-screen flex flex-col"
      >
        <Navbar />

        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/service" element={<Service />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>

        <Footer />
      </div>
    </>

  )
}

