import React from 'react'
import Logo from './Logo'
import { FaSearch } from "react-icons/fa";
import { FaUserCircle } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="h-16 shadow-md bg-white">
      <div className="h-full container mx-auto flex items-center px-4 justify-between">
        <div className="">

          <Link to="/"> <Logo w={90} h={50} /></Link>
        </div>
        <div className=' hidden lg:flex items-center w-full justify-between max-w-sm border rounded-full focus-within:shadow pl-2'>
          <input className='w-full outline-none pl-2' type="text" placeholder='search product .....' />
          <div className='text-lg min-w-[50px] h-8 flex items-center justify-center bg-red-600 text-white rounded-r-full cursor-pointer '>
            <FaSearch />

          </div>
        </div>

        <div className='flex items-center gap-6 '>
          <div className='text-3xl text-gray-600 cursor-pointer'>
            <FaUserCircle />
          </div>
          <div className='text-3xl text-gray-600 cursor-pointer relative'>
            <span><FaShoppingCart /> </span>
            <div className='bg-red-600 text-white w-5 h-5 rounded-full flex items-center justify-center text-xs font-semibold absolute -top-2 -right-3'>
              <p className='text-sm'>0</p>
            </div>
          </div>
          <div>
            <Link to={"/login"} className='px-3 py-1 bg-red-600 rounded-full text-white hover:bg-red-800'>Login</Link>
          </div>

        </div>
      </div>
    </header>
  )
}

export default Header