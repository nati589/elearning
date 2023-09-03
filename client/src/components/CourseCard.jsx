import React from "react";
import Image from "../assets/Logo.png";
import TimerIcon from '../assets/icons/timer.svg'
import PersonIcon from '../assets/icons/person.svg'
import NoteIcon from '../assets/icons/stickynote.svg'
import DollarIcon from '../assets/icons/dollar.svg'
import EmptyStarIcon from '../assets/icons/empty_star.svg'
import FullStarIcon from '../assets/icons/full_star.svg'

function CourseCard({ course_name,courseImage,course_description, teacherName, rating, hoursNeeded, price,level }) {

  const numbers =[1,2,3,4,5];
  return (
    <div className="relative bg-white rounded-lg border-t-8 border-x-2 min-h-[380px] h-fit md:w-full sm:w-8/12 border-medium-purple p-2 shadow-md">
      {/* <div className="absolute top-0 left-0 w-full h-4 bg-medium-purple rounded-t-lg"></div> */}
      <div className="flex flex-col px-1 items-center justify-center mb-2">
        <span className=" self-start mb-2 text-xl font-semibold font-sans">{course_name}</span>
        <span className=" self-start text-sm font-light font-sans">{course_description}</span>
        <img src={Image} alt="Course" className="w-32 h-32 rounded-lg" />
      </div>
      <div className="grid px-2 md:grid-cols-2 gap-4">
          <div className="flex flex-row flex-nowrap items-center justify-start mb-2">
            <img src={TimerIcon} alt='icon' className="h-4 w-auto"/>
            <span className="ml-2">{hoursNeeded}</span>
          </div>
          <div className="flex flex-row flex-nowrap items-center justify-start mb-2">
            {rating}&nbsp;
                {
                  numbers.map( number =>{
                    if( number <= Math.floor(rating)){
                      return (<img src={FullStarIcon} alt='full star icon' className="h-4 w-auto mr-1"/>)
                    }else{
                      return (<img src={EmptyStarIcon} alt='empty star icon' className="h-4 w-auto mr-1"/>)
                    }
                  })
                }
          </div>
          <div className="flex flex-row flex-nowrap items-center justify-start mb-2">
            <img src={PersonIcon} alt='icon' className="h-4 w-auto"/>
            <span className="ml-2">{teacherName}</span>
          </div>
           <div className="flex flex-row flex-nowrap items-center justify-start mb-2">
            <img src={DollarIcon} alt='icon' className="h-4 w-auto fill-current text-writing-dark"/>
            <span className="ml-2">{price}</span>
          </div>
          <div className="flex flex-row flex-nowrap items-center justify-start mb-2">
            <img src={NoteIcon} alt='icon' className="h-4 w-auto"/>
            <span className="ml-2">level {level}</span>
          </div>
         
         
        </div>
      <div className="flex w-full justify-center mt-4">
        <button className="button-component-stroke py-2 px-4 mb-2">
          Add to Cart
        </button>
      </div>
    </div>
  );
    }
// export default ;
export default CourseCard;