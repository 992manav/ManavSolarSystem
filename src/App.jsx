//import './App.css'
import {Routes,Route} from "react-router-dom";
import Navbar from './components/Navbar.jsx';
import Mercury from "./pages/Mercury.jsx";
import Venus from"./pages/Venus.jsx";
import Earth from "./pages/Earth.jsx";
import Sun from "./pages/Sun.jsx";
import Mars from "./pages/Mars.jsx";
import Home from "./pages/Home.jsx";
import Path from "./Path.jsx";
import Footer from "./pages/Footer.jsx";

function App() {

  return (
    <>
          <Navbar/>
           <Path/>
    </>
  )
}

export default App
