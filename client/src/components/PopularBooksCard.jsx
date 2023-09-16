import React, { useEffect, useState } from "react";
import dollar from "../assets/icons/dollar.svg";
import person from "../assets/icons/person.svg";
import timer from "../assets/icons/timer.svg";
import FullStar from "../assets/icons/full_star.svg";
import EmptyStar from "../assets/icons/empty_star.svg";
import stickynote from "../assets/icons/stickynote.svg";
import axios from "axios";
import { Link } from "react-router-dom";
import ResponseMessage from "./ResponseMessage";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";


const PopularBooksCard = ({
  bookId,
  book_title,
  book_details,
  book_thumbnail,
  book_total_hour,
  book_author,
  book_level,
  book_rate, 
  book_price,
}) => {
  // const images = require.context("../assets");

  // const book_image = images(book_thumbnail);
  const numbers = [1, 2, 3, 4, 5];
  const partialDesc = book_details ? book_details.slice(0, 80) : "";

  const [failure, setFailure] = useState(false);
  const [addSuccess, setAddSuccess] = useState(false);
  const [resMsg, setResMsg] = useState("");

  useEffect(() => {
    if (localStorage.getItem("user_id")) {
      axios
        .post("/cart/checkBook", {
          book_id: bookId,
          user_id: localStorage.getItem("user_id"),
        })
        .then((res) => {
          if (res.data.message) {
            setAddSuccess(true);
            setFailure(false);
            setResMsg("Already in cart");
          }
        })
        .catch((error) => {
          console.log(error.response.data.message);
        });
    }
  }, [bookId]);

  const addToCart = () => {
    axios
      .post("/cart/addToCart", {
        book_id: bookId,
        user_id: localStorage.getItem("user_id"),
        course_id: null,
      })
      .then((res) => {
        setAddSuccess(true);
        setFailure(false);
        setResMsg(res.data.message);
      })
      .catch((error) => {
        setResMsg(error.response.data.message);
        setAddSuccess(true);
        setFailure(true);
      });
  };
  return (
    <div className="card bg-white border-l-8 border-l-dark-purple rounded-lg shadow-md my-4 p-6 w-80 h-88">
      <Link to={`/bookdetails/${bookId}`} className=" cursor-pointer">
        <h1 className="text-xl mb-4 font-bold">{book_title}</h1>
        <div className="grid grid-cols-4 gap-4">
          <div className="col-span-1">
            <img className="w-32 h-12 " src={book_thumbnail} alt="books" />
          </div>
          <div className="col-span-3">
            <p className="text-sm">{book_details}</p>
          </div>
        </div>

        <div className="flex flex-row m-2">
          <div className="flex-grow">
            <div className="grid grid-rows-3 ">
              <div className="flex flex-row">
                <img className="w-4 h-4" src={timer} alt="" />
                <p className="ml-2 text-sm">{book_total_hour}</p>
              </div>
              <div className="flex flex-row">
                <img className="w-4 h-4" src={person} alt="" />
                <p className="ml-2 text-sm">{book_author}</p>
              </div>
              <div className="flex flex-row">
                <img className="w-4 h-4" src={stickynote} alt="" />
                <p className="ml-2 text-sm">{book_level}</p>
              </div>
            </div>
          </div>
          <div className="flex-grow">
            <div className="grid grid-rows-3 ">
              <div className="flex flex-row">
                <p className="ml-2 text-sm">{book_rate}</p>
                {numbers.map((number) => {
                  const chosenIcon =
                    number <= Math.floor(book_rate) ? FullStar : EmptyStar;
                  return (
                    <img
                      key={number}
                      src={chosenIcon}
                      alt="empty star icon"
                      className="w-4 h-4 ml-0.5"
                    />
                  );
                })}
              </div>
              <div className="flex flex-row">
                <img className="w-4 h-4" src={dollar} alt="" />
                <p className="ml-2 text-sm">{book_price}</p>
              </div>
            </div>
          </div>
        </div>
      </Link>
      <div className="flex flex-row">
        <div className="flex flex-col w-full justify-center items-center mt-4">
          {addSuccess && <ResponseMessage failure={failure} message={resMsg} />}

          {(!addSuccess || failure) &&
            localStorage.getItem("username") &&
            localStorage.getItem("user_id") && (
              <button
                className="button-component-stroke w-fit py-2 px-8 mb-2"
                onClick={addToCart}
              >
                <span className="add-to-cart-text">Add to Cart</span>{" "}
                &nbsp;&nbsp; &nbsp;
                <span className="cart-icon w-4 h-4">
                  <FontAwesomeIcon icon={faShoppingCart} />
                </span>
              </button>
            )}
        </div>
      </div>
    </div>
  );
};

export default PopularBooksCard;
