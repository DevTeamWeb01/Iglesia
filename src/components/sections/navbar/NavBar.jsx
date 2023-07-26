import { Link } from 'react-router-dom';
import { useState } from 'react';
import './NavBar.css';
import BotonOfrenda from '../../Botones/botonOfrenda/botonOfrenda';

const NavBar = () => {
  const [showDropdown, setShowDropdown] = useState(true);

  const toggleMenu = () => {
    setShowDropdown(!showDropdown);
  };

  return (
    <div>
      <div className="bg-[#141618] text-white  h-[130px] items-center flex  justify-around">
        <h1>
          <Link to="/">
            <img src="/src/assets/img/logo.png" alt="logo" className='img_logo' />
          </Link>
        </h1>
        <div className='flex gap-1'>
          <span>
            <a href="https://web.facebook.com/IglesiaRiosdeAvivamientosparalasnaciones/?_rdc=1&_rdr" target="_blank" rel="noopener noreferrer">
              <box-icon name='facebook' type='logo' color='#ffffff' size="30px"></box-icon>
            </a>
          </span>

          <span className='text-xl'>|</span>

          <span>
            <a href="mailto:juancarlosperezcastillo631@gmail.com" target="_blank" rel="noopener noreferrer">
              <box-icon name='envelope' type='solid' color='#ffffff' size="30px"></box-icon>
            </a>
          </span>
        </div>

        <button className="menu_icon" onClick={toggleMenu}>
          <box-icon name="menu" color="#fffff"></box-icon>
        </button>
      </div>
      {/* Contenedor del menú */}
      <nav className={`bg-[#1b1b1b] text-white p-3 ${showDropdown ? 'show_dropdown' : ''}`}>
        <ul className={`menu_lista ${showDropdown ? 'hide_list' : ''}`}>
          <li className='menu_items'><Link to="/">Inicio</Link></li>
          <li className='menu_items-dropdown'>
            <a>Nosotros</a>
            <ul className='menu_lista-dropdown'>
              <li className='menu_items-dropdown'><Link to="/creencia">Creencias</Link></li>
              <li className='menu_items-dropdown'><Link to="/pastores">Pastores</Link></li>
            </ul>
          </li>

          <li className='menu_items-dropdown'>
            <a>¿Que hacemos?</a>
            <ul className='menu_lista-dropdown'>
              <li className='menu_items-dropdown'><Link to="/servicios">Servicios</Link></li>
              <li className='menu_items-dropdown'><Link to="/bautisos">Bautisos</Link></li>
            </ul>
          </li>

          <li className={`menu_items-ofrenda ${showDropdown ? 'hide_list' : ''}`}>
            <BotonOfrenda texto="Ofrendar" />
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;
