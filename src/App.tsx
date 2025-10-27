import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Skills from "./components/Skills";
import About from "./components/About";



function App() {


  return (
    <div className="font-sora scroll-smooth overflow-x-hidden">
      <Navbar />
      <Home />
      <Skills />
      <About />

    </div>
  )
}

export default App
