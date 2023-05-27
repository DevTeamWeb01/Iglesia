import fundador from '../../../assets/img/fundador.png'
import './cards.css'
const CardsInfo = () => {
    return ( 
        <>
            <div className="wrapper-cards">
                <div className="cards-colum">
                    <div className="card-colum">
                        <img className='img-colum' src={fundador} alt="Fundador" />
                        <h2>Conoce a nuestro fundador</h2>
                        <span>Pastor Juan Salcedo</span>
                    </div>
                    <div className="card-colum">
                        <img className='img-colum' src={fundador} alt="Fundador" />
                        <h2>Conoce a nuestro fundador</h2>
                        <span>Pastor Juan Salcedo</span>
                    </div>
                </div>
                <div className="cards-row">
                    <div className="card-row">
                    <img src={fundador} alt="Fundador" />
                        <h2>Conoce a nuestro Fundadora</h2>
                        <span>Pastor Juan Salcedo</span>
                    </div>
                    <div className="card-row">
                        <img src={fundador} alt="Fundador" />
                            <h2>Conoce a nuestro Fundadora</h2>
                            <span>Pastor Juan Salcedo</span>
                    </div>
                    <div className="card-row">
                    <img src={fundador} alt="Fundador" />
                            <h2>Conoce a nuestro Fundadora</h2>
                            <span>Pastor Juan Salcedo</span>
                    </div>
                </div>
            </div>
        </>
     );
}
 
export default CardsInfo;