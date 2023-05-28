import './seccionCreencias.css';
import PropTypes from 'prop-types';

const SeccionCreencias = ({creencias}) => {
    return (
        <>
            <h1>Creemos</h1>
            <div className='creencias'>
                { creencias.map((creencia) => (
                    <div className='creencia' key={creencia.id}>
                        <p>{creencia.id}</p>
                        <h3>{creencia.titulo}</h3>
                        <p>{creencia.descripcion}</p>
                    </div>
                ))}
            </div>
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