import React from "react";
import { Outlet } from 'react-router-dom'
import BooksHero from "../components/BooksHero";


function BooksPage() {
  return (
    <>
      <BooksHero />
      <Outlet/>
    </>
  );
}

export default BooksPage;
