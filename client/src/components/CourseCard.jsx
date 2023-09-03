// import React from "react";

// export default function CourseCard({ course_id,  }) {
//   return (
//     <div className="bg-slate-100 rounded-xl p-4 dark:bg-[#FFFFFF] border-2 max-w-10/12">
//       <img
//         className="w-16 h-16 rounded-full mx-auto"
//         // src={course.image}
//         alt={`images`}
//         width="64"
//         height="64"
//       />
//       <div className="">
//         <h4 className="font-bold text-xl text-center">
//           {/* {course.title} */}
//           </h4>
//         <p className="text-sm font-medium mx-4 text-center">
//           {/* {course.description} */}
//         </p>
//         <div className="flex justify-center my-2">
//           <a
//             href="  /coursedetails"
//             className="border border-[#9C4DF4] text-[#9C4DF4] hover:bg-[#9C4DF4] hover:text-white py-2 px-4 rounded-lg md:bg-white md:text-[#9C4DF4] md:hover:bg-[#9C4DF4] md:hover:text-white">
//             Class Details
//           </a>
//         </div>
//       </div>
//     </div>
//   );
// }
import React from "react";
import Image from "../assets/Logo.png";

function CourseCard({ courseName, teacherName, rating, hoursNeeded, price }) {
  return (
    <div className="relative bg-white rounded-lg p-2 w-64" style={{ boxShadow: '0 0 5px rgba(0, 0, 0, 0.3)' }}>
      <div className="absolute top-0 left-0 w-full h-4 bg-indigo-500 rounded-t-lg"></div>
      <div className="flex justify-center mb-4">
        <img src={Image} alt="Course" className="w-32 h-32 rounded-lg" />
      </div>
      <div className="grid md:grid-cols-2 gap-4">
        <div className="md:mb-0">
          <div className="mb-2">
            <span className="ml-2">{courseName}</span>
          </div>
          <div className="mb-2">
            <span className="ml-2">{teacherName}</span>
          </div>
          <div className="mb-2">
            <span className="ml-2">{rating}</span>
          </div>
        </div>
        <div>
          <div className="mb-2">
            <span className="ml-2">{hoursNeeded}</span>
          </div>
          <div className="mb-2">
            <span className="ml-2">{price}</span>
          </div>
        </div>
      </div>
      <div className="flex justify-center mt-4">
        <button className=" button-component-stroke bg-indigo-500 text-white py-2 px-4 rounded-lg">
          Add to Cart
        </button>
      </div>
    </div>
  );
    }
// export default ;
export default CourseCard;