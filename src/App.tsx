import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Skills from "./components/Skills";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

function App() {

  return (
    <div className="font-sora scroll-smooth overflow-x-hidden">
      <Navbar />
      <Home />
      <Skills />
      <About />
      <Projects />
      <Contact />
    </div>
  )
}

export default App
