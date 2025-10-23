import React from "react"
import { Content } from "./components/Content/Content"
import { Menu } from "./components/Menu/Menu"
import { AboutPage } from "./pages/AboutPage"



export const menuItems = [
  { name: "About", component: () => <AboutPage /> },
  { name: "Projects", href: "#" },
  { name: "Skills", href: "#" },
  { name: "Work Experiences", href: "#" },
]



function App() {
  const [currentMenu, setCurrentMenu] = React.useState("About");

  return (
    <div className="flex flex-row h-screen w-screen">
      <Menu setCurrentMenu={setCurrentMenu} menuItems={menuItems} />
      <Content currentMenu={currentMenu} setCurrentMenu={setCurrentMenu} menuItems={menuItems} />
    </div>
  )
}

export default App
