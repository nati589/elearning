import React from "react";
import BooksHero from "../components/BooksHero";
import BooksLayout from "../components/BooksLayout";
import Subscription from "../components/Subscription";
import BooksCard from "../components/BooksCard";

function BooksPage() {
  return (
    <>
      <BooksHero />
      <BooksLayout />
      {/* <BooksCard /> */}
      <Subscription />
    </>
  );
}

export default BooksPage;
