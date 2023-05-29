import { useState } from 'react';
import './seccionCreencias.css';
import PropTypes from 'prop-types';

const SeccionCreencias = ({creencias}) => {

    const [activeAlerta, setActiveAlerta] = useState(false);
    const [activeTitulo, setActiveTitulo] = useState('');
    const [activeDescripcion, setActiveDescripcion] = useState('');

    const alertaDescripcion = (titulo, descripcion) => {
        setActiveTitulo(titulo);
        setActiveDescripcion(descripcion);
        setActiveAlerta(true);
    }

    const cerrarAlerta = () => {
        setActiveAlerta(false);
    }

    return (
        <>
            <section>
                <div className='creencias'>
                    { creencias.map((creencia) => (
                        <div className='creencia' key={creencia.id} style={{ backgroundImage: `URL(${creencia.img})` }} onClick={() => alertaDescripcion(creencia.titulo, creencia.descripcion)} >
                            <div className='creencia_info'>
                                <h3 className='creencia_titulo'>{creencia.titulo}</h3>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {activeAlerta && (
                <div className='alerta'>
                    <div className='alerta_creencias'>
                        <h2 className='alerta_titulo'>{activeTitulo}</h2>
                        <p className='alerta_descrip'>{activeDescripcion}</p>
                        <span onClick={cerrarAlerta} className='alerta_boton'>
                            <box-icon name='x-circle' type='solid' color='#ff0000' ></box-icon>
                        </span>
                    </div>
               </div>
            )}
        </>
    );
}

SeccionCreencias.propTypes = {
    creencias: PropTypes.array.isRequired,
};

SeccionCreencias.defaultProps = {
    creencias: [],
};

export default SeccionCreencias;
