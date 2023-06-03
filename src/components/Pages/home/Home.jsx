import BotonUp from '../../Botones/botonUp/botonUp';
import Cookies from '../../sections/cookies/cookies';
import Footer from '../../sections/footer/footer';
import HeroHome from '../../Heros/heroHome/heroHome'
import NavBar from '../../sections/navbar/NavBar';
import SobreNosotros from '../../sections/sobreNosotros/sobreNosotros';
import SeccionMisionVision from '../../sections/seccionMisionVision/seccionMisionVision';

const Home = () =>{
    return(
        <>
            <NavBar />
            <HeroHome />
            <Cookies/>

            <SobreNosotros />
            <SeccionMisionVision />

            <BotonUp />
            <Footer />
        </>
    )
}

export default Home;