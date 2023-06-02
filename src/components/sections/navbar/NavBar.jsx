const menu = ["Home", "Creencias", "Sobre Nostros"];
const NavBar = () => {
  return (
    <div>
      <div className="bg-[#141618] text-white  h-12 items-center flex  justify-center">
        <h2>Inglesia Rios de Avivamiento</h2>
      </div>
      <nav className="flex bg-[#1b1b1b] text-white sticky top-0 z-[98]">
        {menu.map((items, index) => (
          <ul className="p-4 hover:bg-white hover:text-black cursor-pointer" key={index}>
            <li className="flex">{items}</li>
          </ul>
        ))}
      </nav>
    </div>
  );
};

export default NavBar;
