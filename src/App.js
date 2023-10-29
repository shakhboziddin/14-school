import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Notfound from "./components/Notfound";
import About from "./pages/About";
import Contact from "./pages/Contact";
function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" Component={Home} />
          <Route path="/about" Component={About} />
          <Route path="/contact" Component={Contact} />
          <Route path="*" Component={Notfound} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
