/* ==== Componentes ==== */
/* ==== Secciones ==== */
import NavBar from '../../sections/navbar/NavBar';
import SeccionServicios from '../../sections/seccionServicios/seccionServicios';
import Footer from '../../sections/footer/footer';
/* ==== Botones ==== */
import BotonUp from '../../Botones/botonUp/botonUp';


const Servicios = () => {
    return (
        <>
            <NavBar />

            <SeccionServicios />

            <BotonUp />
            <Footer />
        </>
    );
}

export default Servicios;