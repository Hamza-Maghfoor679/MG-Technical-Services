import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./Home";
import ContactUs from "./ContactUs";
import AboutUs from "./AboutUs";

const App = () => {
  return (
    <>
      <Navbar />
      <div className="pt-16"> {/* padding for fixed navbar height */}
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/contact" element={<ContactUs />} />
        </Routes>
      </div>
    </>
  );
};

export default App;
