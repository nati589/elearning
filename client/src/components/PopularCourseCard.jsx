
import React from 'react'
import dollar from "../assets/icons/dollar.svg";
import person from "../assets/icons/person.svg"
import timer from "../assets/icons/timer.svg"
import fullstar from "../assets/icons/full_star.svg";
import stickynote from "../assets/icons/stickynote.svg";



const PopularCourseCard = ({ course_title, course_details, course_thumbnail, course_total_hour, course_instructure, course_level, course_rate, course_price }) => {

  return (


    <div class="card bg-white border-l-8 border-l-dark-purple rounded-lg shadow-md my-4 p-6 w-80 h-88">
      <h1 class="text-xl mb-4 font-bold">{course_title}</h1>
      <div class="grid grid-cols-4 gap-4">
        <div class="col-span-1"><img class="w-32 h-16 " src={course_thumbnail} alt="books" /></div><div class="col-span-3"><p class="text-sm">{course_details}</p></div></div>

      <div class="flex flex-row m-2">
        <div class="flex-grow">
          <div class="grid grid-rows-3 ">
            <div class='flex flex-row'>
              <img class="w-4 h-4" src={timer} alt="" />
              <p class="ml-2 text-sm">{course_total_hour}</p>

            </div>
            <div class='flex flex-row'>
              <img class="w-4 h-4" src={person} alt="" />
              <p class="ml-2 text-sm">{course_instructure}</p>
            </div>
            <div class='flex flex-row'>
              <img class="w-4 h-4" src={stickynote} alt="" />
              <p class="ml-2 text-sm">{course_level}</p>
            </div>


          </div>
        </div>
        <div class="flex-grow">
          <div class="grid grid-rows-3 ">
            <div class='flex flex-row'>
              <p class="ml-2 text-sm">{course_rate}</p>
              <img class="w-4 h-4 ml-0.5" src={fullstar} alt="" />
              <img class="w-4 h-4  ml-0.5" src={fullstar} alt="" />
              <img class="w-4 h-4  ml-0.5" src={fullstar} alt="" />
              <img class="w-4 h-4  ml-0.5" src={fullstar} alt="" />
              <img class="w-4 h-4  ml-0.5" src={fullstar} alt="" />
              

            </div>
            <div class='flex flex-row'>
              <img class="w-4 h-4" src={dollar} alt="" />
              <p class="ml-2 text-sm">{course_price}</p>
            </div>
            <div class='flex flex-row'>
            <button class="button-component-stroke h-6 "> Add to cart</button>

             
            </div>


          </div>
        </div>
       
      </div>
    </div>

 ); 
}

export default PopularCourseCard

{/* <div class="card bg-white border-l-8 border-l-dark-purple rounded-lg shadow-md my-4 p-6">
<h1 class="text-4xl mb-4 font-bold">{course_title}</h1>
 <div  class="grid grid-cols-4 gap-4"> 
     <div class="col-span-1"><img class="w-60 h-13 " src={course_thumbnail} alt="books" /></div><div class="col-span-3"><p class="text-lg">{course_details}</p></div></div>
   
    <div class="flex flex-row m-10">
   <div class="flex-grow">
   <div class="grid grid-rows-3 ">
   <div class='flex flex-row'>
   <img  class="w-6 h-6"src={timer} alt="" />
   <p  class="ml-2">{course_total_hour}</p>
  
   </div>
   <div class='flex flex-row'>
   <img  class="w-6 h-6"src={person} alt="" />
   <p  class="ml-2">{course_instructure}</p>
   </div>
   <div class='flex flex-row'>
   <img  class="w-6 h-6"src={stickynote} alt="" />
   <p class="ml-2">{course_level}</p>
   </div>
 
 
 </div>
   </div>
   <div class="flex-grow">
   <div class="grid grid-rows-3 ">
   <div class='flex flex-row'>
   <p  class="ml-2">{course_rate}</p>
   <img  class="w-4 h-4" src={fullstar} alt="" />
   <img  class="w-4 h-4" src={fullstar} alt="" />
   <img  class="w-4 h-4" src={fullstar} alt="" />
   <img  class="w-4 h-4" src={fullstar} alt="" />
   <img  class="w-4 h-4" src={fullstar} alt="" />


   </div>
   <div class='flex flex-row'>
   <img  class="w-6 h-6"src={dollar} alt="" />
   <p  class="ml-2">{course_price}</p>
   </div>
 <div class='flex flex-row-m'>
 <button class="button-component-stroke"> Add to cart</button>
   </div>
 
 
 </div>
   </div>
 </div>
</div> */}




