import React from "react";
import "alpinejs";

export default function Setting() {
  const [open, setOpen] = useState(true);

  return (
    <div className="bg-off-white">
      <div className="flex flex-col flex-nowrap my-3 bg-white rounded-lg shadow-md py-5 w-full justify-center items-center ">
        <h2 className="text-center  text-subscribe-purple text-2xl font-semibold ">
          Settings{" "}
        </h2>
      </div>
      <div class="bg-white p-3 shadow-sm rounded-sm px-10">
        <div class="flex items-center space-x-2 font-semibold text-gray-900 leading-8">
          <span class="text-dark-purple">
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
                d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
              />
            </svg>
          </span>
          <span class="tracking-wide">About</span>
        </div>

        <script
          defer
          src="https://unpkg.com/alpinejs@3.9.1/dist/cdn.min.js"
        ></script>

        <div class="flex min-h-screen w-full items-center justify-center bg-gray-100">
          <div
            x-data="{ open: false }"
            class="w-96 rounded border bg-white p-2 shadow"
          >
            <div x-show="!open" class="flex items-center justify-between">
              <div class="ml-2">Hafiz Haziq</div>
              <button
                type="button"
                className="btn rounded bg-gray-200 px-4 py-2 font-medium hover:bg-gray-300"
                onClick={() => setOpen(!open)}
              >
                Edit
              </button>
            </div>

            <div x-show="open" class="flex items-center justify-between">
              <input
                type="text"
                class="mr-4 w-full rounded border bg-gray-100 p-2 focus:border-blue-500 focus:outline-none"
                value="Hafiz Haziq"
              />

              <div class="flex items-center justify-center space-x-2">
                <button
                  type="button"
                  className="btn rounded bg-gray-200 px-4 py-2 font-medium hover:bg-gray-300"
                  onClick={() => setOpen(!open)}
                >
                  Edit
                </button>

                <button
                  type="button"
                  className="btn rounded bg-gray-200 px-4 py-2 font-medium hover:bg-gray-300"
                  onClick={() => setOpen(!open)}
                >
                  Edit
                </button>
              </div>
            </div>

            <button class="block w-64 text-dark-purple text-sm font-semibold rounded-lg hover:bg-gray-100 focus:outline-none focus:shadow-outline focus:bg-gray-100 hover:shadow-xs p-3 my-4">
              Edit Information
            </button>
          </div>
          <div class="bg-white p-3 shadow-sm rounded-sm px-10">
            <span class="tracking-wide text-xlg font-semibold">Courses</span>
            <div class="grid grid-cols-2">
              <div>
                <div class="flex items-center space-x-2 font-semibold text-gray-900 leading-8 mb-3">
                  <span class="text-dark-purple">
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
                  <span class="tracking-wide">Ongoing</span>
                </div>
                <ul class="list-inside space-y-2">
                  <li>
                    <div class="text-dark-purple">
                      Owner at Her Company Inc.
                    </div>
                    <div class="text-gray-500 text-xs">March 2020 - Now</div>
                  </li>
                  <li>
                    <div class="text-dark-purple">
                      Owner at Her Company Inc.
                    </div>
                    <div class="text-gray-500 text-xs">March 2020 - Now</div>
                  </li>
                  <li>
                    <div class="text-dark-purple">
                      Owner at Her Company Inc.
                    </div>
                    <div class="text-gray-500 text-xs">March 2020 - Now</div>
                  </li>
                  <li>
                    <div class="text-dark-purple">
                      Owner at Her Company Inc.
                    </div>
                    <div class="text-gray-500 text-xs">March 2020 - Now</div>
                  </li>
                </ul>
              </div>
              <div>
                <div class="flex items-center space-x-2 font-semibold text-gray-900 leading-8 mb-3">
                  <span class="text-dark-purple">
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
                  <span class="tracking-wide">Completed Courses</span>
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
      </div>
    </div>
  );
}
