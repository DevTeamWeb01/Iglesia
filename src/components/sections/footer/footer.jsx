import "./footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer_contenido">
        <div className={(`footer_logo`, `justify-arround`)}>
          <img
            className="h-[100px]"
            src="/src/assets/img/logo_footer.png"
            alt="logo footer"
          />
        </div>
        <div className="footer_versiculo">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti eum dolor facere tempore beatae fugiat repudiandae, repellendus quae vel aliquam aspernatur maiores nihil esse. Sapiente et quam maxime sit rerum.
          </p>
        </div>
      </div>

      <div className="footer_info">
        <div className="footer_contacto">
          <div className="footer_telefono">
            <span>
              <box-icon name="phone" type="solid" color="#ffffff"></box-icon>
            </span>
            <p>(+57) 301 - 6401323</p>
          </div>

          <div className="footer_correo">
            <span>
              <box-icon name="envelope" type="solid" color="#ffffff"></box-icon>
            </span>
            <p>Pastordavidgalindo0@gmail.com</p>
          </div>
        </div>

        <div className="footer_ubicacion">
          <div className="footer_pregunta">
            <span>
              <box-icon name="map" type="solid" color="#ffffff"></box-icon>
            </span>
            <h4>¿Dónde nos encontramos?</h4>
          </div>
          <div className="footer_ciudades">
            <p>Barranquila - Colombia • Ciénega - Colombia</p>
          </div>
        </div>
      </div>

      <div className="footer_derechos">
        <p>
          Iglesia Rios de Avivamientos para las Naciones ® Todos los Derechos
          Reservados. Somos una iglesia centrada en Jesucristo y su Palabra
          y estamos registrados como una asociación o entidad religiosa en
          Colombia. <span> Diseñado y Desarrollado por DevTeamWeb ®</span>
        </p>
      </div>
    </div>
  );
};

export default Footer;
