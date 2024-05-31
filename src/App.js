import "./assets/sass/base/reset.scss";
import Home from "./page/home.page";
import About from "./page/about.page";
import Services from "./page/services.page";
import Header from "./layout/Header";
import Contact from "./page/contact.page";
import Footer from "./layout/footer";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Home />
      <Footer />
    </div>
  );
}

export default App;
