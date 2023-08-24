import React from 'react'

function InputComponent({logo,label, type, placeholder}) {
  return (
    <div className='flex flex-col flex-nowrap w-10/12 m-auto mb-2 mt-2'>
        <label className='font-sans text-base font-medium leading-4'>
        {label}
        {logo}
            <input className='flex-row font-sans font-thin text-sm bg-opacity-10 border-2 h-10 pt-2 pb-2 pr-3 pl-9 mb-3 w-full rounded-lg' type={type} placeholder={placeholder}/>
        </label>
    </div>
  )
}

export default InputComponent