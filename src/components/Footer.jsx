import React from "react";

function Footer() {
  return (
    <footer className="p-4 flex justify-between">
      <div className="flex justify-between">
        <div>
          <h2 className="flex-1 mr-4 font-bold">Courses</h2>
          <ul>
            <li>Classroom Courses</li>
            <li>Virtual Classroom Courses</li>
            <li>E-learning Courses</li>
            <li>Video Courses</li>
            <li>Offline Courses</li>
          </ul>
        </div>
        <div>
          <h2 className="flex-1 mr-4 font-bold">Community</h2>
          <ul>
            <li>Learners</li>
            <li>Partners</li>
            <li>Developers</li>
            <li>Transactions</li>
            <li>Blog</li>
            <li>Teaching Center</li>
          </ul>
        </div>

        <div>
          <h2 className="flex-1 mr-4 font-bold">Quick Links</h2>
          <ul>
            <li>Home Professional Education</li>
            <li>Courses</li>
            <li>Admissions</li>
            <li>Testimonials</li>
            <li>Programs</li>
          </ul>
        </div>

        <div>
          <h2 className="flex-1 font-bold">More</h2>
          <ul>
            <li>Press</li>
            <li>Investors</li>
            <li>Terms</li>
            <li>Privacy</li>
            <li>Help</li>
            <li>Contact</li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
