import React, { useState } from 'react';
import { BsList} from 'react-icons/bs';
import {BsXLg} from 'react-icons/bs';
import ButtonLogin from './ButtonLogin';
import {Link as Anchor} from 'react-router-dom';
import { useSelector } from 'react-redux';
import userReducer from '../store/reducers/userReducers';

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const user = useSelector(store => store.userReducer.user)
  console.log(user)
  const photo = 'https://static.vecteezy.com/system/resources/thumbnails/009/292/244/small/default-avatar-icon-of-social-media-user-vector.jpg';

  return (
    <div className="bg-gray-900 py-3 fixed top-0 right-0 left-0 text-gray-100 shadow-md">
      <div className='flex justify-between'>
        <div className='flex '>
          <button className='text-3xl ml-4 mb-4' onClick={() => setOpen(true)}>
            <BsList />
          </button>
          <h1 className='text-6xl '> 
                My Tynerary
          </h1>
        </div>
        <div className='mr-4'>
          <img 
            src={user ? user.image : photo} alt="" 
            className='rounded-full h-20 w-20  '
          />
        </div>
      </div>

      <div className={`${!open && "hidden"} bg-grey-600/50 min-h-screen w-full fixed top-0 right-0 left-0
      backdrop-blur-sm`} onClick={() => setOpen(false)}></div>

      <div className={` ${open ? "w-110" : "w-0"} bg-gray-900  min-h-screen  fixed top-0 left-0 text-gray-100 transition-all duration-300`}>
          <div className={` ${!open && "hidden"} pt-3`}>
            <div className='flex'>
              <button className='text-3xl ml-4 mt-1' onClick={() => setOpen(false)}>
              <BsXLg />
              </button>
              <h1 className='text-6xl text right'>My Tynerary</h1>
            </div>
            <div className='text-center text-white text-xl hover:bg-green-500 py-3 m-3 flex justify-center flex-col'>
              {
                user?
                  null
                :
                  <Anchor title='signin' to="/signin" onClick={() => setOpen(false)}>
                    <ButtonLogin/> LOGIN
                  </Anchor>
              }
            </div>
            <div className='text-center text-white text-xl hover:bg-green-500 py-3 m-3'>
              <Anchor title='home' to="/" onClick={() => setOpen(false)}>
                HOME
              </Anchor>
            </div>
            <div className='text-center text-white text-xl hover:bg-green-500 py-3 m-3'>
              <Anchor title='cities' to="/cities" onClick={() => setOpen(false)}>
                CITIES
              </Anchor>
            </div>
          </div>
      </div>
    </div>
  )
};

export default Navbar;
