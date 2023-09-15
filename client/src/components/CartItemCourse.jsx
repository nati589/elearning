import axios from "axios";
import { useEffect, useState } from "react";
import { TiDeleteOutline } from "react-icons/ti";
function CartItemCourse({ cart_id, course_id, removeItem, addPrice }) {
  const [data, setData] = useState({});

  useEffect(() => {
    axios
      .get("/courses/getSingleCourse", { params: { courseID: course_id } })
      .then((response) => {
        setData(response.data[0]);
        addPrice(response.data[0].course_price);
      })
      .catch((error) => {
        console.log(error.response.data.message);
      });
  }, [course_id]);

  return (
    <div className=" relative shadow flex flex-row items-center max-w-max sm:gap-1 lg:gap-6 px-1 md:gap-4 sm:px-2 md:px-4 md:mx-5 md:my-3 rounded">
      <button
        onClick={() => removeItem(cart_id)}
        className=" absolute top-2 right-2 text-2xl md:hidden text-medium-purple">
        <TiDeleteOutline />
      </button>
      <div className=" bg-blue-400  rounded">
        <img
          src="https://images.unsplash.com/photo-1587691592099-24045742c181?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2073&q=80"
          alt="aa"
          className="object-cover  h-[100px] min-w-[100px] md:w-[100px] rounded"
        />
      </div>
      <div className="   sm:min-w-[90px] md:max-w-lg px-2 sm:px-0 py-2">
        <div className="mb-2">
          <h1 className="text-sm md:text-lg">{data.course_title}</h1>
          <p className="text-[11px] md:text-xs">{data.course_details}</p>{" "}
        </div>
        <div className="flex flex-row mb-1.5 gap-1">
          <span className="text-[11px] md:text-xs">{data.course_rating}</span>
          {/* <span className="text-[11px]">XXXXXX</span> */}
        </div>
        <div className=" text-[11px] md:text-xs flex flex-row gap-5 items-center">
          <span>{data.course_total_hour} total hours</span>
          <span>Instructor {data.course_instructor} </span>
          <span>{data.course_level}</span>
        </div>
      </div>
      <div>
        <span className="text-medium-purple text-lg">${data.course_price}</span>
      </div>
      <button
        onClick={() => removeItem(cart_id)}
        className="bg-medium-purple px-4 hidden md:inline-block py-2 rounded-3xl sm:mx-2  md:mx-10 text-white ">
        remove
      </button>
    </div>
  );
}

export default CartItemCourse;
