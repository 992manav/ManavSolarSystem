import"./stylings/Footer.css"
import "../components/pathlink.jsx"
import PathLink from "../components/pathlink.jsx"
import MinFooter from "./MinFooter.jsx";
export default function Footer(){

    
    const backgroundImage = 'url(/background.jpg)';

    const styles = {
      container: {
        backgroundImage,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '100vh',
        color: 'white',
        
      },
    };

    return(
                       <div className="Fback" style={styles.container}>
                               <MinFooter/>

                                </div>
    )
}