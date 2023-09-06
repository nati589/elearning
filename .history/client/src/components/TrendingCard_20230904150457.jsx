import React from 'react'

const TrendingCard = ({course_title,course_details,course_thumbnail}) => {
  return (<div class="card bg-white  rounded-lg shadow-md my-4 p-6 h-88 w-80">
  <h1 class="text-4xl mb-4 font-bold">{course_title}</h1>
   <div  class="grid grid-cols-4 gap-4"> 
       <div class="col-span-1"><img class="w-32 h-12 " src={course_thumbnail} alt="books" /></div><div class="col-span-3"><p class="text-sm">{course_details}</p></div></div>
     
     
  </div>
    )
  }
  
  export default TrendingCard
    
{/* <div class="card bg-white border-l-8 rounded-lg shadow-md my-4 p-6">
<h1 class="text-4xl mb-4 font-bold">{course_title}</h1>
 <div  class="grid grid-cols-4 gap-4"> 
     <div class="col-span-1"><img class="w-60 h-13 " src={course_thumbnail} alt="books" /></div><div class="col-span-3"><p class="text-lg">{course_details}</p></div></div>
   
   
</div> */}

