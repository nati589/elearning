import React from "react";

export default function Setting() {
  return (
    <div>
      <div className="flex flex-col flex-nowrap my-3 bg-light-purple rounded-lg shadow-md py-5 w-full justify-center items-center ">
        <h2 className="text-center  text-subscribe-purple text-2xl font-semibold ">
          Settings{" "}
        </h2>
      </div>
      <div className="flex flex-col flex-nowrap my-64 bg-off-white rounded-lg shadow-md w-full justify-center items-center ">
        <div className="grid columns-4 ">
          <span class="tracking-wide font-bold text-dark-purple text-xl ">
            About
          </span>
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
              <div class="px-4 py-2 font-semibold">Permanent Address</div>
              <div class="px-4 py-2">Arlington Heights, IL, Illinois</div>
            </div>
            <div class="grid grid-cols-2">
              <div class="px-4 py-2 font-semibold">Email.</div>
              <div class="px-4 py-2">
                <a class="text-blue-800" href="mailto:jane@example.com">
                  beletu@example.com
                </a>
              </div>
            </div>
            <div class="grid grid-cols-2">
              <div class="px-4 py-2 font-semibold">Birthday</div>
              <div class="px-4 py-2">Feb 06, 1998</div>
            </div>
          </div>
        </div>
        <button class="block w-full text-dark-purple text-sm font-semibold rounded-lg hover:bg-gray-100 focus:outline-none focus:shadow-outline focus:bg-gray-100 hover:shadow-xs p-3 my-4">
          Show Edit Information
        </button>
      </div>
      <div class="bg-white p-3 shadow-sm rounded-sm">
        <div class="grid grid-cols-2">
          <div>
            <div class="flex items-center space-x-2 font-semibold text-gray-900 leading-8 mb-3">
              <span clas="text-green-500">
                <svg
                  class="h-5"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
              </span>
              <span class="tracking-wide">Experience</span>
            </div>
            <ul class="list-inside space-y-2">
              <li>
                <div class="text-dark-purple">Owner at Her Company Inc.</div>
                <div class="text-gray-500 text-xs">March 2020 - Now</div>
              </li>
              <li>
                <div class="text-dark-purple">Owner at Her Company Inc.</div>
                <div class="text-gray-500 text-xs">March 2020 - Now</div>
              </li>
              <li>
                <div class="text-dark-purple">Owner at Her Company Inc.</div>
                <div class="text-gray-500 text-xs">March 2020 - Now</div>
              </li>
              <li>
                <div class="text-dark-purple">Owner at Her Company Inc.</div>
                <div class="text-gray-500 text-xs">March 2020 - Now</div>
              </li>
            </ul>
          </div>
          <div>
            <div class="flex items-center space-x-2 font-semibold text-gray-900 leading-8 mb-3">
              <span clas="text-green-500">
                <svg
                  class="h-5"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path fill="#fff" d="M12 14l9-5-9-5-9 5 9 5z" />
                  <path
                    fill="#fff"
                    d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
                  />
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                  />
                </svg>
              </span>
              <span class="tracking-wide">Education</span>
            </div>
            <ul class="list-inside space-y-2">
              <li>
                <div class="text-dark-purple">Masters Degree in Oxford</div>
                <div class="text-gray-500 text-xs">March 2020 - Now</div>
              </li>
              <li>
                <div class="text-dark-purple">Bachelors Degreen in LPU</div>
                <div class="text-gray-500 text-xs">March 2020 - Now</div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
