import { Link } from "react-router-dom";
import "./pathlink.css";
export default function PathLink() {
    return(
        
        <ul>
                <div>Manav.io</div> 
                <span>

                <Link to="/">
                    <li>Home</li>
                </Link >

                <Link to="/sun">
                    <li>Sun</li>
                </Link >

              <Link to="/mercury">
                    <li>Mercury</li>
                </Link >

                <Link to="/venus">
                    <li>Venus</li>
                </Link >

                <Link to="/earth">
                    <li>Earth</li>
                </Link>

                <Link to="/mars">
                    <li>Mars</li>
                </Link>
                <Link to="/footer">
                    <li>...</li>
                </Link>

                </span>
        </ul>
    )
};
