import BotonUp from '../../Botones/botonUp/botonUp';
import Footer from '../../sections/footer/footer';
import HeroHome from '../../Heros/heroHome/heroHome'
import NavBar from '../../sections/navbar/NavBar';
import SobreNosotros from '../../sections/sobreNosotros/sobreNosotros';
import SeccionMisionVision from '../../sections/seccionMisionVision/seccionMisionVision';
import SeccionPastores from '../../sections/seccionPastores/seccionPastores';

const Home = () =>{
    return(
        <>
            <NavBar />
            <HeroHome />

            <SobreNosotros />
            <SeccionMisionVision />
            <SeccionPastores />

            <BotonUp />
            <Footer />
        </>
    )
}

export default Home;