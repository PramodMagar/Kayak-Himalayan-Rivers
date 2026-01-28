import {Link} from "react-router";
import "./header.css";
export default function Navbar(){
    return(

        <div className="header">
        <div style={{ marginLeft: '10px'}}>
            <Link className="link" to="/">Home</Link>
        </div>
        <div className="navbar">
            <ul>
        <Link className="link" to="/packlist">Packlist</Link>
        <Link className="link" to="camping">Camping</Link>
        <Link className="link" to="/rivers">Rivers</Link>
        </ul>
        </div>
        </div>   
         )
}