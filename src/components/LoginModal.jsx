import React from 'react'
import EduviLogo from '../assets/eduvi_logo.svg'
import LoginImage from '../assets/login_image.svg'
import DividerVertical from '../assets/divider_line.svg'
import InputComponent from './InputComponent'
import GoogleIcon from '../assets/google_icon2.svg'
import {GoLock, GoMail} from 'react-icons/go' 
import { GoXCircle } from 'react-icons/go'

function LoginModal({toggle, toggleSignup}) {
    
  return (
    <>
        <div  className='modal-overlay h-screen w-full bg-black bg-opacity-60 fixed top-0 bottom-0 left-0 right-0 flex flex-col flex-nowrap justify-center items-center z-50'>
            <div className='modal-body flex flex-col h-fit bg-white w-8/12 rounded-xl p-4'>
                <GoXCircle onClick={toggle} className='block self-end text-edu-purple w-8 h-auto'/>
                <div className='modal-body flex flex-row'>
                    <div className='flex flex-col flex-nowrap justify-center items-left w-1/2 p-8 pl-24 font-sans'>
                        <img src={EduviLogo} alt='eduvi logo' className='w-2/12'/>
                        <span className=' leading-normal font-black text-4xl mb-5'>
                            Welcome to <br/> EthLang online <br/> learning platform
                        </span>
                        <img src={LoginImage} alt='login asset' className='w-8/12 h-auto m-auto mb-3 mt-3'/>
                    </div>
                    <img src={DividerVertical} alt='vertical divider' className=' h-[500px] m-auto'/>
                    <div className='flex flex-col flex-nowrap justify-center items-center w-1/2 p-8 font-sans'>
                        <a className='flex flex-row justify-center items-center font-thin bg-opacity-10 border-2 h-auto p-2 pr-3 pl-3 mt-2 mb-3 w-auto rounded-lg font-sans text-sm text-gray-500 hover:bg-edu-purple hover:text-white' href='/'>
                            <img src={GoogleIcon} alt='google icon' className='h-8 m-auto mr-2'/>
                            Sign In with Google
                        </a>
                        <div className='flex flex-row flex-nowrap justify-center items-center w-11/12 text-gray-600 text-sm font-bold'>
                        <div className='w-3/12 justify-center items-center px-1 '> <hr className='w-full border-2'/></div>
                            or sign in with your email
                        <div className='w-3/12 justify-center items-center px-1'> <hr className='w-full border-2'/></div>
                        </div>

                        <form className='login-form w-full flex flex-col flex-nowrap justify-center items-center' onSubmit={e => e.preventDefault()} >
                                <InputComponent logo={<GoMail className='relative top-7 left-3  text-gray-500'/>} label='Email' placeholder='Enter your email' type='email' required='required'/>
                                <InputComponent logo={<GoLock className='relative top-7 left-3  text-gray-500'/>} label='Password' placeholder='Enter password' type='password' required='required'/>
                                <label className='text-grey-500 text-sm'>
                                <input type="checkbox"  className='mx-3 text-edu-purple' required/>
                                Keep me signed in &nbsp; <a href='/' className='text-edu-purple '>Forgot password?</a>
                                </label>

                                <button className='w-9/12 h-10 my-3 bg-edu-purple hover:bg-edu-purple-hover rounded-md text-white'>
                                Sign In
                                </button>
                        </form>
                        <span className='text-sm text-grey-500 font-sans'>Don't have an account? <span onClick={toggleSignup} className='text-edu-purple '>Sign Up</span></span>
                    </div>
                </div>
            </div>
       </div>
    </>
  )
}

export default LoginModal