import React from 'react'

function InputComponent({logo,label, type, placeholder}) {
  return (
    <div className='flex flex-col flex-nowrap w-10/12 m-auto mb-2 mt-2'>
       <label className='font-sans text-base font-medium'>
        {label}
        {logo}
         <input className='flex-row font-mono font-thin bg-opacity-10 border-2 h-10 p-2 pr-3 pl-8 w-full rounded-md' type={type} placeholder={placeholder}/>
        </label>
    </div>
  )
}

export default InputComponent