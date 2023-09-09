import React, { useEffect, useState } from "react";
import Pricecard from "../components/Pricecard";
import BookImage from "../../src/assets/Image.png";
import PopularCourseCard from "./PopularCourseCard";
import { useNavigate, useParams } from "react-router-dom";
import DetailsHeroImage from "../assets/ourgoal-image.png";

import axios from "axios";

function CourseDetails() {
  // const courses = [
  //   { title: "Ha Geez", image: require("../assets/Cardphoto.png") },
  //   { title: "Hu Cabe", image: require("../assets/Cardphoto2.png") },
  //   { title: "Hei Seles", image: require("../assets/Cardphoto3.png") },
  //   { title: "Ho Rabe", image: require("../assets/Cardphoto4.png") },
  // ];
  const navigate = useNavigate();
  const [courseData, setCourseData] = useState({});
  const { id } = useParams();

  useEffect(() => {
    if (id === null) {
      navigate("/");
    } else {
      axios
        .get("/courses/getSingleCourse", { params: { courseID: id } })
        .then((res) => {
          setCourseData({ ...res.data[0] });
        })
        .catch((error) => {
          console.log(error.response.data.message);
          // navigate("/");
        });
    }
  }, [navigate, id]);
  return (
    <div className="w-full">
      <div className="mx-8 bg-white rounded-3xl px-8 py-2 my-8 ">
        <div className="">
          <button
            className="text-gray-400"
            onClick={() => {
              navigate("  /");
            }}>
            Home
          </button>
          <span className="text-gray-400"> | </span>
          <button
            className="text-fuchsia-700"
            onClick={() => {
              navigate("  /courses");
            }}>
            Courses
          </button>
          <span className="text-gray-400"> | </span>
          <button
            className="text-fuchsia-700"
            onClick={() => {
              navigate("  /coursedetails");
            }}>
            Course Details
          </button>
        </div>
        <div className="flex items-center justify-around py-4 flex-wrap-reverse lg:flex-nowrap">
          <>
            <span className="flex gap-4">
              <h2 className="text-2xl md:text-4xl font-bold text-center my-2">
                <span className="text-[#9C4DF4]">
                  {courseData.course_title}
                </span>
              </h2>
            </span>
          </>
          <img src={DetailsHeroImage} alt="" className="w-96 rounded-2xl" />
        </div>
      </div>
      <div className="w-full flex justify-between gap-8 flex-wrap lg:flex-nowrap my-16">
        <div className="pl-8 w-8/12">
          <h3 className="font-extrabold text-3xl text-[#0A033C] mb-4">
            Overview
          </h3>
          <p className="whitespace-normal md:whitespace-pre-line mb-4 max-w-full">
            {courseData.course_details}
          </p>

          <h3 className="font-extrabold text-3xl text-left text-[#0A033C] mb-4">
            Certification
          </h3>

          {/* <p className="whitespace-normal md:whitespace-pre-line mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
            ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas
            accumsan lacus vel facilisis consectetur adipiscing elit. Lorem
            ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Quis ipsum
            suspendisse ultrices gravida. Risus commodo viverra maecenas
            accumsan lacus vel facilisis consectetur adipiscing elit.
          </p>

          <h3 className="font-extrabold text-3xl text-left text-[#0A033C] mb-4">
            Who this course is for
          </h3>

          <p className="whitespace-normal md:whitespace-pre-line mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
            ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas
            accumsan lacus vel facilisis consectetur adipiscing elit. Lorem
            ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Quis ipsum
            suspendisse ultrices gravida. Risus commodo viverra maecenas
            accumsan lacus vel facilisis consectetur adipiscing elit.
          </p>
          <h3 className="font-extrabold text-3xl text-left text-[#0A033C] mb-4">
            What you'll learn in this course:
          </h3>
          <ul className="list-none text-2x">
            <li>
              <span className="text-orange-500 text-3xl mr-2">&#9679;</span>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit
            </li>
            <li>
              <span className="text-orange-500 text-3xl mr-2">&#9679;</span>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit
            </li>
            <li>
              <span className="text-orange-500 text-3xl mr-2">&#9679;</span>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit
            </li>
            <li>
              <span className="text-orange-500 text-3xl mr-2">&#9679;</span>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit
            </li>
            <li>
              <span className="text-orange-500 text-3xl mr-2">&#9679;</span>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit
            </li>
            <li>
              <span className="text-orange-500 text-3xl mr-2">&#9679;</span>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit
            </li>
          </ul> */}
        </div>
        <div className="mx-4 w-4/12">
          <Pricecard
            course_price="$49.00"
            course_instructure="WadeWarren"
            course_rate="4.7"
            course_total_hour="10 Days"
            course_sections="30"
            course_quizzes="5"
            course_answer="yes"
            course_languges="English"
            course_access="Lifetime"
          />
        </div>
      </div>

      <h3 className="font-extrabold text-3xl t text-[#0A033C] ml-8 p-9">
        Similar Courses
      </h3>

      <div className="flex flex-col mx-10">
        <div className="flex flex-wrap overflow-x-auto overflow-y-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
            <div className="p-4">
              <PopularCourseCard
                course_title="interaction"
                course_details="lorem Ipsum is simply dummy text of the printing and typesetting industry."
                course_thumbnail={BookImage}
                course_total_hour="3Hours"
                course_instructure="Wadew Warrren"
                course_level="level"
                course_rate="4.7"
                course_price="price"
              />
            </div>
            <div className="p-4">
              <PopularCourseCard
                course_title="interaction"
                course_details="lorem Ipsum is simply dummy text of the printing and typesetting industry."
                course_thumbnail={BookImage}
                course_total_hour="3Hours"
                course_instructure="Wadew Warrren"
                course_level="level"
                course_rate="4.7"
                course_price="price"
              />
            </div>
            <div className="p-4">
              <PopularCourseCard
                course_title="interaction"
                course_details="lorem Ipsum is simply dummy text of the printing and typesetting industry."
                course_thumbnail={BookImage}
                course_total_hour="3Hours"
                course_instructure="Wadew Warrren"
                course_level="level"
                course_rate="4.7"
                course_price="price"
              />
            </div>
          </div>
        </div>
        {/* <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3">
  <div className="p-4">
    <PopularCourseCard
      course_title="interaction"
      course_details="lorem Ipsum is simply dummy text of the printing and typesetting industry."
      course_thumbnail={BookImage}
      course_total_hour="3Hours"
      course_instructure="Wadew Warrren"
      course_level="level"
      course_rate="4.7"
      course_price="price"
    />
  </div>
  <div className="p-4">
    <PopularCourseCard
      course_title="interaction"
      course_details="lorem Ipsum is simply dummy text of the printing and typesetting industry."
      course_thumbnail={BookImage}
      course_total_hour="3Hours"
      course_instructure="Wadew Warrren"
      course_level="level"
      course_rate="4.7"
      course_price="price"
    />
  </div>
  <div className="p-4">
    <PopularCourseCard
      course_title="interaction"
      course_details="lorem Ipsum is simply dummy text of the printing and typesetting industry."
      course_thumbnail={BookImage}
      course_total_hour="3Hours"
      course_instructure="Wadew Warrren"
      course_level="level"
      course_rate="4.7"
      course_price="price"
    />
  </div>
</div> */}
      </div>

      {/* <di className="grid md:grid-cols-2 gap-4 mx-8 my-4 sm:grid-cols-1">
        {courses.slice(0, 4).map((item,index) => (
          <div key={index} className="bg-white my-2 rounded-xl shadow-md">
            <a
              href="/"
              className="border-2  border-gray-200 rounded-xl hover:bg-gray-50 block"
            >
              <div className="grid grid-cols-6 p-2 gap-y-2">
                <div className="col-span-1">
                  <img
                    src={item.image}
                    className="max-w-20 max-h-20 rounded-lg"
                    alt="Course"
                  />
                </div>
                <div className="col-span-5 md:col-span-4 ml-4">
                  <p className="text-gray-600 font-bold">{item.title}</p> */}
      {/* ... other course details */}
      {/* </div> */}
      {/* <div className="col-start-2 ml-4 md:col-start-auto md:ml-0 md:justify-end">
                  <p className="rounded-lg text-red-500 font-bold bg-red-100 py-1 px-3 text-sm">
                    $40.00
                  </p>
                </div>
              </div>
            </a>
          </div>
        ))}
      </di> */}
    </div>
  );
}

export default CourseDetails;
