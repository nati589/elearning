import React from "react";

import Profile from "../components/Profile";
import PopularCourseCard from "../components/PopularCourseCard";
import selam from "../../src/assets/Cardphoto10.png";

function UserProfileDashboard() {
  return (
    <div className="flex flex-row flex-nowrap ">
      {/* profile column */}
      <div className="bg-white w-6/12">
        Profile <Profile />
      </div>
      {/* Your courses conlumn */}
      <div className="bg-white w-4/12">
        <div class="card-header">My Courses </div>
        <div>
          <div class="card-body">
            <PopularCourseCard
              course_title="interaction"
              course_details="orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text"
              course_thumbnail={selam}
              course_total_hour="3Hours"
              course_instructure="selam"
              course_level="level"
              course_rate="4.7"
              course_price="price"
            />
          </div>
        </div>
        <div>
          <div class="card-body">
            <PopularCourseCard
              course_title="interaction"
              course_details="orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text"
              course_thumbnail={selam}
              course_total_hour="3Hours"
              course_instructure="selam"
              course_level="level"
              course_rate="4.7"
              course_price="price"
            />
          </div>
        </div>
        <div>
          <div class="card-body">
            <PopularCourseCard
              course_title="interaction"
              course_details="orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text"
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
    </div>
  );
}

export default UserProfileDashboard;
