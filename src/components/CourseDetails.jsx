import React from 'react';
import Pricecard from "../components/Pricecard";


function CourseDetails() {
  const courses = [
    { title: "Ha Geez", image: require("../assets/Cardphoto.png")  },
    { title: "Hu Cabe", image: require("../assets/Cardphoto2.png") },
    { title: "Hei Seles", image: require("../assets/Cardphoto3.png") },
    { title: "Ho Rabe", image: require("../assets/Cardphoto4.png") },
  ];
  return (
    <div className="mr-96 bg-[#f7f5fa] w-full">
      <div className="flex flex-col mr-96">
      <h3 className="font-extrabold text-4xl text-left text-[#0A033C] ml-10">Course Details</h3>
      <div className="flex-1 flex items-end justify-end mt-10 mr-5"><Pricecard/></div>
      <div className="mt-10 ml-10">
      <button className="bg-purple-500 text-white font-bold py-2 px-4 rounded-10 w-[400px] h-[60px] mr-0">
          Purchase Course
        </button>
        </div>
      <div className="flex flex-wrap items-left px-4 sm:px-8 md:px-10">
        <div className="text-xl">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis consectetur adipiscing elit.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis consectetur adipiscing elit.
          </p>
        </div>
      </div>
      <h3 className="font-extrabold text-4xl text-left text-[#0A033C] ml-10">Certification</h3>
      <div className="flex flex-wrap items-left px-4 sm:px-8 md:px-10">
        <div className="text-xl">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis consectetur adipiscing elit.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis consectetur adipiscing elit.
          </p>
        </div>
      </div>
      <h3 className="font-extrabold text-4xl text-left text-[#0A033C] ml-10">Who this course is for</h3>
      <div className="flex flex-wrap items-left px-4 sm:px-8 md:px-10">
        <div className="text-xl">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis consectetur adipiscing elit.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis consectetur adipiscing elit.
          </p>
        </div>
      </div>
      <h3 className="font-extrabold text-4xl text-left text-[#0A033C] ml-10">What you'll learn in this course:</h3>
      <ul className="list-none ml-10">
        <li className="text-2xl">
          <span className="text-orange-500 text-3xl mr-2">&#9679;</span>Lorem ipsum dolor sit amet, consectetur adipiscing elit
        </li>
        <li className="text-2xl">
          <span className="text-orange-500 text-3xl mr-2">&#9679;</span>Lorem ipsum dolor sit amet, consectetur adipiscing elit
        </li>
        <li className="text-2xl">
          <span className="text-orange-500 text-3xl mr-2">&#9679;</span>Lorem ipsum dolor sit amet, consectetur adipiscing elit
        </li>
        <li className="text-2xl">
          <span className="text-orange-500 text-3xl mr-2">&#9679;</span>Lorem ipsum dolor sit amet, consectetur adipiscing elit
        </li>
        <li className="text-2xl">
          <span className="text-orange-500 text-3xl mr-2">&#9679;</span>Lorem ipsum dolor sit amet, consectetur adipiscing elit
        </li>
        <li className="text-2xl">
          <span className="text-orange-500 text-3xl mr-2">&#9679;</span>Lorem ipsum dolor sit amet, consectetur adipiscing elit
        </li>
      </ul>
    </div>
    <h3 className="font-extrabold text-4xl text-left text-[#0A033C] ml-10">Similar Courses</h3>
    <div className="grid grid-cols-2 gap-4 mx-8 my-4">
  {courses.slice(0, 4).map((item) => (
    <div className="flex flex-col bg-white my-2">
      <a href="#" className="w-full border-2 border-b-4 border-gray-200 rounded-xl hover:bg-gray-50">
        <div className="grid grid-cols-6 p-5 gap-y-2">
          <div>
            <img src={item.image} className="max-w-20 max-h-20 rounded-lg" alt="Course" />
          </div>
          <div className="col-span-5 md:col-span-4 ml-4">
            <p className="text-gray-600 font-bold">
              {item.title}
            </p>
            {/* ... other course details */}
          </div>
          <div className="flex col-start-2 ml-4 md:col-start-auto md:ml-0 md:justify-end">
            <p className="rounded-lg text-red-500 font-bold bg-red-100 py-1 px-3 text-sm w-fit h-fit">
              $40.00
            </p>
          </div>
        </div>
      </a>
    </div>
  ))}
</div>

    
   </div>
  
    
    
    
  );
}

export default CourseDetails;
