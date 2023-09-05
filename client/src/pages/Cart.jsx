import { useNavigate } from "react-router-dom";
import CartItem from "../components/CartItem";
import { BiArrowBack } from "react-icons/bi";
function Cart() {
  const navigate = useNavigate();
  return (
    <div className="pt-10 pb-2 lg:px-auto lg:px-32 sm:px-2">
      <div className="flex flex-row justify-between items-center ">
        <h1 className="text-2xl md:text-3xl">Shopping cart</h1>
        <button
          onClick={() => navigate(-1)}
          className="bg-purple-30 gap-1 flex items-center p-1 text-sm md:text-md rounded text-medium-purple"
        >
          <BiArrowBack className="text-lg" />
          Continue shopping
        </button>
      </div>
      <div className="mt-16">
        <h2>you have 3 items in your cart</h2>
      </div>
      <div className=" flex flex-col gap-2 mb-4  py-1 max-w-max">
        <CartItem
          title="Advance amharic course part one"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae velit ipsa dicta, nesciunt error perspiciatis repellendus neque aut deleniti quidem veniam porro, voluptatum"
          hour="31"
          level="Intermadate"
          lecture="32"
          rate="4.7"
          price={16.5}
        />
        <CartItem
          title="Advance amharic course part one"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae velit ipsa dicta, nesciunt error perspiciatis repellendus neque aut deleniti quidem veniam porro, voluptatum"
          hour="31"
          level="Intermadate"
          lecture="32"
          rate="4.7"
          price={16.5}
        />
        <CartItem
          title="Advance amharic course part one"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae velit ipsa dicta, nesciunt error perspiciatis repellendus neque aut deleniti quidem veniam porro, voluptatum"
          hour="31"
          level="Intermadate"
          lecture="32"
          rate="4.7"
          price={16.5}
        />

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
    </div>
  );
}

export default Cart;
