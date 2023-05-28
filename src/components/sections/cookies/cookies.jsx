import { useState } from 'react';
import './cookies.css'

const Cookies = () => {

    const [activeCookie, setActiveCookie] = useState(true);

    const removeCookie = () => {
        if(activeCookie){
            setActiveCookie(false);
        }
    }

    return (
        <>
        { activeCookie && (
            <div className="wrapper-cookies">
                <span className="text-cookies">Esta web utiliza cookies, puedes ver nuestra política de cookies, aquí Si continuas navegando estás aceptándola</span>
                <button onClick={removeCookie} className="btn-cookies">Aceptar</button>
            </div>
        ) }
        </>
    );
}

export default Cookies;