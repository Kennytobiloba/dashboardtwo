import { useState } from "react"
import Header from "./Components/Header/Header"
import Home from "./Components/Home/Home"
import Sidebar from "./Components/Sidebar/Sidebar"


function App() {
  const [openSidebartoggle, SetOpenSidebarToggle] = useState(false)
  const opensidebar = () => {
    SetOpenSidebarToggle(!openSidebartoggle)
  }


  return (
    <div className=" grid-container">
      <Header openSidebartoggle={opensidebar}/>
      <Sidebar opensidebar={openSidebartoggle} openSidebartoggle={opensidebar} />
      <Home/>

    </div>
     
  )
}

export default App
