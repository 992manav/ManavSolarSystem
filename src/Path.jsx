import Mercury from "./pages/Mercury.jsx";
import Venus from"./pages/Venus.jsx";
import Earth from "./pages/Earth.jsx";
import Home from "./pages/Home.jsx";
import Sun from "./pages/Sun.jsx";
import Mars from "./pages/Mars.jsx";
import Footer from "./pages/Footer.jsx";
import {Routes,Route} from "react-router-dom";

export default function Path() {
    return(
        <Routes>
                <Route path='/' element={<Home/>}></Route>
                <Route path='/sun' element={<Sun/>}></Route>
              <Route path='/mercury' element={<Mercury/>}></Route>
              <Route path='/venus' element={<Venus/>}></Route>
              <Route path='/earth' element={<Earth/>}></Route>
              <Route path='/mars' element={<Mars/>}></Route>
              <Route path='/footer' element={<Footer/>}></Route>
        </Routes>
    )
};
