
const Card = () => {

    return (

    <div className="container mx-auto max-w-xl bg-blue-300 rounded px-10 my-5 ">
        <div>
            <img src="" alt="" />
        </div>
        <div>
            <h2>Card Title</h2>
        </div>
        <div>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nostrum earum nisi harum doloribus accusamus reprehenderit dicta aliquid impedit rem, aspernatur pariatur quisquam repellendus, natus maxime reiciendis aliquam ducimus id vel.</p>
        </div>
        <div className="flex ">
            <button className="bg-green-700 rounded-full px-2 text-white hover:bg-green-500 font-bold m-2">
            boton 1
            </button>
            <button className="bg-green-700 rounded-full text-white px-2 font-bold m-2 hover:bg-green-500">
            boten 2
            </button>
            <button className="bg-green-700 rounded-full m-2 px-2 text-white font-bold hover:bg-green-500">
            boten 3
            </button>
        </div>
    </div>
    )

}


export default Card