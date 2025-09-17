import React, { useState } from 'react'
import loginIcon from '../assest/signin.gif'
import { FaEye } from "react-icons/fa6";
import { FaEyeSlash } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Login = () => {
    const [showPassword, setShowPassword] = useState(false);
  return (
    <section id='login'>
        <div className='mx-auto container p-4'>
            <div className='bg-white p-2 py-5 w-full max-w-sm mx-auto'>
                <div className=' w-20 h-20 mx-auto '>
                    <img src={loginIcon} alt="LoginIcon" />
                </div>
                <form className='pt-6'>
                    <div className='grid'>
                        <label htmlFor="email" className='block mb-1 text-gray-600 font-semibold'>Email : </label>
                       <div className='bg-slate-100 p-2'>
                        <input type="email" id='email' className='w-full h-full outline-none bg-transparent' placeholder='Enter your email' />
                    </div>
                    </div>
                    
                      <div >  
                        <label htmlFor="password" className='block mb-1 text-gray-600 font-semibold'>Password : </label>
                        <div className='bg-slate-100 p-2 flex'>
                        <input type={showPassword ? "text" : "password"} id='password' className='w-full h-full outline-none bg-transparent' placeholder='Enter your password' />
                       <div className='cursor-pointer text-lg' onClick={() => setShowPassword((preve)=> !preve)}>
                       <span> 
                        {
                            showPassword ? (

                                 <FaEyeSlash /> 

                            )
                            :
                            (
                                <FaEye />
                            )
                        }
                          
                                      
                    </span>
                    </div>
                    </div>
                    <Link to={'/forgot-password'} className='block w-fit ml-auto hover:underline hover:text-red-600'>
                    Forget Password</Link>
                    </div>
                    <button type='submit' className='w-full bg-red-600 text-white py-2 rounded-full mt-[20px] hover:scale-110  hover:transition duration-300 '>Login</button>
                </form>
                <p className='my-5'>Don't have account? <Link to={'/sign-up'} className='hover:text-red-600 hover:underline'>Sign up</Link></p>
            </div>

        </div>
    </section>
  )
}

export default Login