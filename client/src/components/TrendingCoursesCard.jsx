// import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import axios from "axios";
// import ResponseMessage from "./ResponseMessage";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

// const TrendingCoursesCard = ({
//   courseId,
//   course_title,
//   course_thumbnail,
//   course_total_hour,
//   course_instructure,
//   course_level,
//   course_rate,
//   course_price,
// }) => {
//   // const images = require.context("../assets");
//   // images(`${courseId}.jpg`)

//   // const course_image = images(course_thumbnail);
//   const numbers = [1, 2, 3, 4, 5];
//   // const partialDesc = course_details ? course_details.slice(0, 80) : "";

//   const [failure, setFailure] = useState(false);
//   const [addSuccess, setAddSuccess] = useState(false);
//   const [resMsg, setResMsg] = useState("");

//   useEffect(() => {
//     if (localStorage.getItem("user_id")) {
//       axios
//         .post("/cart/checkCourse", {
//           course_id: courseId,
//           user_id: localStorage.getItem("user_id"),
//         })
//         .then((res) => {
//           if (res.data.message) {
//             setAddSuccess(true);
//             setFailure(false);
//             setResMsg("Already in cart");
//           }
//         })
//         .catch((error) => {
//           console.log(error.response.data.message);
//         });
//     }
//   }, [courseId]);

//   const addToCart = () => {
//     axios
//       .post("/cart/addToCart", {
//         course_id: courseId,
//         user_id: localStorage.getItem("user_id"),
//         book_id: null,
//       })
//       .then((res) => {
//         setAddSuccess(true);
//         setFailure(false);
//         setResMsg(res.data.message);
//       })
//       .catch((error) => {
//         setResMsg(error.response.data.message);
//         setAddSuccess(true);
//         setFailure(true);
//       });
//   };
//   return (
//     <div>
//       <div class=" flex flex-col gap-4 items-center justify-center bg-white">
//         <a
//           href={`/coursedetails/${courseId}`}
//           class="w-[30rem] border-2 border-b-4 border-gray-200 rounded-xl hover:bg-gray-50"
//         >

//           <div class="grid grid-cols-6 p-5 gap-y-2">
//             <div>
//               <img
//                 src={course_thumbnail}
//                 class="max-w-16 max-h-16 rounded-full"
//               />
//             </div>

//             <div class="col-span-5 md:col-span-4 ml-4">
//               <p class="text-dark-purple font-bold text-xs">
//                 {" "}
//                 {course_instructure}{" "}
//               </p>

//               <p class="text-gray-600 font-bold"> {course_title} </p>

//               <p class="text-gray-400">{course_total_hour} </p>

//               <p class="text-gray-400">{course_rate} </p>
//               <p class="text-gray-400">{course_price} </p>
//               <p class="text-gray-400">{course_level} </p>
//             </div>

//             <div class="flex col-start-2 ml-4 md:col-start-auto md:ml-0 md:justify-end">
//               <button class="rounded-lg text-dark-purple font-bold bg-light-purple  py-1 px-3 text-sm w-fit h-fit">
//                 {" "}
//                 Add to cart{" "}
//               </button>
//             </div>
//           </div>
//         </a>

//       </div>
//     </div>
//   );
// };

// export default  TrendingCoursesCard;

// import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import axios from "axios";
// import ResponseMessage from "./ResponseMessage";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

// const TrendingCoursesCard = ({
//   courseId,
//   course_title,
//   course_thumbnail,
//   course_total_hour,
//   course_instructure,
//   course_level,
//   course_rate,
//   course_price,
// }) => {
//   // const images = require.context("../assets");
//   // images(`${courseId}.jpg`)

//   // const course_image = images(course_thumbnail);
//   const numbers = [1, 2, 3, 4, 5];
//   // const partialDesc = course_details ? course_details.slice(0, 80) : "";

//   const [failure, setFailure] = useState(false);
//   const [addSuccess, setAddSuccess] = useState(false);
//   const [resMsg, setResMsg] = useState("");

//   useEffect(() => {
//     if (localStorage.getItem("user_id")) {
//       axios
//         .post("/cart/checkCourse", {
//           course_id: courseId,
//           user_id: localStorage.getItem("user_id"),
//         })
//         .then((res) => {
//           if (res.data.message) {
//             setAddSuccess(true);
//             setFailure(false);
//             setResMsg("Already in cart");
//           }
//         })
//         .catch((error) => {
//           console.log(error.response.data.message);
//         });
//     }
//   }, [courseId]);

//   const addToCart = () => {
//     axios
//       .post("/cart/addToCart", {
//         course_id: courseId,
//         user_id: localStorage.getItem("user_id"),
//         book_id: null,
//       })
//       .then((res) => {
//         setAddSuccess(true);
//         setFailure(false);
//         setResMsg(res.data.message);
//       })
//       .catch((error) => {
//         setResMsg(error.response.data.message);
//         setAddSuccess(true);
//         setFailure(true);
//       });
//   };
//   return (
//     <div className="card bg-white border-l-8 border-l-dark-purple rounded-lg shadow-md my-2 p-2 w-96 h-80">
//       <Link to={`/coursedetails/${courseId}`} className=" cursor-pointer">
//         <div className="grid grid-cols-4 gap-4">
//           <div className="col-span-1">
//             <img className="w-32 h-12 " src={course_thumbnail} alt="books" />
//           </div>
//           <div className="col-span-3">
//             <p class="text-gray-400"> {course_instructure}</p>

//             <p class="text-gray-600 font-bold"> {course_title} </p>
//           </div>
//         </div>
//         <div className="grid grid-cols-4 gap-4 mt-4">
//           <div className="col-span-1">
//             <p class="text-gray-400">{course_total_hour}e </p>
//             <p class="text-gray-400">{course_rate} </p>
//           </div>
//           <div className="col-span-3">
//             <p class="text-gray-400">{course_price} </p>
//             <p class="text-gray-400">{course_level} </p>
//           </div>
//         </div>
//       </Link>
//       <div className="flex flex-row">
//         {/* <div className="flex flex-col w-full justify-center items-center mt-1"> */}
//            <div className="flex flex-col ">
//           {addSuccess && <ResponseMessage failure={failure} message={resMsg} />}

//           {(!addSuccess || failure) &&
//             localStorage.getItem("username") &&
//             localStorage.getItem("user_id") && (
//               <button
//                 className="bg-dark-purple hover:bg-purple-500 text-white  font-bold py-3 px-3 my-10 rounded "
//                 // className="button-component-stroke  w-fit py-2 px-4 mb-7"
//                 onClick={addToCart}
//               >
//                 <span className="add-to-cart-text p-3">Add to Cart</span>
//                 &nbsp;&nbsp; &nbsp;
//                 <span className="cart-icon fa-x p-3">
//                   <FontAwesomeIcon icon={faShoppingCart} />
//                 </span>
//               </button>
//             )}
// =======
import React from "react";
import TrendingCourseImg from "../assets/TrendingCourseImg.png";

const TrendingCoursesCard = ({ book_title, book_details, book_thumbnail }) => {
  return (
    <div>
      <div class="flex bg-white border-medium-purple shadow-lg rounded-lg mx-4 md:mx-auto my-2 max-w-md md:max-w-2xl ">
        <div class="flex items-start px-4 py-6">
          <img
            class="w-12 h-12 rounded-full object-cover mr-4 shadow"
            src={TrendingCourseImg}
            alt="avatar"
          />
          <div class="">
            <div class="flex items-center justify-between">
              <h2 class="text-lg font-semibold text-gray-900 -mt-1">
                Brad Adams{" "}
              </h2>
              <small class="text-sm text-gray-700">22h ago</small>
            </div>
            <p class="text-gray-700">Joined 12 SEP 2012. </p>
            <p class="mt-3 text-gray-700 text-sm">
              Lorem ipsum, dolor sit amet conse. Saepe optio minus rem dolor sit
              amet!
            </p>
            <div class="mt-4 flex items-center">
              <div class="flex mr-2 text-gray-700 text-sm mr-3">
                <svg
                  fill="none"
                  viewBox="0 0 24 24"
                  class="w-4 h-4 mr-1"
                  stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  />
                </svg>
                <span>12</span>
              </div>
              <div class="flex mr-2 text-gray-700 text-sm mr-8">
                <svg
                  fill="none"
                  viewBox="0 0 24 24"
                  class="w-4 h-4 mr-1"
                  stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"
                  />
                </svg>
                <span>8</span>
              </div>
              <div class="flex mr-2 text-gray-700 text-sm mr-4">
                <svg
                  fill="none"
                  viewBox="0 0 24 24"
                  class="w-4 h-4 mr-1"
                  stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"
                  />
                </svg>
                <span>share</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrendingCoursesCard;
