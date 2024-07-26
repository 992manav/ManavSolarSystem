import Mercury from "./Mercury.jsx";
import Venus from"./Venus.jsx";
import Earth from "./Earth.jsx";
import Sun from "./Sun.jsx";
import Mars from "./Mars.jsx";
import Main from "./Main.jsx";
import Footer from "./Footer.jsx";

export default function Home() {
    return(
        <div >
                <Main/>
                <Mercury/>
                <Venus/>
                <Earth/>
                <Mars/>
                <Footer/>
        </div>
    )
};
