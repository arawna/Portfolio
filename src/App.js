import About from "./components/About";
import ContactMe from "./components/ContactMe";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./components/Home";
import Portfolio from "./components/Portfolio";
import Qualification from "./components/Qualification";
import ScrollUp from "./components/ScrollUp";
import Skills from "./components/Skills";
import ReactGa from "react-ga";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    ReactGa.initialize("G-0S7HJGPQKB");

    ReactGa.pageview("/");
  }, []);

  return (
    <div className="">
      <Header />
      <Home />
      <About />
      <Skills />
      <Qualification />
      <Portfolio />
      <ContactMe />
      <Footer />
      <ScrollUp />
    </div>
  );
}

export default App;
