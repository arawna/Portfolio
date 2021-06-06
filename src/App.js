import About from "./components/About";
import ContactMe from "./components/ContactMe";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./components/Home";
import Portfolio from "./components/Portfolio";
import Qualification from "./components/Qualification";
import ScrollUp from "./components/ScrollUp";
import Skills from "./components/Skills";

function App() {
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
