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
        <div className="px-10 w-3/12">
          <MoreBooks />
        </div>
        <div className=" p-10 w-8/12">
          {" "}
          <BooksBody />
        </div>
      </div>
      <Subscription />
    </>
  );
}

export default BooksPage;
