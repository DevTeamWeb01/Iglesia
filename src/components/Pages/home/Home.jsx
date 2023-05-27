import Footer from '../../sections/footer/footer';
import HeroHome from '../../sections/heroHome/heroHome'
import NavBar from '../../sections/navbar/NavBar';
import SobreNosotros from '../../sections/sobreNosotros/sobreNosotros';

const Home = () =>{
    return(
        <>
            <NavBar />
            <HeroHome />
            <SobreNosotros />
            <Footer />
        </>
    )
}

export default Home;