import {Link as Anchor} from 'react-router-dom'

const Hero = () => {
    return (
      <div className="container p-10 mx-auto mb-20 bg-gray-900 rounded-3xl px-1 my-5 border-2 text-gray-100 flex flex-col lg:flex-row lg:items-center">
        <div className="lg:w-2/3">
          <img
            src="https://viajoconvos.com.ar/wp-content/uploads/2016/11/avion-despegando-de-la-pista-en-el-aeropuerto.jpg"
            alt=""
            className="w-full rounded-3xl"
          />
        </div>
        <div className="lg:w-1/3 p-5">
          <h2 className="text-3xl">My Tinerary</h2>
          <div className="text-xl">
            <p>Find your perfect trip, designed by insiders who know their cities!</p>
          </div>
          <div className="flex">
            <Anchor  to={`/cities`}>
              <button className="bg-green-700 rounded-full px-2 text-white hover:bg-green-500 font-bold m-2">
                View More
              </button>
            </Anchor>
          </div>
        </div>
      </div>
    );
  };
  
  export default Hero;