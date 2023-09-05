import React from "react";
import BooksHero from "../components/BooksHero";
import BooksLayout from "../components/BooksLayout";

function BooksPage() {
  return (
    <>
      <BooksHero />
      <BooksLayout />
      <Subscription />
    </>
  );
}

export default BooksPage;
