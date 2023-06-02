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
            Recibe la información más relevante de Centro de Vida Crisitana
            directamente en tu correo electrónico.
          </p>
        </div>
      </div>

      <div className="footer_info">
        <div className="footer_contacto">
          <div className="footer_telefono">
            <span>
              <box-icon name="phone" type="solid" color="#ffffff"></box-icon>
            </span>
            <p>(+57) 312 - 2664124</p>
          </div>

          <div className="footer_correo">
            <span>
              <box-icon name="envelope" type="solid" color="#ffffff"></box-icon>
            </span>
            <p>devteamweb01@gmai.com</p>
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
            <p>Barranquila - Atlántico • Ciénega - Boyacá</p>
          </div>
        </div>
      </div>

      <div className="footer_derechos">
        <p>
          Iglesia Rios de Avivamientos para las Naciones ® Todos los Derechos
          Reservados. 2023 Somos una iglesia centrada en Jesucristo y su Palabra
          y estamos registrados como una asociación o entidad religiosa en
          Colombia. Diseñado y Desarrollado por: DevTeamWeb ®
        </p>
      </div>
    </div>
  );
};

export default Footer;
