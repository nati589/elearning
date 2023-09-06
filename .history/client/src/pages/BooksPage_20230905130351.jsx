import React from "react";
import BooksHero from "../components/BooksHero";
import BooksLayout from "../components/BooksLayout";
import Subscription from "../components/Subscription";
import BooksCard from "../components/BooksCard";
import TrendingCard from "../components/TrendingCoursesCard";

function BooksPage() {
  return (
    <>
      <BooksHero />

      <Subscription />
    </>
  );
}

export default BooksPage;
