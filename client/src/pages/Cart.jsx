import { useNavigate } from "react-router-dom";
import CartItem from "../components/CartItem";
function Cart() {
  const navigate = useNavigate();
  return (
    <div className="pt-10 pb-2 px-32 ">
      <div className="flex flex-row justify-between items-center ">
        <h1 className="text-3xl">Shopping cart</h1>
        <button
          onClick={() => navigate(-1)}
          className="bg-purple-50 p-1.5 rounded text-medium-purple">
          Continue shopping
        </button>
      </div>
      <div className="mt-16">
        <h2>you have 3 items in your cart</h2>
      </div>
      <div className=" flex flex-col gap-2 mb-4  py-1 max-w-max">
        <CartItem />
        <CartItem />
        <CartItem />
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
