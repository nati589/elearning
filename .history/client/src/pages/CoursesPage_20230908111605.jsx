import CoursesHero from "../components/CoursesHero";
import CoursesBody from "../components/CoursesBody";
//import OtherCourses from "../components/OtherCourses";

function CourseDetailsPage() {
  return (
    <>
      <CoursesHero />
      <CoursesBody />
      {/* <OtherCourses /> */}
      <div className="p-10">
        <Subscription />
      </div>
    </>
  );
}

export default CourseDetailsPage;
