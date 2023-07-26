import './seccionServicios.css'

const SeccionServicios = () => {
  return (
    <section className="servicios">
        <h2 className="servicios__titulo">Horarios de Servicios</h2>
        <div className="servicios__tabla">
            <div className="servicios__fila">
                <div className="servicios__dia">Martes</div>
                <div className="servicios__hora">7:00 PM</div>
                <div className="servicios__evento">Fuego</div>
            </div>
            <div className="servicios__fila">
                <div className="servicios__dia">Miércoles</div>
                <div className="servicios__hora">10:00 AM</div>
                <div className="servicios__evento">Formación y Discipulado</div>
            </div>
            <div className="servicios__fila">
                <div className="servicios__dia">Jueves</div>
                <div className="servicios__hora">7:00 PM</div>
                <div className="servicios__evento">Gloria</div>
            </div>
            <div className="servicios__fila">
                <div className="servicios__dia">Sábado</div>
                <div className="servicios__hora">10:00 AM</div>
                <div className="servicios__evento">Ayuno de Rompimiento</div>
            </div>
            <div className="servicios__fila">
                <div className="servicios__dia">Sábado</div>
                <div className="servicios__hora">7:00 PM</div>
                <div className="servicios__evento">Noche de Sanidad y Milagros</div>
            </div>
            <div className="servicios__fila">
                <div className="servicios__dia">Domingo</div>
                <div className="servicios__hora">10: 00 AM</div>
                <div className="servicios__evento">Escuela Dominical</div>
            </div>
        </div>
</section>

  )
}

export default SeccionServicios