import { Link } from "react-router-dom";
import './NavBar.css'
import { useState } from "react";
const NavBar = () => {

    const [activeMenu, setActiveMenu] = useState(false);
    const [activeMenuDown, setActiveMenuDown] = useState(false);

    const removeMenu = () => {
        if(!activeMenu){
            setActiveMenu(true);
        }else{
            setActiveMenu(false)
        }
    }

    const removeMenuDown = () => {
        if(!activeMenuDown){
            setActiveMenuDown(true);
        }else{
            setActiveMenuDown(false)
        }
    }
    return (
        <>
            <div className="navbar-info">
               <div className="navbar-info-redes">
                <box-icon color='#fff' type='logo' name='facebook'></box-icon>
                <box-icon color='#fff' type='logo' name='instagram'></box-icon>
               </div>
               <span><a style={{color:'#fff', fontFamily: 'Poppins'}} href="mailto:af01camacho@gmail.com">Email</a></span>
            </div>

            {/* MENU DESKTOP */}
            <nav className="navbar">
                <h2 style={{color: 'white', fontSize: 19, fontFamily: 'Poppins', fontWeight: 'bold'}}>Iglesia  Rios de avivamiento</h2>
                <ul className="navbar-list">
                    <Link to='/'  className="navbar-item" > Home </Link>
                    <div onClick={removeMenuDown} className="navbar-item-down"> <Link className="navbar-item" style={{color : 'white'}} to='/'>Servicios
                    <box-icon color='#fff' name='chevron-down'></box-icon>
                    </Link>
                    {
                        activeMenuDown && (
                        <div className="navbar-item__down">
                        <Link style={{color: 'white', padding: 20}} to='/acerca-de-nosotros' className="navbar-item__down-item" > Sobre nosotros </Link>
                        <Link style={{color: 'white', padding: 20}} to='/acerca-de-nosotros' className="navbar-item__down-item" > Nosotros 22</Link>
            
                        </div>
                    
                        )
                    }                    
                    </div>
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

                {/* BOTONES MENU MOBILE */}
                <div className="navbar-mobile">
                    <Link onClick={removeMenu} className="navbar-mobile-item" to=''> <box-icon size='30px' color='#000' name='menu'></box-icon> </Link>
                </div>
                
            </nav>
            {/* MENU MOBILE */}
           { activeMenu && (
             <ul className="navbar-list-mobile">
             <Link to='/'  className="navbar-item-mobile" > Home </Link>
             <Link to='/services' className="navbar-item-mobile" > Services
                 <box-icon color='#fff' name='chevron-down'></box-icon>
             </Link>
             <Link to='/acerca-de-nosotros' className="navbar-item-mobile" > Nosotros
                 <box-icon color='#fff' name='chevron-down'></box-icon>
              </Link>
              <Link to='/services' className="navbar-item-mobile" > Que hacemos
                 <box-icon color='#fff' name='chevron-down'></box-icon>
              </Link>
              <Link to='/services' className="navbar-item-mobile" > Recursos
                 <box-icon color='#fff' name='chevron-down'></box-icon>
              </Link>
              </ul>
           )
           }
            </>
     );
}

export default NavBar;