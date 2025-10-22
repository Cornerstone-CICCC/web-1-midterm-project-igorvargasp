import { Content } from "./components/Content/Content"
import { Menu } from "./components/Menu/Menu"


function App() {

  return (
    <div className="flex flex-row h-screen w-screen">
      <Menu />
      <Content />
    </div>
  )
}

export default App
