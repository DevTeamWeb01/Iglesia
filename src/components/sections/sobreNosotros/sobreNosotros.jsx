const SobreNosotros = () => {
    return (
        <>
            <div className="bg-blue-900 text-white justify-center items-center flex text-center flex-col p-20 gap-5">
                <h2 className="text-3xl color-white">Bienvenidos a nuestra iglesia</h2>
                <span>Somos una Iglesia Cristiana centrada en Jesucristo y su Palabra. Llevamos a nuestros miembros a expresar el objetivo bíblico de vivir para Dios y para los demás.</span>
                <button className="bg-yellow-400 w-1/4 p-4 rounded text-black font-medium flex justify-center">Conoce mas acerca de nosotros</button>
            </div>
            <div className="grid grid-cols-3 grid-rows-4 grid-flow-row border-4 ">
        
                <div className=" row-span-2 border-black border-4 ">
                    <img src="/" alt="" />
                    <h2>Mensaje de nuestro pastor #1</h2>
                    <span>Pastor ...." "</span>
                </div>
                <div className=" row-span-2">
                    <img src="/" alt="" />
                    <h2>Mensaje de nuestro pastor #1</h2>
                    <span>Pastor ...." "</span>
                </div>
                <div className="">
                    <img src="/" alt="" />
                    <h2>Mensaje de nuestro pastor #1</h2>
                    <span>Pastor ...." "</span>
                </div>
                <div className="">
                    <img src="/" alt="" />
                    <h2>Mensaje de nuestro pastor #1</h2>
                    <span>Pastor ...." "</span>
                </div>
                <div className="">
                    <img src="/" alt="" />
                    <h2>Mensaje de nuestro pastor #1</h2>
                    <span>Pastor ...." "</span>
                </div>
                <div className="">
                    <img src="/" alt="" />
                    <h2>Mensaje de nuestro pastor #1</h2>
                    <span>Pastor ...." "</span>
                </div>
            </div>
        </>
    );
}

export default SobreNosotros;