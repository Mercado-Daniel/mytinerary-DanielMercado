import { BsFacebook } from 'react-icons/bs';
import { BsInstagram } from 'react-icons/bs';
import { BsWhatsapp } from 'react-icons/bs';

const Footer = ()=>{
    return (
        <footer className=" bg-gray-900 fixed bottom-0 left-0 right-0 text-gray-100 flex justify-center">
            <BsFacebook className='text-3xl m-5'></BsFacebook>
            <BsInstagram className='text-3xl m-5'></BsInstagram>
            <BsWhatsapp className='text-3xl m-5'></BsWhatsapp>
        </footer>
    )
}

export default Footer