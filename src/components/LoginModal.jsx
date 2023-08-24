import React from 'react'
import EduviLogo from '../assets/eduvi_logo.svg'
import LoginImage from '../assets/login_image.svg'
import DividerVertical from '../assets/divider_line.svg'
import InputComponent from './InputComponent'
import GoogleIcon from '../assets/google_icon2.svg'
import {GoPerson} from 'react-icons/go' 

function LoginModal() {
    
  return (
    <>
        <div className='modal-overlay h-screen w-full bg-black bg-opacity-60 fixed top-0 bottom-0 left-0 right-0 flex flex-col flex-nowrap justify-center items-center z-50'>
            <div className='modal-body flex flex-row h-10/12 bg-white fixed w-8/12 rounded-xl p-4'>
                <div className='flex flex-col flex-nowrap justify-center items-left w-1/2 p-14 pt-10 pr-10 font-sans'>
                    <img src={EduviLogo} alt='eduvi logo' className='w-4/12 mb-5'/>
                    <span className='font-black leading-normal text-4xl mb-5'>
                    welcome to <br/> Eduvi online <br/> learning platform
                    </span>
                    <img src={LoginImage} alt='login asset' className='w-8/12 h-auto m-auto'/>
                </div>
                <img src={DividerVertical} alt='vertical divider' className='h-auto m-auto'/>
                <div className='flex flex-col flex-nowrap justify-center items-center w-1/2 p-10 pt-10 font-sans'>
                    <div className='flex flex-row justify-center items-center font-mono font-thin bg-opacity-10 border-2 h-auto p-2 pr-3 pl-3 mt-2 mb-3 w-auto rounded-md'>
                        <img src={GoogleIcon} alt='google icon' className='h-8 m-auto mr-2'/>
                        <span className='font-sans text-base text-gray-500'>Sign Up with Google</span>
                    </div>
                    <InputComponent logo={<GoPerson className='relative top-7 left-3  text-gray-500'/>} label='Enter name' placeholder='enter name' type='text'/>
                    <InputComponent logo={<GoPerson className='relative top-7 left-3  text-gray-500'/>} label='Enter name2' placeholder='enter name' type='text'/>
                    <InputComponent logo={<GoPerson className='relative top-7 left-3  text-gray-500'/>} label='Enter name3' placeholder='enter name' type='text'/>
                </div>
            </div>
        </div>
       
    </>
  )
}

export default LoginModal