import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import NavBar from "./components/NavBar";
import About from "./pages/About";
import Menu from "./pages/Menu";
import Contact from "./pages/Contact";
import NoPage from "./pages/NoPage";
import Alert from "./components/Alert";
import Footer from "./components/Footer";

function App() {
  const alertMessage = "NOTE: We will be closed from Monday 30th September to Monday 7th November. We will reopen on Tuesday 8th November. Sorry for any inconvenience.";

  return (
    <Router>
      {/* render header component */}
      <Header />
      {/* render navbar component */}
      <NavBar />
      {/* conditionally render alert if there's a message, wont be rendered if there's no message */}
      {alertMessage && <Alert message={alertMessage} />}
      {/* routes to render different pages */}
      <Routes>
        <Route path="/" element={<About />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/contact" element={<Contact />} />
        {/* passing type prop for this page */}
        <Route path="/*" element={<NoPage type="danger" />}/>
      </Routes>
      {/* render footer */}
      <Footer />
    </Router>
  );
}

export default App;
