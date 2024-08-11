import "./App.css";
// Components
import { Header } from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";

import Registrasi from "./components/Registrasi";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Header />
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/registrasi" element={<Registrasi />} />
        </Routes>
      </div>

      <Footer />
    </>
  );
}

export default App;
