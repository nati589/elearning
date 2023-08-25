import React from "react";

export default function BookCard() {
  return (
    <div class="flex flex-col justify-center items-center border-2 rounded-xl ">
      <div class="!z-5 relative flex flex-col rounded-[20px] bg-white bg-clip-border shadow-3xl shadow-shadow-500 w-full !p-4 3xl:p-![18px] undefined ">
        <div class="h-full w-full">
          <div class="relative w-full">
            <img
              src="data:image/jpeg;base64,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"
              class="mb-3 h-full w-full rounded-xl 3xl:h-full 3xl:w-full"
              alt=""
            />
            {/* <button class="absolute top-3 right-3 flex items-center justify-center rounded-full bg-white p-2 text-brand-500 hover:cursor-pointer">
                  <div class="flex h-full w-full items-center justify-center rounded-full text-xl hover:bg-gray-50">
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      stroke-width="0"
                      viewBox="0 0 512 512"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg">
                      <path
                        fill="none"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="32"
                        d="M352.92 80C288 80 256 144 256 144s-32-64-96.92-64c-52.76 0-94.54 44.14-95.08 96.81-1.1 109.33 86.73 187.08 183 252.42a16 16 0 0018 0c96.26-65.34 184.09-143.09 183-252.42-.54-52.67-42.32-96.81-95.08-96.81z"></path>
                    </svg>
                  </div>
                </button> */}
          </div>
          <div class="mb-3 flex items-center justify-between px-1 md:items-start">
            <div class="mb-2">
              <p class="text-lg font-bold text-navy-700"> </p>
            </div>
          </div>
          <div className="flex items-center justify-between mx-1">
            <div className="text-red-500">$40.00</div>
            <div class="flex items-center w-20">
              <svg
                class="w-5 h-5 text-yellow-400"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
              </svg>
              <svg
                class="w-5 h-5 text-yellow-400"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
              </svg>
              <svg
                class="w-5 h-5 text-yellow-400"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
              </svg>
              <svg
                class="w-5 h-5 text-yellow-400"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
              </svg>
              <svg
                class="w-5 h-5 text-gray-300 dark:text-gray-500"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
              </svg>
            </div>
          </div>
          {/* <div class="flex items-center justify-between md:items-center lg:justify-between ">
                        <div class="flex">
                            <p class="!mb-0 text-sm font-bold text-brand-500">Current Bid: 0.91 <span>ETH</span></p>
                        </div>
                        <button href="" class="linear rounded-[20px] bg-brand-900 px-4 py-2 text-base font-medium text-black transition duration-200 hover:bg-brand-800 active:bg-brand-700">Place Bid</button>
                    </div> */}
        </div>
      </div>
    </div>
  );
}
