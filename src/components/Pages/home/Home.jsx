import CardsInfo from '../../sections/cards/cards';
import Cookies from '../../sections/cookies/cookies';
import Footer from '../../sections/footer/footer';
import HeroHome from '../../sections/heroHome/heroHome'
import NavBar from '../../sections/navbar/NavBar';
import SobreNosotros from '../../sections/sobreNosotros/sobreNosotros';

const Home = () =>{
    return(
        <>
            <NavBar />
            <HeroHome />
            <Cookies/>
            <SobreNosotros />
            <CardsInfo/>
            
            <Footer />
        </>
    )
}

export default Home;