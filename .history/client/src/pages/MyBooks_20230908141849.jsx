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

      <BooksBody />
    </>
  );
}

export default BooksPage;
