import './App.css'
import { Routes, Route } from "react-router-dom";
import  { Header }  from "../src/component/Header";
import Navbar from "./component/Navbar/Navbar"

import { Home } from "./page/Home";
import  About   from "./page/About"



function App() {

  return (
<>
<Navbar/>

<Routes>
    <Route path="/"element={<Home/>}/>
    <Route path="/About"element={<About/>}/>
  
   </Routes>

  </>
  )
}

export default App
