import { useState} from "react";

const CardItinerary = ({ userImage, userName,price, name  , duration, likes, hashtags}) => {
    
    const priceIcons = (price) => {
        const icons = [];
        for (let i = 0; i < price; i++) {
                icons.push(
                    <span key={i} className="text-yellow-500 text-xl mr-1">
                        💵
                    </span>
                )
            }
        return icons;
        }

        const [showMore, setShowMore] = useState(false);
            // Función para alternar la visibilidad del párrafo
        const toggleMore = () => {
            setShowMore(!showMore);
        };
    
    
    return (
        <div className="w-full mx-auto overflow-hidden bg-gray-900 rounded-lg shadow-lg flex flex-col justify-between">
            <div className="flex items-center justify-center">
                <img src={userImage} alt="User" className="h-40 w-40 my-4 rounded-full " />
                
            </div>
            <div className="flex items-center justify-center">
                <p className="text-gray-100 text-base">
                    User: {userName}
                </p>
            </div>
            <div className="px-6 py-4 flex-grow">
                <div className="font-bold text-xl mb-2 text-gray-100">{name}</div>
                    <p className="text-gray-100 text-base">
                        Price: ${priceIcons(price)}
                    </p>
                    <p className="text-gray-100 text-base">
                        Duration: {duration} hours
                    </p>
                    <p className="text-gray-100 text-base">
                        Likes: {likes}
                    </p>
                <div className="mt-4">
                    <p className="text-gray-100 text-base">
                        Hashtags: {hashtags.join(", ")}
                    </p>
                </div>
            </div>
        
            <div className="flex flex-col items-center justify-center ">
                <button 
                    onClick={toggleMore}
                    className="text-xl bg-green-700 rounded px-2 text-white hover:bg-green-500 font-bold m-2"
                >
                    view more
                </button>
                {showMore && (
                    <p className="text-gray-100 text-base px-6 py-2">
                        under construction
                    </p>
                )}
            </div>
        </div>
    )
    }

export default CardItinerary;