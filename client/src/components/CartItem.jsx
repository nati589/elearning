function CartItem() {
  return (
    <div className=" shadow flex flex-row items-center max-w-max gap-6 px-4 rounded">
      <div className=" bg-blue-400  rounded">
        <img
          src="https://images.unsplash.com/photo-1587691592099-24045742c181?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2073&q=80"
          alt=""
          className="object-cover  h-[100px] w-[100px] rounded"
        />
      </div>
      <div className=" max-w-lg py-2">
        <div className="mb-2">
          <h1>Advance amharic course part one</h1>
          <p className="text-xs">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae velit
            ipsa dicta, nesciunt error perspiciatis repellendus neque aut
            deleniti quidem veniam porro, voluptatum
          </p>{" "}
        </div>
        <div className="flex flex-row mb-1.5 gap-1">
          <span className="text-xs">4.7</span>
          <span className="text-xs">XXXXXX</span>
        </div>
        <div className="text-xs flex flex-row gap-5 items-center">
          <span>31 total hours</span>
          <span>31 lecture</span>
          <span>Intermadte</span>
        </div>
      </div>
      <div>
        <span className="text-medium-purple text-lg">$16.99</span>
      </div>
      <button className="bg-medium-purple px-4 py-2 rounded-3xl mx-10 text-white ">
        remove
      </button>
    </div>
  );
}

export default CartItem;
