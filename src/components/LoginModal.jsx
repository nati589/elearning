import React from 'react'
import EduviLogo from '../assets/eduvi_logo.svg'
import LoginImage from '../assets/login_image.svg'
import DividerVertical from '../assets/divider_line.svg'

function LoginModal() {
    
  return (
    <>
        <div className='modal-overlay h-screen w-full bg-black bg-opacity-60 fixed top-0 bottom-0 left-0 right-0 flex flex-col flex-nowrap justify-center items-center z-50'>
            <div className='modal-body flex flex-row h-10/12 bg-white fixed w-8/12 rounded-xl p-4'>
                <div className='flex flex-col flex-nowrap justify-center items-left w-1/2 p-14 pt-10 pr-10 font-sans'>
                    <img src={EduviLogo} alt='eduvi logo' className='w-4/12 mb-5'/>
                    <span className='font-black leading-normal text-{40px} mb-5'>
                    welcome to <br/> Eduvi online <br/> learning platform
                    </span>
                    <img src={LoginImage} alt='login asset' className='w-8/12 h-auto m-auto'/>
                </div>
                <img src={DividerVertical} alt='vertical divider' className='h-auto m-auto'/>
                <div className='flex flex-col flex-nowrap justify-center items-left w-1/2 p-10 pt-10 font-sans'>
                    <img src={EduviLogo} alt='eduvi logo' className='w-4/12 mb-5'/>
                    <span className='font-black leading-18 mb-5'>
                    welcome to <br/> Eduvi online <br/> learning platform
                    </span>
                    <img src={LoginImage} alt='login asset' className='w-8/12 h-auto m-auto'/>
                </div>
            </div>
        </div>
       
    </>
  )
}

export default LoginModal