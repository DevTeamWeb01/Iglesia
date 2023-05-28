import './footer.css';

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer_contenido">
                <div className="footer_logo">
                    <img src="/src/assets/img/logo_footer.png" alt="logo footer"/>
                </div>
                <div className='footer_versiculo'>
                    <p>Recibe la información más relevante de Centro de Vida Crisitana directamente en tu correo electrónico.</p>
                </div>
            </div>

            <div className='footer_contacto'>
                <div className='footer_telefono'>
                    <span>
                        <box-icon name='phone' type='solid' color='#ffffff' ></box-icon>
                    </span>
                    <p>(+57) 312 - 2664124</p>
                </div>

                <div className='footer_correo'>
                    <span>
                        <box-icon name='envelope' type='solid' color='#ffffff' ></box-icon>
                    </span>
                    <p>devteamweb01@gmai.com</p>
                </div>
            </div>

            <div className='footer_ubicacion'>
                <span>
                    <box-icon name='map' type='solid' color='#ffffff' ></box-icon>
                </span>
                <h4>¿Donde nos encontramos?</h4>
                <div className='footer_lugares'>
                    <p>Barranquila - Atlantico</p>
                </div>
            </div>
        </div>
    );
}

export default Footer;