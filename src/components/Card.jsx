const Card = ({ image, name }) => {
    return (
      <div className="text-gray-100 bg-gray-900/50 rounded-lg shadow-md p-4 mb-4 hover:scale-110 sm:w-full">
        <img src={image} alt={name} className="w-full mb-2 h-40 object-cover" />
        <h2 className="text-xl font-semibold mb-2 text-center">{name}</h2>
        <p className="text-gray-600"></p>
      </div>
    );
  };
  
  export default Card;
  