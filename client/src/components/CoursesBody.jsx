import React from "react";
import CourseCard from "./CourseCard";
function CoursesBody() {
    const courseData = [
        {
            title: "Standard One",
            description:
                "Standard 1 is a foundation Standard that reflects 7 important concepts...",
            image: require("../assets/number-1.png"),
        },
        {
            title: "Standard Two",
            description:
                "Standard 2 builds on the foundations of Standard 1 and includes requirements...",
            image: require("../assets/number-2.png"),
        },
        {
            title: "Standard Three",
            description:
                "Standard 3 of the Aged Care Quality Standards applies to all services delivering personal...",
            image: require("../assets/number-3.png"),
        },
        {
            title: "Standard Four",
            description:
                "Standard 4 of the Aged Care Quality Standards focuses on services and supports...",
            image: require("../assets/number-4.png"),
        },
        {
            title: "Standard Five",
            description:
                "Standard 5 Learning Resources. Learning Resources ensure that the school has the...",
            image: require("../assets/number-5.png"),
        },
        {
            title: "Standard Six",
            description:
                "Standard 6 requires an organization to have a system to resolve complaints...",
            image: require("../assets/number-6.png"),
        },
        {
            title: "Standard Seven",
            description:
                "Standard 7 Blood Management mandates that leaders of health service organizations...",
            image: require("../assets/number-7.png"),
        },
        {
            title: "Standard Eight",
            description:
                "Standard 8 Course from NCERT Solutions help students to understand...",
            image: require("../assets/number-8.png"),
        },
    ];
    return (
        <div className="flex flex-row flex-nowrap w-full">
            <div className="w-4/12 pl-8 pt-10 my-4 flex flex-col">
                <div className="flex flex-col flex-nowrap w-full">
                    <h2 className="flex flex-row text-center rounded-tl-lg rounded-tr-lg bg-[#796bd4] px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500" >
                        Popular Courses
                    </h2>
                    <div class="max-h-40 overflow-y-auto pt-5">


                        <h4 className="text-center text-4xl font-bold text-[#20053E]">Other </h4>


                    </div>
                    <div class="pt-10">
                        <h2 className="rounded-tl-lg rounded-tr-lg text-center bg-[#796bd4] px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500" >
                            Trending Courses
                        </h2>
                        <div class="max-h-40 overflow-y-auto pt-5">


                            <h4 className="text-center text-4xl font-bold text-[#20053E]">Other 2</h4>


                        </div>
                    </div>
                </div>
            </div>
            <div className="w-8/12 justify-center px-4 sm:px-8 md:px-20 my-4 flex flex-col ">
                <h4 className="text-center text-4xl font-bold text-[#20053E]">Other courses</h4>
                <div className="flex w-full m-2 gap-8 justify-between xs:flex-wrap">
                    <div className="flex items-center basis-1/2">
                        <input
                            type="text"
                            className="w-full rounded-lg border border-gray-400 p-2"
                            placeholder="Search ..."
                        />
                        <button className="ml-2 rounded-lg bg-dark-purple p-2 text-white hover:bg-blue-600">
                            Search
                        </button>
                    </div>
                    <div className="">
                        <label htmlFor="sort" className="mr-2">
                            Sort
                        </label>
                        <select name="sort" id="sort" className="rounded-md p-2">
                            <option value="a">Latest</option>
                            <option value="b">Oldest</option>
                            <option value="c">c</option>
                        </select>
                    </div>
                </div>
                <div className="w-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-2 gap-4  my-8">
                    {courseData.map((course, index) => (
                        <CourseCard
                            key={index}
                            course={course}
                            course_name="Amharic For Beginners"
                            course_description="Minim pariatur exercitation est aliquip deserunt id sit tempor voluptate."
                            courseImagePath="./Image.png"
                            hoursNeeded="2 hours"
                            teacherName="Abe Kebe"
                            rating="3.7"
                            price="40 ETB"
                            level="3"
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}
export default CoursesBody;