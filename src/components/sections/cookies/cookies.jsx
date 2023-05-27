import React from 'react'
import './cookies.css'

const Cookies = () => {
    return ( 
        <>
            <div className="wrapper-cookies"> 
                <span className="text-cookies">Esta web utiliza cookies, puedes ver nuestra política de cookies, aquí Si continuas navegando estás aceptándola</span>
                <button onClick={() => alert('Aceptaste las politicas')} className="btn-cookies">Aceptar</button>
            </div>
        </>
     );
}
 
export default Cookies;