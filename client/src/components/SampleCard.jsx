import React from "react";
import BookImg  from "../../src/assets/BookImg.png";

const SampleCard = ({ course_title, course_details, course_thumbnail }) => {
  return (
    <div>
      {/* <!-- component --> */}
      <div class=" flex flex-col gap-4 items-center justify-center ">
        {/* <!-- Card 1 --> */}
        <a
          href="/"
          class="w-full border-2 border-b-4 bg-white border-medium-purple mt-3 rounded-xl hover:bg-gray-50">
          <div class="grid grid-cols-6 p-5 gap-y-2">
            {/* <!-- Profile Picture --> */}
            <div>
              <img
                src={BookImg}
                alt="new pic"
                class="max-w-16 max-h-16 rounded-full"
              />
            </div>

            {/* <!-- Description --> */}
            <div class="col-span-5 md:col-span-4 ml-4">
              <p class="text-dark-purple font-bold text-sm "> Title </p>

              <p class="text-gray-600 font-bold text-xs">Instructor</p>
              <div className="grid grid-cols-2">
                <div className="grid grid-cols-1">
                  <p class="text-gray-400"> Time </p>

                  <p class="text-gray-400">rating </p>
                </div>
                <div className="grid grid-cols-1">
                  <p class="text-gray-400">price </p>
                  <p class="text-gray-400">rating </p>
                </div>
              </div>
            </div>
          </div>
          <div class="flex col-start-2 ml-4 md:col-start-auto md:ml-0 md:justify-center mb-2">
            <p class="rounded-lg text-dark-purple font-bold bg-light-purple  py-1 px-3 text-sm w-fit h-fit">
              Add to Cart
            </p>
          </div>
        </a>
      </div>
    </div>
  );
};

export default SampleCard;

{
  /* <div className="card bg-white border-l-8 rounded-lg shadow-md my-4 p-6">
<h1 className="text-4xl mb-4 font-bold">{course_title}</h1>
 <div  className="grid grid-cols-4 gap-4"> 
     <div className="col-span-1"><img className="w-60 h-13 " src={course_thumbnail} alt="books" /></div><div className="col-span-3"><p className="text-lg">{course_details}</p></div></div>
   
   
</div> */
}
