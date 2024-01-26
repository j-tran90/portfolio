import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Skills from "../pages/Skills";
import Contact from "../pages/Contact";
import NavBar from "../components/Navbar";
import Footer from "../components/Footer";
import Couriertek from "../pages/Couriertek";
import Nhoracing from "../pages/Nhoracing";

const RouteSwitch = () => {
  return (
    <>
      <BrowserRouter>
        <main>
          <NavBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/couriertek" element={<Couriertek />} />
            <Route path="/nhoracing" element={<Nhoracing />} />
          </Routes>
        </main>
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default RouteSwitch;
