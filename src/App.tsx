import Header from "./components/header"
import Home from "./components/Home"
import "./App.css"
import Sidebar from "./components/Sidebar"
const App = () => {


  return (
    <div className="scr bg-stone-100">
      <Header/>
      <div className=" flex justify-around">
        <Home/>
      <Sidebar/>
      </div>
      
    </div>
  )
}

export default App
