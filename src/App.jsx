import { Routes, Route, Link} from "react-router";
import Navbar from "./Navbar";
import Home from "./Home";
import PackList from "./PackList";
import Camping from "./Camping";
import Rivers from "./Rivers";

function App(){
  return (       
      <div>
       <Navbar/>



        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/packlist" element={<PackList/>}/>
          <Route path="/camping" element={<Camping/>} />
          <Route path="/Rivers" element={<Rivers/>} />
        </Routes>        
    </div>
  )
}

export default App
