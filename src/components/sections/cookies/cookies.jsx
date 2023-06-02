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
            <div className="text-white flex items-center justify-center gap-4 flex-col bg-blue-700 p-6 fixed top-[550px] h-[120px] w-[100%]">
                <span className="text-white font-semibold text-xls">Esta web utiliza cookies, puedes ver nuestra política de cookies, aquí Si continuas navegando estás aceptándola</span>
                <button onClick={removeCookie} className="bg-yellow-400 w-[200px] p-2 rounded text-black">Aceptar</button>
            </div>
        ) }
        </>
    );
}

export default Cookies;