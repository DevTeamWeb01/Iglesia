import { Link } from "react-router-dom";
import Home from "../home/Home";
import logo from '../../assets/iglesia-logoo.png'
import './NavBar.css'
const NavBar = () => {
    return ( 
        <>
            <div className="navbar-info">
               <div className="navbar-info-redes">
                <box-icon color='#fff' type='logo' name='facebook'></box-icon>
                <box-icon color='#fff' type='logo' name='instagram'></box-icon>
               </div>
               <span><a style={{color:'#fff', fontFamily: 'Poppins'}} href="mailto:af01camacho@gmail.com">Email</a></span>
               
            </div>
            <nav className="navbar">
                <h2 style={{color: 'white', fontSize: 19, fontFamily: 'Poppins', fontWeight: 'bold'}}>Iglesia  Rios de avivamiento</h2>
                <ul className="navbar-list">
                    <Link to='/'  className="navbar-item" > Home </Link>
                    <Link to='/services' className="navbar-item" > Services
                        <box-icon color='#fff' name='chevron-down'></box-icon>
                    </Link>
                    <Link to='/services' className="navbar-item" > Nosotros
                        <box-icon color='#fff' name='chevron-down'></box-icon>
                     </Link>
                     <Link to='/services' className="navbar-item" > Que hacemos
                        <box-icon color='#fff' name='chevron-down'></box-icon>
                     </Link>
                     <Link to='/services' className="navbar-item" > Recursos
                        <box-icon color='#fff' name='chevron-down'></box-icon>
                     </Link>
                
                </ul>
                <div>
                    <button className="navbar-btn">Realizar donaciones</button>
                </div>
            </nav>
        </>
     );
}
 
export default NavBar;