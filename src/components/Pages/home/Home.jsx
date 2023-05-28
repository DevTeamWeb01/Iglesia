import BotonUp from '../../Botones/botonUp/botonUp';
import Cookies from '../../sections/cookies/cookies';
import Footer from '../../sections/footer/footer';
import HeroHome from '../../Heros/heroHome/heroHome'
import NavBar from '../../sections/navbar/NavBar';
import SobreNosotros from '../../sections/sobreNosotros/sobreNosotros';

const Home = () =>{
    return(
        <>
            <NavBar />
            <HeroHome />
            <Cookies/>
            <SobreNosotros />
            <BotonUp />
            <Footer />
        </>
    )
}

export default Home;