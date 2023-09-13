import { useNavigate } from "react-router-dom";
import CartItemCourse from "../components/CartItemCourse";
import { BiArrowBack } from "react-icons/bi";
import { useEffect, useState } from "react";
import CartImg from "../assets/empty_cart.svg";
import axios from "axios";
import CartItemBook from "../components/CartItemBook";
function Cart() {
  const navigate = useNavigate();
  const [cartEmpty, setCartEmpty] = useState(false);
  const [cartData, setCartData] = useState([]);
  const [courseCartData, setCourseCartData] = useState([]);
  const [bookCartData, setBookCartData] = useState([]);

  useEffect(() => {
    axios
      .post("/cart/getCart", { user_id: localStorage.getItem("user_id") })
      .then((response) => {
        setCartEmpty(response.data.empty);
        console.log(response.data);
        // setCartData([...response.data.cart]);
      })
      .catch((error) => {
        console.log(error.response.data.message);
      });
  });
  return (
    <div className="w-full flex flex-col flex-nowrap pt-10 pb-2 lg:px-auto lg:px-32 sm:px-2">
      <div className="w-full flex flex-row justify-between items-center ">
        <h1 className="text-2xl md:text-3xl">Shopping cart</h1>
        <button
          onClick={() => navigate(-1)}
          className="bg-purple-30 gap-1 flex items-center p-1 text-sm md:text-md rounded text-medium-purple">
          <BiArrowBack className="text-lg" />
          Continue shopping
        </button>
      </div>
      {cartEmpty ? (
        <div className="w-full flex flex-col flex-nowrap text-center text-3xl font-light mt-12 ">
          <h1>Your Cart is empty</h1>
          <img
            src={CartImg}
            alt="empty cart"
            className="w-4/12 h-auto m-auto mb-3 mt-3"
          />
        </div>
      ) : (
        <>
          <div className="w-full mt-16">
            <h2>you have {cartData.length} items in your cart</h2>
          </div>
          {}
          <div className="w-full flex flex-col gap-2 mb-4  py-1 max-w-max">
            <h2>Books</h2>

            {/* {bookCartData.map((item, index) => (
              <CartItemBook
                key={item.cart_iddex}
                cart_id={item.cart_id}
                book_id={item.course_id}
              />
            ))} */}

            <h2>Courses</h2>

            {/* {courseCartData.map((item, index) => (
              <CartItemCourse
                key={item.cart_id}
                cart_id={item.cart_id}
                course_id={item.course_id}
              />
            ))} */}

            <div className="flex flex-col gap-1 self-end mt-3">
              <div className=" bg-purple-100 w-40 p-2 text-xl rounded flex flex-row justify-between">
                <span>Total</span>
                <span className="text-medium-purple">$32.12</span>
              </div>
              <div>
                <button className="bg-medium-purple text-white p-2 rounded  w-40">
                  Checkout
                </button>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default Cart;
