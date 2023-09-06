import React from "react";
import BooksHero from "../components/BooksHero";
import BooksLayout from "../components/BooksLayout";
import Subscription from "../components/Subscription";

function BooksPage() {
  return (
    <>
      <BooksHero />
      {/* <BooksLayout /> */}
      <Subscription />
    </>
  );
}

export default BooksPage;
