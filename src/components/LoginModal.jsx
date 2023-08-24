import React from 'react'

function LoginModal() {
    
  return (
    <>
        <div className='modal-overlay h-screen w-full bg-black bg-opacity-60 fixed top-0 bottom-0 left-0 right-0 flex flex-col flex-nowrap justify-center items-center z-50'>
            <div className='modal-body flex flex-row h-3/4 bg-white fixed w-9/12 rounded-xl p-4'>
                <div className='flex flex-col flex-nowrap w-1/2  font-bold font-mono p-20 text-xl '>
                    welcome to Eduvi online learning platform

                </div>
                <div className='flex flex-col flex-nowrap w-1/2 bg-black'>

                </div>
            </div>
        </div>
       
    </>
  )
}

export default LoginModal