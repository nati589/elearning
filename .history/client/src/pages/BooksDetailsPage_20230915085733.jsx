import React, { useEffect, useState } from "react";
import Pricecard from "../components/Pricecard";
import BookImage from "../../src/assets/Image.png";
import PopularCourseCard from "../components/PopularCourseCard";
import { useNavigate, useParams } from "react-router-dom";
import DetailsHeroImage from "../assets/ourgoal-image.png";

import axios from "axios";

function BooksDetailsPage() {
  const navigate = useNavigate();
  const [booksData, setBooksData] = useState({});
  const { id } = useParams();

  useEffect(() => {
    if (id === null) {
      navigate("/");
    } else {
      axios
        .get("/books/getSinglebook", { params: { bookID: id } })
        .then((res) => {
          setBooksData({ ...res.data[0] });
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
        <div className="flex items-center justify-around py-4 flex-wrap-reverse lg:flex-nowrap">
          <>
            <span className="flex gap-4">
              <h2 className="text-2xl md:text-4xl font-bold text-center my-2">
                <span className="text-[#9C4DF4]">{booksData.book_title}</span>
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
            {booksData.book_details}
          </p>
        </div>
        <div className="mx-4 w-4/12">
          <Pricecard
            book_price={booksData.book_price}
            book_instructor={booksData.book_instructor}
            book_rate={booksData.book_rating}
            book_total_hour={booksData.book_total_hour}
            book_sections="30"
            book_quizzes="5"
            book_answer={booksData.book_certificate}
            book_access="Lifetime"
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
      </div>
    </div>
  );
}

export default BooksDetailsPage;
