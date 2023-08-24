import React from 'react'
import EduviLogo from '../assets/eduvi_logo.svg'
import LoginImage from '../assets/login_image.svg'
import DividerVertical from '../assets/divider_line.svg'
import InputComponent from './InputComponent'
import GoogleIcon from '../assets/google_icon2.svg'
import {GoLock, GoMail, GoPerson} from 'react-icons/go' 

function LoginModal() {
    
  return (
    <>
        <div className='modal-overlay h-screen w-full bg-black bg-opacity-60 fixed top-0 bottom-0 left-0 right-0 flex flex-col flex-nowrap justify-center items-center z-50'>
            <div className='modal-body flex flex-row h-fit bg-white fixed w-8/12 rounded-xl p-4'>
                <div className='flex flex-col flex-nowrap justify-center items-left w-1/2 p-8 pl-12 font-sans'>
                    <img src={EduviLogo} alt='eduvi logo' className='w-4/12'/>
                    <span className='font-black leading-normal text-4xl mb-5'>
                    welcome to <br/> Eduvi online <br/> learning platform
                    </span>
                    <img src={LoginImage} alt='login asset' className='w-8/12 h-auto m-auto mb-3 mt-3'/>
                </div>
                <img src={DividerVertical} alt='vertical divider' className='h-auto m-auto'/>
                <div className='flex flex-col flex-nowrap justify-center items-center w-1/2 p-8 font-sans'>
                    <a className='flex flex-row justify-center items-center font-thin bg-opacity-10 border-2 h-auto p-2 pr-3 pl-3 mt-2 mb-3 w-auto rounded-lg font-sans text-sm text-gray-500 hover:bg-edu-purple hover:text-white' href='/'>
                        <img src={GoogleIcon} alt='google icon' className='h-8 m-auto mr-2'/>
                        Sign Up with Google
                    </a>
                    <div className='flex flex-row flex-nowrap justify-center items-center w-11/12 text-gray-600 font-bold'>
                       <div className='w-5/12 justify-center items-center px-1 '> <hr className='w-full border-2'/></div>
                        or
                       <div className='w-5/12 justify-center items-center px-1'> <hr className='w-full border-2'/></div>
                    </div>
                    <InputComponent logo={<GoPerson className='relative top-7 left-3  text-gray-500'/>} label='Full name' placeholder='Enter your full name' type='text'/>
                    <InputComponent logo={<GoMail className='relative top-7 left-3  text-gray-500'/>} label='Email' placeholder='Enter your email' type='text'/>
                    <InputComponent logo={<GoLock className='relative top-7 left-3  text-gray-500'/>} label='Password' placeholder='Enter password' type='text'/>
                </div>
            </div>
        </div>
       
    </>
  )
}

export default LoginModal