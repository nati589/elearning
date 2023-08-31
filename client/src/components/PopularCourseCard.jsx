import React from 'react'
import dollar from"../assets/icons/dollar.svg";
import person from"../assets/icons/person.svg"
import timer from"../assets/icons/timer.svg"
import fullstar from"../assets/icons/full_star.svg";
import stickynote from"../assets/icons/stickynote.svg";



const PopularCourseCard = ({course_title,course_details,course_thumbnail,course_total_hour,course_instructure,course_level,course_rate,course_price}) => {
  return (
    <div class="card w-300 border border-gray-300 p-20 m-10 bg-white 70">
    <h1 class="text-4xl mb-4 font-bold">{course_title}</h1>
 <div  class="grid grid-cols-4 gap-4"> 
    <div class="col-span-1"><img  class="1/5" src={course_thumbnail} alt="books" /></div><div class="col-span-3"><p class="text-lg">{course_details}</p></div></div>
   
    <div class="flex flex-row m-10">
  <div class="flex-grow">
  <div class="grid grid-rows-3 ">
  <div class='flex flex-row'>
  <img  class="w-7"src={timer} alt="" />
  <p  class="ml-4">{course_total_hour}</p>
  
  </div>
  <div class='flex flex-row'>
  <img  class="w-7"src={person} alt="" />
  <p  class="ml-4">{course_instructure}</p>
  </div>
  <div class='flex flex-row'>
  <img  class="w-7"src={stickynote} alt="" />
  <p  class="ml-4">{course_level}</p>
  </div>
 
 
</div>
  </div>
  <div class="flex-grow">
  <div class="grid grid-rows-3 ">
  <div class='flex flex-row'>
  <p  class="ml-4">{course_rate}</p>
  <img  class="w-5"src={fullstar} alt="" />
  <img  class="w-5"src={fullstar} alt="" />
  <img  class="w-5"src={fullstar} alt="" />
  <img  class="w-5"src={fullstar} alt="" />
  <img  class="w-5"src={fullstar} alt="" />


  </div>
  <div class='flex flex-row'>
  <img  class="w-7"src={dollar} alt="" />
  <p  class="ml-4">{course_price}</p>
  </div>
<div class='flex flex-row'>
<button class="button-component-stroke"> Add to cart</button>
  {/* <button class="bg-white-600 hover:bg-blue-800 text-blue font-bold py-2 px-4 rounded border border-purple-500"> Add to cart</button> */}
  </div>
 
 
</div>
  </div>
</div>

    </div>
  
  )
}

export default PopularCourseCard
