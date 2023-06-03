import { Link} from 'react-router-dom';
import './NavBar.css'
import BotonOfrenda from '../../Botones/botonOfrenda/botonOfrenda';

const NavBar = () => {
  return (
    <div>
      <div className="bg-[#141618] text-white  h-[130px] items-center flex  justify-around">
        <h1><Link to="/"><img src="/src/assets/img/logo.png" alt="logo" className='img_logo' /></Link></h1>
        <div className='flex gap-1'>
          <span>
            <a href="https://web.facebook.com/IglesiaRiosdeAvivamientosparalasnaciones/?_rdc=1&_rdr" target="_blank" rel="noopener noreferrer">
              <box-icon name='facebook' type='logo' color='#ffffff' size="30px"></box-icon>
            </a>
          </span>

          <span className='text-xl'>|</span>

          <span>
            <a  href="mailto:Pastordavidgalindo0@gmail.com" target="_blank" rel="noopener noreferrer">
              <box-icon name='envelope' type='solid' color='#ffffff' size="30px"></box-icon>
            </a>
          </span>
        </div>
      </div>
      <nav className="bg-[#1b1b1b] text-white p-3">
        <ul className='menu_lista'>
          <li className='menu_items'><Link to="/">Inicio</Link></li>
          <li className='menu_items-dropdown'>
            <a>Nosotros</a>
            <ul className='menu_lista-dropdown'>
              <li className='menu_items-dropdown'><Link to="/creencia">Creencias</Link></li>
              <li className='menu_items-dropdown'><Link to="/pastores">Pastores</Link></li>
              <li className='menu_items-dropdown'><Link to="/donde-nos-encontramos">¿Donde nos encontramos?</Link></li>
            </ul>
          </li>

          <li className='menu_items-dropdown'>
            <a>¿Que hacemos?</a>
            <ul className='menu_lista-dropdown'>
              <li className='menu_items-dropdown'><Link to="/servicios">Servicios</Link></li>
              <li className='menu_items-dropdown'><Link to="/bautisos">Bautisos</Link></li>
            </ul>
          </li>

          <li className='menu_items'><Link to="/">Eventos</Link></li>

          <BotonOfrenda texto="Ofrendar" />
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;
