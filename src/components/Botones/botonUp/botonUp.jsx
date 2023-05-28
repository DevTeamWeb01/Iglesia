import { useEffect, useState } from 'react';
import './botonUp.css'

const BotonUp = () => {

    const [activeBoton, setActiveBoton] = useState(false);

    const subir = () =>{
        const scroll = window.pageYOffset;
        if(scroll > 300){
            setActiveBoton(true);
        } else{
            setActiveBoton(false);
        }
    }

    const scrollUp = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }

    useEffect(() => {
        window.addEventListener('scroll', subir);
        return () => {
            window.removeEventListener('scroll', subir);
        };
    }, []);

    return (
        <>
            { activeBoton && (
                <button className="botonUp" onClick={scrollUp}>
                    <span className='botonUp_icono'>
                        <box-icon name='chevron-up' color="#fff" ></box-icon>
                    </span>
                </button>
            ) }
        </>
    );
}

export default BotonUp;
