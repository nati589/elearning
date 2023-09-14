import React from "react";

export default function Setting() {
  return (
    <div>
      <div className="flex flex-col flex-nowrap my-3 bg-light-purple rounded-lg shadow-md py-5 w-full justify-center items-center ">
        <h2 className="text-center  text-subscribe-purple text-2xl font-semibold ">
          Settings{" "}
        </h2>
      </div>
      <div className="flex flex-col flex-nowrap my-64 bg-off-white rounded-lg shadow-md py-5 w-full justify-center items-center ">
        <div className="grid columns-4 ">
          <div>First Name Gender Phone Number Email</div>
          <div>First Name Gender Phone Number Email</div>

          <div>Last Name Address Birthday</div>
          <div>Last Name Address Birthday</div>
        </div>
      </div>
    </div>
  );
}
