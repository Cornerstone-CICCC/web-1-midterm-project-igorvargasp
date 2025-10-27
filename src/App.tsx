import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Skills from "./components/Skills";
import About from "./components/About";
import Projects from "./components/Projects";



function App() {


  return (
    <div className="font-sora scroll-smooth overflow-x-hidden">
      <Navbar />
      <Home />
      <Skills />
      <About />
      <Projects />

    </div>
  )
}

export default App
