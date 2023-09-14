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
          <span class="tracking-wide font-bold text-dark-purple ">About</span>
        </div>
        <div class="text-gray-700">
          <div class="grid md:grid-cols-2 text-sm">
            <div class="grid grid-cols-2">
              <div class="px-4 py-2 font-semibold">First Name</div>
              <div class="px-4 py-2">Jane</div>
            </div>
            <div class="grid grid-cols-2">
              <div class="px-4 py-2 font-semibold">Last Name</div>
              <div class="px-4 py-2">Doe</div>
            </div>
            <div class="grid grid-cols-2">
              <div class="px-4 py-2 font-semibold">Gender</div>
              <div class="px-4 py-2">Female</div>
            </div>
            <div class="grid grid-cols-2">
              <div class="px-4 py-2 font-semibold">Contact No.</div>
              <div class="px-4 py-2">+11 998001001</div>
            </div>
            <div class="grid grid-cols-2">
              <div class="px-4 py-2 font-semibold">Current Address</div>
              <div class="px-4 py-2">Beech Creek, PA, Pennsylvania</div>
            </div>
            <div class="grid grid-cols-2">
              <div class="px-4 py-2 font-semibold">Permanant Address</div>
              <div class="px-4 py-2">Arlington Heights, IL, Illinois</div>
            </div>
            <div class="grid grid-cols-2">
              <div class="px-4 py-2 font-semibold">Email.</div>
              <div class="px-4 py-2">
                <a class="text-blue-800" href="mailto:jane@example.com">
                  jane@example.com
                </a>
              </div>
            </div>
            <div class="grid grid-cols-2">
              <div class="px-4 py-2 font-semibold">Birthday</div>
              <div class="px-4 py-2">Feb 06, 1998</div>
            </div>
          </div>
        </div>
        <button class="block w-full text-blue-800 text-sm font-semibold rounded-lg hover:bg-gray-100 focus:outline-none focus:shadow-outline focus:bg-gray-100 hover:shadow-xs p-3 my-4">
          Show Edit Information
        </button>
      </div>
    </div>
  );
}
