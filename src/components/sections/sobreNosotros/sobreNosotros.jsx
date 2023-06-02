import Separador from '../separador/separador';
import './sobreNosotros.css';

const SobreNosotros = () => {
    return (
        <section className="sobre-nosotros">
            <h2 className="sobre_titulo">Lee sobre nosotros</h2>
            <Separador />
            <div className="sobre_info">
                <p className='sobre_subtitulo'>Somos una iglesia Cristiana centrada en Jesucristo y su Palabra y estamos registrados como una asociación o entidad religiosa</p>
                <p className="sobre_descrip">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum odio nemo saepe tenetur, amet deserunt deleniti quibusdam, explicabo exercitationem totam suscipit rem et, quasi rerum ea cum. Quaerat, perspiciatis vel?Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem dicta vel eveniet minus ut quaerat maxime amet voluptatum labore cum, ipsum corrupti quidem, eum omnis. Itaque ipsam unde et nisi.
                </p>
            </div>
        </section>
    );
}

export default SobreNosotros;