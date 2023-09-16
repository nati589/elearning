import React from "react";
import BookImg from "../assets/MyBookImg.png";

function SampleCard() {
  return (
    <div>
      {/* <!-- component --> */}
      <div class=" flex flex-col gap-4 items-center justify-center bg-white">
        {/* <!-- Card 1 --> */}
        <a
          href="#"
          class="w-[30rem] border-2 border-b-4 border-gray-200 rounded-xl hover:bg-gray-50"
        >
          {/* <!-- Badge --> */}
          <p class="bg-medium-purple w-fit px-4 py-1 text-sm font-bold text-white rounded-tl-lg rounded-br-xl">
            {" "}
            FEATURED{" "}
          </p>

          <div class="grid grid-cols-6 p-5 gap-y-2">
            {/* <!-- Profile Picture --> */}
            <div>
              <img src={BookImg} class="max-w-16 max-h-16 rounded-full" />
            </div>

            {/* <!-- Description --> */}
            <div class="col-span-5 md:col-span-4 ml-4">
              <p class="text-dark-purple font-bold text-xs"> Instructor </p>

              <p class="text-gray-600 font-bold"> Title </p>

              <p class="text-gray-400"> Time </p>

              <p class="text-gray-400">rating </p>
              <p class="text-gray-400">price </p>
                            <p class="text-gray-400">rating </p>


            </div>

            {/* <!-- Price --> */}
            <div class="flex col-start-2 ml-4 md:col-start-auto md:ml-0 md:justify-end">
              <p class="rounded-lg text-dark-purple font-bold bg-light-purple  py-1 px-3 text-sm w-fit h-fit">
                {" "}
                $ 5{" "}
              </p>
            </div>
          </div>
        </a>

        {/* <a
          href="#"
          class="w-[30rem] border-2 border-b-4 border-gray-200 rounded-xl hover:bg-gray-50"
        >
          <div class="grid grid-cols-6 p-5 gap-y-2">
            <div>
              <img src={BookImg} class="max-w-16 max-h-16 rounded-full" />
            </div>

            <div class="col-span-5 md:col-span-4 ml-4">
              <p class="text-dark-purple font-bold text-xs"> 7+ SPOTS LEFT </p>

              <p class="text-gray-600 font-bold">
                {" "}
                [Beginner] Light Discussion{" "}
              </p>

              <p class="text-gray-400"> Fri, Mar 11 . 8:00 - 9:30 AM </p>

              <p class="text-gray-400"> Beginner speakers </p>
            </div>

            <div class="flex col-start-2 ml-4 md:col-start-auto md:ml-0 md:justify-end">
              <p class="rounded-lg text-dark-purple font-bold bg-light-purple  py-1 px-3 text-sm w-fit h-fit">
                {" "}
                FREE{" "}
              </p>
            </div>
          </div>
        </a> */}
      </div>
    </div>
  );
}

export default SampleCard;
