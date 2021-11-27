
import react from "react";
import Blogs from "./Blogs";
import "./index.css"
import Login from "./Login";
import {Routes,Route} from "react-router-dom"

function App() {
  return (
    <>

 
 <Routes>
  
  
   <Route  exact path="/blog" element={<Blogs/>}/>
   <Route  exact path="/logout" element={<Login/>}/>
 </Routes>
 </>
  )
}

export default App;
