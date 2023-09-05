import React from "react";
import BooksHero from "../components/BooksHero";
import BooksLayout from "../components/BooksLayout";
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
        <div>
          {" "}
          <MoreBooks />
        </div>
        <div>
          {" "}
          <BooksBody />
        </div>
      </div>
      <Subscription />
    </>
  );
}

export default BooksPage;
