import React from 'react'
import dollar from"../assets/icons/dollar.svg";
import person from"../assets/icons/person.svg"
import timer from"../assets/icons/timer.svg"
import fullstar from"../assets/icons/full_star.svg";
import stickynote from"../assets/icons/stickynote.svg";



const PopularCourseCard = ({course_title,course_details,course_thumbnail,course_total_hour,course_instructure,course_level,course_rate,course_price}) => {
  return (

  
<div className="card bg-white border-l-8 border-l-dark-purple rounded-lg shadow-md my-4 p-6">
<h1 className="text-4xl mb-4 font-bold">{course_title}</h1>
 <div  className="grid grid-cols-4 gap-4"> 
     <div className="col-span-1"><img className="w-60 h-13 " src={course_thumbnail} alt="books" /></div><div className="col-span-3"><p className="text-lg">{course_details}</p></div></div>
   
    <div className="flex flex-row m-10">
   <div className="flex-grow">
   <div className="grid grid-rows-3 ">
   <div className='flex flex-row'>
   <img  className="w-6 h-6"src={timer} alt="" />
   <p  className="ml-2">{course_total_hour}</p>
  
   </div>
   <div className='flex flex-row'>
   <img  className="w-6 h-6"src={person} alt="" />
   <p  className="ml-2">{course_instructure}</p>
   </div>
   <div className='flex flex-row'>
   <img  className="w-6 h-6"src={stickynote} alt="" />
   <p className="ml-2">{course_level}</p>
   </div>
 
 
 </div>
   </div>
   <div className="flex-grow">
   <div className="grid grid-rows-3 ">
   <div className='flex flex-row'>
   <p  className="ml-2">{course_rate}</p>
   <img  className="w-4 h-4" src={fullstar} alt="" />
   <img  className="w-4 h-4" src={fullstar} alt="" />
   <img  className="w-4 h-4" src={fullstar} alt="" />
   <img  className="w-4 h-4" src={fullstar} alt="" />
   <img  className="w-4 h-4" src={fullstar} alt="" />


   </div>
   <div className='flex flex-row'>
   <img  className="w-6 h-6"src={dollar} alt="" />
   <p  className="ml-2">{course_price}</p>
   </div>
 <div className='flex flex-row-m'>
 <button className="button-component-stroke"> Add to cart</button>
   {/* <button className="bg-white-600 hover:bg-blue-800 text-blue font-bold py-2 px-4 rounded border border-purple-500"> Add to cart</button> */}
   </div>
 
 
 </div>
   </div>
 </div>
</div>




  )
}

export default PopularCourseCard
