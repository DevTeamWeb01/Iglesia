import './botonOfrenda.css';
import { Link } from 'react-router-dom'

const BotonOfrenda = (prop) => {
    return(
        <button className='boton_ofrendar'>
            <Link to="/ofrendar">{prop.texto}</Link>
        </button>
    )
}

export default BotonOfrenda;