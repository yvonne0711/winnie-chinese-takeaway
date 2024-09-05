import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import NavBar from "./components/NavBar";
import About from "./pages/About";
import Menu from "./pages/Menu";
import Contact from "./pages/Contact";
import NoPage from "./pages/NoPage";

function App() {
  return (
    <Router>
      {/* render header component */}
      <Header />
      {/* render navbar component */}
      <NavBar />
      {/* routes to render different pages */}
      <Routes>
        <Route path="/" element={<About />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/contact" element={<Contact />} />
        {/* passing type prop for this page */}
        <Route path="/*" element={<NoPage type="danger" />}/>
      </Routes>
    </Router>
  );
}

export default App;
