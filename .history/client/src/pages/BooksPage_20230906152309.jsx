import React from "react";
import BooksHero from "../components/BooksHero";
import Subscription from "../components/Subscription";
import BooksCard from "../components/BooksCard";
import TrendingCard from "../components/TrendingCoursesCard";
import BooksBody from "../components/BooksBody";
import MoreBooks from "../components/MoreBooks";

function BooksPage() {
  return (
    <>
      <BooksHero />
      <div className="flex flex-row flex-nowrap  ">
        {" "}
        <div className="px-5 w-8/12">
          <MoreBooks />
        </div>
        <div className=" px-5 w-8/12">
          {" "}
          <BooksBody />
        </div>
      </div>
      <div className="p-10">
        {" "}
        <Subscription />
      </div>
    </>
  );
}

export default BooksPage;
