import { useNavigate } from "react-router-dom";
import CartItemCourse from "../components/CartItemCourse";
import { BiArrowBack } from "react-icons/bi";
import { useCallback, useEffect, useState } from "react";
import CartImg from "../assets/empty_cart.svg";
import axios from "axios";
import CartItemBook from "../components/CartItemBook";

function Cart() {
  const navigate = useNavigate();
  const [cartData, setCartData] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0.0);
  // let totalPrice = 0;

  useEffect(() => {
    axios
      .post("/cart/getCart", { user_id: localStorage.getItem("user_id") })
      .then((response) => {
        setCartData([...response.data]);
      })
      .catch((error) => {
        console.log(error.response.data.message);
      });
  }, []);

  const removeItem = (cart_id, price) => {
    axios
      .delete("/cart/deleteFromCart", { data: { cart_id } })
      .then((response) => {
        setCartData(cartData.filter((c) => c.cart_id !== cart_id));
        setTotalPrice((prevTotal) => prevTotal - price);
      })
      .catch((error) => {
        console.log(error.response.data.message);
      });
  };

  const addPrice = useCallback(
    (new_price) => {
      const parsedNumber = parseFloat(new_price / 2);
      // for non strict mode
      // const parsedNumber = parseFloat(new_price);
      setTotalPrice((prevTotal) => prevTotal + parsedNumber);
    },
    [cartData]
  );

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
      <>
        {cartData.length === 0 ? (
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
            <div className="w-full mt-8">
              <h2 className="my-4">
                You have{" "}
                <span className="text-medium-purple font-semibold">
                  {cartData.length} items
                </span>{" "}
                in your cart
              </h2>
            </div>
            {}
            <div className="w-full flex flex-col gap-2 mb-4  py-1 max-w-max">
              <h2 className="font-bold text-medium-purple text-lg">Books</h2>

              {cartData
                .filter((item) => item.course_id === null)
                .map((item) => (
                  <CartItemBook
                    key={item.cart_id}
                    cart_id={item.cart_id}
                    book_id={item.book_id}
                    removeItem={removeItem}
                    addPrice={addPrice}
                  />
                ))}

              <h2 className="font-bold text-medium-purple text-lg">Courses</h2>

              {cartData
                .filter((item) => item.book_id === null)
                .map((item) => (
                  <CartItemCourse
                    key={item.cart_id}
                    cart_id={item.cart_id}
                    course_id={item.course_id}
                    removeItem={removeItem}
                    addPrice={addPrice}
                  />
                ))}

              <div className="flex flex-col gap-1 self-end mt-3">
                <div className=" bg-purple-100 w-40 p-2 text-xl rounded flex flex-row justify-between">
                  <span>Total</span>
                  <span className="text-medium-purple">{totalPrice} $</span>
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
      </>
    </div>
  );
}

export default Cart;
