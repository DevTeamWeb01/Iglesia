import './creencia.css';
/* ==== Componentes ==== */
/* ==== Secciones ==== */
import NavBar from '../../sections/navbar/NavBar';
import HeroCreencias from '../../Heros/heroCreencias/heroCreencias';
import SeccionCreencias from '../../sections/seccionCreencias/seccionCreencias';
import Footer from '../../sections/footer/footer';
/* ==== Botones ==== */
import BotonUp from '../../Botones/botonUp/botonUp';
/* ==== Js ==== */
import creencias from '../../../JS/creencias';

const Creencia = () => {
    return (
        <>
            <NavBar />
            <HeroCreencias />

            <SeccionCreencias creencias={creencias}/>

            <BotonUp />
            <Footer />
        </>
    );
}

export default Creencia;