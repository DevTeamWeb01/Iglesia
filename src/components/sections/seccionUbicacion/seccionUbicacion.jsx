import './seccionUbicacion.css'

const SeccionUbicacion = () => {
    return(
        <section className='ubicacion'>
            <h1 className='titulo_ubicacion'>ubicacion</h1>
            <div className='mapas'>
                <iframe
                    src="https://www.google.com/maps/embed?pb=!3m2!1ses!2sco!4v1685823152552!5m2!1ses!2sco!6m8!1m7!1sP5rib-spFe-ZKFp9I1HfpA!2m2!1d10.95559879706313!2d-74.7832944316915!3f286.38687730714554!4f5.616706367288998!5f0.7820865974627469"
                    width="550"
                    height="450"
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Map"
                ></iframe>
            </div>
        </section>
    )
}

export default SeccionUbicacion;