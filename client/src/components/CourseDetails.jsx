import Pricecard from "../components/Pricecard";
import selam from "../../src/assets/Image.png";
import PopularCourseCard from "./PopularCourseCard";
import { useEffect, useState } from "react";
import { warning } from "framer-motion";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function CourseDetails() {
  // const courses = [
  //   { title: "Ha Geez", image: require("../assets/Cardphoto.png") },
  //   { title: "Hu Cabe", image: require("../assets/Cardphoto2.png") },
  //   { title: "Hei Seles", image: require("../assets/Cardphoto3.png") },
  //   { title: "Ho Rabe", image: require("../assets/Cardphoto4.png") },
  // ];
  const navigate = useNavigate();
  const [courseData, setCourseData] = useState({});
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const courseID = urlParams.get("id");
    if (courseID === null) {
      navigate("/");
    } else {
      axios
        .get("/courses/getSingleCourse", { courseID: courseID })
        .then((res) => {
          setCourseData(res.data[0]);
          console.log(res, "fetched course data");
        })
        .catch((error) => {
          console.log(error.response.data.message);
          navigate("/");
        });
    }
  }, [navigate]);
  return (
    <div className="">
      <div className="flex justify-between gap-8 mx-8 flex-wrap lg:flex-nowrap my-16">
        <div className="mx-8">
          <h3 className="font-extrabold text-4xl text-[#0A033C] mb-4">
            Course Details
          </h3>
          <p className="whitespace-normal md:whitespace-pre-line mb-4 max-w-full">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
            ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas
            accumsan lacus vel facilisis consectetur adipiscing elit. Lorem
            ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Quis ipsum
            suspendisse ultrices gravida. Risus commodo viverra maecenas
            accumsan lacus vel facilisis consectetur adipiscing elit.
          </p>

          <h3 className="font-extrabold text-4xl text-left text-[#0A033C] mb-4">
            Certification
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

          <h3 className="font-extrabold text-4xl text-left text-[#0A033C] mb-4">
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
          <h3 className="font-extrabold text-4xl text-left text-[#0A033C] mb-4">
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
          </ul>
        </div>
        <div className=" w-full">
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

      <h3 className="font-extrabold text-4xl t text-[#0A033C] ml-8 p-9">
        Similar Courses
      </h3>
      <div className="flex flex-col mx-10">
        <div className="grid grid-cols-3 gap-4">
          <div className=" p-4">
            {" "}
            <PopularCourseCard
              course_title="interaction"
              course_details="lorem Ipsum is simply dummy text of the printing and typesetting industry. "
              course_thumbnail={selam}
              course_total_hour="3Hours"
              course_instructure="selam"
              course_level="level"
              course_rate="4.7"
              course_price="price"
            />
          </div>
          <div className=" p-4">
            <PopularCourseCard
              course_title="interaction"
              course_details="lorem Ipsum is simply dummy text of the printing and typesetting industry. "
              course_thumbnail={selam}
              course_total_hour="3Hours"
              course_instructure="selam"
              course_level="level"
              course_rate="4.7"
              course_price="price"
            />
          </div>
          <div className=" p-4">
            <PopularCourseCard
              course_title="interaction"
              course_details="lorem Ipsum is simply dummy text of the printing and typesetting industry. "
              course_thumbnail={selam}
              course_total_hour="3Hours"
              course_instructure="selam"
              course_level="level"
              course_rate="4.7"
              course_price="price"
            />
          </div>
        </div>
        <div className="grid grid-cols-3 gap-4">
          <div className=" p-4 ">
            <PopularCourseCard
              course_title="interaction"
              course_details="lorem Ipsum is simply dummy text of the printing and typesetting industry. "
              course_thumbnail={selam}
              course_total_hour="3Hours"
              course_instructure="selam"
              course_level="level"
              course_rate="4.7"
              course_price="price"
            />
          </div>
          <div className=" p-4 ">
            <PopularCourseCard
              course_title="interaction"
              course_details="lorem Ipsum is simply dummy text of the printing and typesetting industry. "
              course_thumbnail={selam}
              course_total_hour="3Hours"
              course_instructure="selam"
              course_level="level"
              course_rate="4.7"
              course_price="price"
            />
          </div>
          <div className="  p-4">
            <PopularCourseCard
              course_title="interaction"
              course_details="lorem Ipsum is simply dummy text of the printing and typesetting industry. "
              course_thumbnail={selam}
              course_total_hour="3Hours"
              course_instructure="selam"
              course_level="level"
              course_rate="4.7"
              course_price="price"
            />
          </div>
        </div>
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
