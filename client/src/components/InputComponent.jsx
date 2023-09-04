import React from 'react'
import { useFormContext } from 'react-hook-form'
import { AnimatePresence } from 'framer-motion';
import isFormInvalid from '../utils/isFormInvalid'
import findInputError from '../utils/findInputError'
import InputError from './InputError';

function InputComponent({logo,label, name,  type, placeholder, required, validation}) {

  const {register, formState: { errors },} = useFormContext()

const inputError = findInputError(errors, name)
const isInvalid = isFormInvalid(inputError)

  return (
    <div className='flex flex-col flex-nowrap w-10/12 m-auto mb-2 mt-2'>
        
        <label className='font-sans text-base font-medium leading-4'>
        <AnimatePresence mode="wait" initial={false}>
           {isInvalid && ( 
            <InputError
                message={inputError.error.message}
                key={inputError.error.message}
              />
            )            
            }
        </AnimatePresence>
        {label}
        {logo}
            <input className='flex-row font-sans font-thin text-sm bg-opacity-10 border-2 h-10 pt-2 pb-2 pr-3 pl-9 mb-3 w-full rounded-lg' 
             type={type} placeholder={placeholder} required={required}
             {...register(name, validation)}/>
        </label>
    </div>
  )
}

export default InputComponent