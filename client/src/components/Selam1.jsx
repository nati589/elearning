import React from 'react'
import dollar from "../assets/icons/dollar.svg";
import person from "../assets/icons/person.svg"
import timer from "../assets/icons/timer.svg"
import fullstar from "../assets/icons/full_star.svg";
import stickynote from "../assets/icons/stickynote.svg";

const Selam1 = ({ course_title, course_details, course_thumbnail, course_total_hour, course_instructure, course_level, course_rate, course_price }) => {
  return (
    <div className="card bg-white border-l-8 border-l-dark-purple rounded-lg shadow-md my-4 p-6 md:w-64 md:h-48">
    <h1 className="text-2xl mb-4 font-bold">{course_title}</h1>
    <div className="grid grid-cols-2 gap-2">
      <div className="col-span-1">
        <img className="w-16 h-16" src={course_thumbnail} alt="books" />
      </div>
      <div className="col-span-1">
        <p className="text-sm">{course_details}</p>
      </div>
    </div>
    <div className="flex flex-row mt-2">
      <div className="flex-grow">
        <div className="grid grid-rows-3">
          <div className='flex flex-row'>
            <img className="w-4 h-4" src={timer} alt="" />
            <p className="ml-2">{course_total_hour}</p>
          </div>
          <div className='flex flex-row'>
            <img className="w-4 h-4" src={person} alt="" />
            <p className="ml-2">{course_instructure}</p>
          </div>
          <div className='flex flex-row'>
            <img className="w-4 h-4" src={stickynote} alt="" />
            <p className="ml-2">{course_level}</p>
          </div>
        </div>
      </div>
      <div className="flex-grow">
        <div className="grid grid-rows-3">
          <div className='flex flex-row'>
            <p className="ml-2">{course_rate}</p>
            <img className="w-3 h-3" src={fullstar} alt="" />
            <img className="w-3 h-3" src={fullstar} alt="" />
            <img className="w-3 h-3" src={fullstar} alt="" />
            <img className="w-3 h-3" src={fullstar} alt="" />
            <img className="w-3 h-3" src={fullstar} alt="" />
          </div>
          <div className='flex flex-row'>
            <img className="w-4 h-4" src={dollar} alt="" />
            <p className="ml-2">{course_price}</p>
          </div>
          <div className='flex flex-row'>
            <button className="button-component-stroke">Add to Cart</button>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Selam1