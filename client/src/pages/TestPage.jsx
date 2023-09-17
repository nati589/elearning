// import React from "react";
// import PopularCourseCard from "../components/PopularCourseCard";
// import BookImage  from "../../src/assets/Image.png";
// import TrendingCoursesCard from "../components/TrendingCoursesCard";

// function TestPage() {
//   return (
//     <div className="flex flex-col flex-nowrap w-full h-fit px-2 py-2 bg-slate-200">
//       <h1 className=" font-bold tracking-tight text-[#0A033C] sm:text-6xl lg:text-start sm:text-center">
//         Welcome to test page
//       </h1>

//       {/* <CourseCard course_id="1" /> */}
//       <PopularCourseCard
//         course_title="interaction"
//         course_details="lorem Ipsum is simply dummy text of the printing and typesetting industry. "
//         course_thumbnail={BookImage}
//         course_total_hour="3Hours"
//         course_instructure="Wadew Warren"
//         course_level="level"
//         course_rate="4.7"
//         course_price="price"
//       />
//       {/* <PopularCourseCard course_title='interaction' course_details='orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s when an unknown printer took a galley of type and scrambled it to make a type specimen book'
//       course_thumbnail={BookImage }  course_total_hour='3Hours'   course_instructure='Wadew Warren' course_level='level'  course_rate='4.7'  course_price='price'/>
//       <PopularCourseCard course_title='interaction' course_details='orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s when an unknown printer took a galley of type and scrambled it to make a type specimen book'
//       course_thumbnail={BookImage }  course_total_hour='3Hours'   course_instructure='Wadew Warren' course_level='level'  course_rate='4.7'  course_price='price'/>
//       <PopularCourseCard course_title='interaction' course_details='orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s when an unknown printer took a galley of type and scrambled it to make a type specimen book'
//       course_thumbnail={BookImage }  course_total_hour='3Hours'   course_instructure='Wadew Warren' course_level='level'  course_rate='4.7'  course_price='price'/>
//       <PopularCourseCard course_title='interaction' course_details='orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s when an unknown printer took a galley of type and scrambled it to make a type specimen book'
//       course_thumbnail={BookImage }  course_total_hour='3Hours'   course_instructure='Wadew Warren' course_level='level'  course_rate='4.7'  course_price='price'/> */}
// <TrendingCoursesCard course_title='interaction' course_details='lorem Ipsum is simply dummy text of the printing and typesetting industry.
// '
//       course_thumbnail={BookImage}/>

//       {/* <Selam1  course_title='interaction' course_details='lorem Ipsum is simply dummy text of the printing and typesetting industry.lorem Ipsum is simply dummy text of the printing and typesetting industry.lorem Ipsum is simply dummy text of the printing and typesetting industry.lorem Ipsum is simply dummy text of the printing and typesetting industry.lorem Ipsum is simply dummy text of the printing and typesetting industry.lorem Ipsum is simply dummy text of the printing and typesetting industry.lorem Ipsum is simply dummy text of the printing and typesetting industry.lorem Ipsum is simply dummy text of the printing and typesetting industry.lorem Ipsum is simply dummy text of the printing and typesetting industry.lorem Ipsum is simply dummy text of the printing and typesetting industry. '
// course_thumbnail={selam}  course_total_hour='3Hours'   course_instructure='selam' course_level='level'  course_rate='4.7'  course_price='price'
// /> */}
//     </div>
//   );
// }

// export default TestPage;

// // import React from "react";
// // import ProgressCard from "../components/ProgressCard";
// // function ProgressPage() {
// // const assignArray=[5, 4, 10, 8]
// // const quizArray=[5, 4, 10, 8]

// // return (
// //   <ProgressCard assignment={assignArray} quiz={quizArray} mid='20' final='45' totalCourseContents='30'/>
// // );

// // }
// // export default ProgressPage;
import React, { useEffect, useState } from "react";
import SampleCard from "../components/SampleCard";
import axios from "axios";
import PopularCourseCard from "../components/PopularCourseCard";

function TestPage() {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    console.log("sec");
    axios
      .get("/courses/getPopularCourse/", { params: { limit: 5 } })
      .then((res) => {
        setCourses([...res.data]);
      })
      .catch((error) => {
        console.log(error.response.data.message);
      });
  }, []);
  return (
    <div>
      <SampleCard />
      <div className="my-2 shadow-md">
        <h2 className="rounded-tl-lg rounded-tr-lg text-center bg-[#796bd4] px-3.5 py-2.5 font-semibold text-white shadow-sm  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500">
          Popular Courses
        </h2>
        <div className="flex flex-col flex-nowrap items-center max-h-[700px] overflow-y-auto pt-5">
          {courses.map((course, index) => (
            <PopularCourseCard
              key={index}
              courseId={course.course_id}
              course_name={course.course_title}
              course_description={course.course_details}
              hoursNeeded={course.course_total_hour}
              teacherName={course.course_instructor}
              rating={course.course_rating}
              price={course.course_price}
              level={course.course_level}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default TestPage;
