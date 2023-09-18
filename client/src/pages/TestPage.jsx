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
import React from "react";
import SampleCard from "../components/SampleCard";
import TrendingCoursesCard from "../components/TrendingCoursesCard";
import BookImg from "../assets/MyBookImg.png";

function TestPage() {
  return (
    <div>
      <TrendingCoursesCard
        courseId="1"
        course_title="interaction"
        course_details="orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s when an unknown printer took a galley of type and scrambled it to make a type specimen book"
        course_thumbnail={BookImg}
        course_total_hour="3Hours"
        course_instructure="Wadew Warren"
        course_level="level"
        course_rate="4.7"
        course_price="price"
      />
    </div>
  );
}

export default TestPage;
