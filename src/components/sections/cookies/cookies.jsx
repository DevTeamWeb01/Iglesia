import { useState } from "react";
import "./cookies.css";

const Cookies = () => {
  const [activeCookie, setActiveCookie] = useState(true);

  const removeCookie = () => {
    if (activeCookie) {
      setActiveCookie(false);
    }
  };

  return (
    <>
      {activeCookie && (
        <div className="bg-[#1b1b1b] h-auto p-4 flex items-center fixed top-[600px] w-full justify-evenly">
          <span className="text-white font-semibold text-xls">
            Esta web utiliza cookies, puedes ver nuestra política de cookies,
            aquí Si continuas navegando estás aceptándola
          </span>
          <button
            onClick={removeCookie}
            className="bg-yellow-400 w-[200px] p-2 rounded text-black"
          >
            Aceptar
          </button>
        </div>
      )}
    </>
  );
};

export default Cookies;
