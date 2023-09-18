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

import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import ResponseMessage from "./ResponseMessage";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

const TrendingCoursesCard = ({
  courseId,
  course_title,
  course_thumbnail,
  course_total_hour,
  course_instructure,
  course_level,
  course_rate,
  course_price,
}) => {
  // const images = require.context("../assets");
  // images(`${courseId}.jpg`)

  // const course_image = images(course_thumbnail);
  const numbers = [1, 2, 3, 4, 5];
  // const partialDesc = course_details ? course_details.slice(0, 80) : "";

  const [failure, setFailure] = useState(false);
  const [addSuccess, setAddSuccess] = useState(false);
  const [resMsg, setResMsg] = useState("");

  useEffect(() => {
    if (localStorage.getItem("user_id")) {
      axios
        .post("/cart/checkCourse", {
          course_id: courseId,
          user_id: localStorage.getItem("user_id"),
        })
        .then((res) => {
          if (res.data.message) {
            setAddSuccess(true);
            setFailure(false);
            setResMsg("Already in cart");
          }
        })
        .catch((error) => {
          console.log(error.response.data.message);
        });
    }
  }, [courseId]);

  const addToCart = () => {
    axios
      .post("/cart/addToCart", {
        course_id: courseId,
        user_id: localStorage.getItem("user_id"),
        book_id: null,
      })
      .then((res) => {
        setAddSuccess(true);
        setFailure(false);
        setResMsg(res.data.message);
      })
      .catch((error) => {
        setResMsg(error.response.data.message);
        setAddSuccess(true);
        setFailure(true);
      });
  };
  return (
    <div className="card bg-white border-l-8 border-l-dark-purple rounded-lg shadow-md my-2 p-2 w-96 h-80">
      <Link to={`/coursedetails/${courseId}`} className=" cursor-pointer">
        <div className="grid grid-cols-4 gap-4">
          <div className="col-span-1">
            <img className="w-32 h-12 " src={course_thumbnail} alt="books" />
          </div>
          <div className="col-span-3">
            <p class="text-gray-400"> {course_instructure}</p>

            <p class="text-gray-600 font-bold"> {course_title} </p>
          </div>
        </div>
        <div className="grid grid-cols-4 gap-4 mt-4">
          <div className="col-span-1">
            <p class="text-gray-400">{course_total_hour}e </p>
            <p class="text-gray-400">{course_rate} </p>
          </div>
          <div className="col-span-3">
            <p class="text-gray-400">{course_price} </p>
            <p class="text-gray-400">{course_level} </p>
          </div>
        </div>
      </Link>
      <div className="flex flex-row">
        {/* <div className="flex flex-col w-full justify-center items-center mt-1"> */}
           <div className="flex flex-col ">
          {addSuccess && <ResponseMessage failure={failure} message={resMsg} />}

          {(!addSuccess || failure) &&
            localStorage.getItem("username") &&
            localStorage.getItem("user_id") && (
              <button
                className="bg-dark-purple hover:bg-purple-500 text-white  font-bold py-3 px-3 my-10 rounded "
                // className="button-component-stroke  w-fit py-2 px-4 mb-7"
                onClick={addToCart}
              >
                <span className="add-to-cart-text p-3">Add to Cart</span>
                &nbsp;&nbsp; &nbsp;
                <span className="cart-icon fa-x p-3">
                  <FontAwesomeIcon icon={faShoppingCart} />
                </span>
              </button>
            )}
        </div>
      </div>
    </div>
  );
};

export default TrendingCoursesCard;
