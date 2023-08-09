import React, { useState } from "react";
import { useEffect } from "react";



const Carrousel = () => {
    const [index, setIndex] = useState(0); // Estado inicial debe ser 0
    const images = [
    // Aquí debes proporcionar las imágenes con la propiedad 'url' y 'title'
    { url:"https://www.labrujula24.com/wp-content/uploads/2021/11/baires.jpg", title: "Buenos Aires" },
    { url:"https://media.staticontent.com/media/pictures/e63f71e3-03fb-4c1b-a1e6-c8b1586a7e73", title: "Rio De Janeiro" },
    { url:"https://www.defin.mx/wp-content/uploads/2014/10/Mexico-de-Noche.jpg", title: "Cidad De Mexico" },
    { url:"https://media.staticontent.com/media/pictures/97addb06-2c89-4f6f-972b-b3708fb1e29c", title: "Santiago De Chile" },
    { url:"https://viajerosocultos.com/wp-content/uploads/2023/01/pexels-simon-berger-10586819-scaled.jpg", title: "El Cairo" },
    { url:"https://www.naiz.eus/media/asset_publics/resources/000/689/788/article_main_landscape/vista_panora%CC%81mica.jpg", title: "Estambul" },
    { url:"https://cimg.co/news/64363/38867/adobestock-358322998.jpg", title: "Seul" },
    { url:"https://images.ctfassets.net/bth3mlrehms2/2cCxpmVnFuv9cwMkr2NsqO/c007c069037ffd565da823c0521768c5/Japan_Tokio_Skyline_und_Mt._Fuji.jpg?w=3721&h=2093&fl=progressive&q=50&fm=jpg", title: "Tokio" },
    { url:"https://lonelyplanetes.cdnstatics2.com/sites/default/files/styles/max_1300x1300/public/fotos/rusia_moscu_kremlin_500pxrf_61786861_dmitry_vinogradov_500px.jpg?itok=SPRtXdMw", title: "Moscu" },
    { url:"https://upload.wikimedia.org/wikipedia/commons/6/67/London_Skyline_%28125508655%29.jpeg", title: "Londres" },
    { url:"https://www.tourmag.com/photo/art/grande/67984859-47943899.jpg?v=1665757294", title: "Nueva York" },
    { url:"https://mochilerosdeviaje.com/wp-content/uploads/2022/07/que-hacer-3-dias-en-los-angeles-1280x720.jpg", title: "Los Angeles" }
    
];

const handlePrev = () => {
    setIndex((prevIndex) => {
        const newIndex = prevIndex - 4;
        return newIndex >= 0 ? newIndex : images.length - 4;
    });
};

    const handleNext = () => {
        setIndex((prevIndex) => {
            const newIndex = prevIndex + 4;
            return newIndex <= images.length - 4 ? newIndex : 0
        }); // Suma 4 al índice actual, pero asegura que no sea mayor que el índice máximo
};

useEffect(() => {
    setInterval(() => {
        handleNext();
    },5000)
}
,[]
);

  // Aquí obtendremos el grupo de imágenes a mostrar en el carrusel
    const currentImages = images.slice(index, index + 4);

    return (
        <div className="container mx-auto mt-20">
            <h2 className="text-center text-3xl bg-green-700 text-gray-100">Popular Mytineraries!</h2>
            <div className=" grid grid-cols-2 grid-rows-2 bg-gray-300 ">
            {currentImages.map((image) => (
                <div
                key={image.title}
                className="flex flex-col items-center border m-1 h-40"
                style={{ backgroundImage: `url(${image.url})`, backgroundSize: "cover", backgroundPosition: "center" }}
                >
                    <p className="bg-white text-center p-2 opacity-80  ">{image.title}</p>
                </div>
                ))}
            </div>
            <div className="grid grid-cols-2">
                <button className="bg-green-700 hover:bg-green-500 text-white font-bold py-2 px-4 rounded " onClick={handlePrev}>
                    Prev
                </button>
                <button className="bg-green-700 hover:bg-green-500 text-white font-bold py-2 px-4 rounded " onClick={handleNext}>
                    Next
                </button>
            </div>
        </div>
    );
};

export default Carrousel;