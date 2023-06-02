import './separador.css';

const Separador = () => {
    return(
        <div className="separador">
          <div className="separador_linea"></div>
          <div className="separador_icono">
            <box-icon name='book' type='solid' color='#fd0303' ></box-icon>
          </div>
          <div className="separador_linea"></div>
        </div>
    )
}

export default Separador;