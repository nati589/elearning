import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShieldAlt } from "@fortawesome/free-solid-svg-icons";

function ProfilePrivacy() {
  return (
    <div>
      <div className="flex flex-col flex-nowrap my-3 bg-light-purple rounded-lg shadow-md py-5 w-full justify-center items-center ">
        <h2 className="text-center  text-subscribe-purple text-2xl font-semibold ">
          Privacy & Security{" "}
        </h2>
      </div>
      <div className="h-screen flex flex-col gap-4 items-center justify-center bg-white">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
          <a
            href="#"
            className="w-[30rem] border-2 border-b-4 border-gray-200 rounded-xl hover:bg-gray-50 mb-4 mr-4"
          >
            {/* <p className="bg-sky-500 w-fit px-4 py-1 text-sm font-bold text-white rounded-tl-lg rounded-br-xl"> FEATURED </p> */}

            <div className="grid grid-cols-6 p-5 gap-y-2">
              <div>
                <FontAwesomeIcon
                  icon={faShieldAlt}
                  className="max-w-32 max-h-32 rounded-full"
                />
              </div>

              <div className="col-span-5 md:col-span-4 ml-4">
                {/* <p className="text-sky-500 font-bold text-xs"> 20+ SPOTS LEFT </p> */}

                <p className="text-dark-purple font-extrabold text-2xl">
                  {" "}
                  Review your privacy settings
                </p>

                <p className="text-gray-400">
                  Take the Privacy Checkup, a step-by-step guide that helps you
                  choose your privacy settings
                </p>

                <p className="text-medium-purple mt-10"> Get Started </p>
              </div>

              {/* <div className="flex col-start-2 ml-4 md:col-start-auto md:ml-0 md:justify-end">
        <p className="rounded-lg text-sky-500 font-bold bg-sky-100  py-1 px-3 text-sm w-fit h-fit"> $ 5 </p>
      </div> */}
            </div>
          </a>

          <a
            href="#"
            className="w-[30rem] border-2 border-b-4 border-gray-200 rounded-xl hover:bg-gray-50 mb-4"
          >
            {/* <p className="bg-sky-500 w-fit px-4 py-1 text-sm font-bold text-white rounded-tl-lg rounded-br-xl"> FEATURED </p> */}

            <div className="grid grid-cols-6 p-5 gap-y-2">
              <div>
                <FontAwesomeIcon
                  icon={faShieldAlt}
                  className="max-w-32 max-h-32 rounded-full"
                />
              </div>

              <div className="col-span-5 md:col-span-4 ml-4">
                {/* <p className="text-sky-500 font-bold text-xs"> 20+ SPOTS LEFT </p> */}

                <p className="text-dark-purple font-extrabold text-2xl">
                  Make Elearning yours
                </p>

                <p className="text-gray-400">
                  Get the data in your account and choose what activity is saved
                  to personalize your experience
                </p>

                <p className="text-medium-purple mt-10"> Get Started </p>
              </div>

              {/* <div className="flex col-start-2 ml-4 md:col-start-auto md:ml-0 md:justify-end">
        <p className="rounded-lg text-sky-500 font-bold bg-sky-100  py-1 px-3 text-sm w-fit h-fit"> $ 5 </p>
      </div> */}
            </div>
          </a>
          <a
            href="#"
            className="w-[30rem] border-2 border-b-4 border-gray-200 rounded-xl hover:bg-gray-50"
          >
            {/* <p className="bg-sky-500 w-fit px-4 py-1 text-sm font-bold text-white rounded-tl-lg rounded-br-xl"> FEATURED </p> */}

            <div className="grid grid-cols-6 p-5 gap-y-2">
              <div>
                <FontAwesomeIcon
                  icon={faShieldAlt}
                  className="max-w-32 max-h-32 rounded-full"
                />
              </div>

              <div className="col-span-5 md:col-span-4 ml-4">
                {/* <p className="text-sky-500 font-bold text-xs"> 20+ SPOTS LEFT </p> */}

                <p className="text-dark-purple font-extrabold text-2xl">
                  We keep your account protected
                </p>

                <p className="text-gray-400">
                  Take the Privacy Checkup, a step-by-step guide that helps you
                  choose your privacy settings
                </p>

                <p className="text-medium-purple mt-10"> Get Started </p>
              </div>

              {/* <div className="flex col-start-2 ml-4 md:col-start-auto md:ml-0 md:justify-end">
        <p className="rounded-lg text-sky-500 font-bold bg-sky-100  py-1 px-3 text-sm w-fit h-fit"> $ 5 </p>
      </div> */}
            </div>
          </a>

          <a
            href="#"
            className="w-[30rem] border-2 border-b-4 border-gray-200 rounded-xl hover:bg-gray-50"
          >
            {/* <p className="bg-sky-500 w-fit px-4 py-1 text-sm font-bold text-white rounded-tl-lg rounded-br-xl"> FEATURED </p> */}

            <div className="grid grid-cols-6 p-5 gap-y-2">
              <div>
                <FontAwesomeIcon
                  icon={faShieldAlt}
                  className="max-w-32 max-h-32 rounded-full"
                />
              </div>

              <div className="col-span-5 md:col-span-4 ml-4">
                {/* <p className="text-sky-500 font-bold text-xs"> 20+ SPOTS LEFT </p> */}

                <p className="text-dark-purple font-extrabold text-2xl">
                  Account Storage
                </p>

                <p className="text-gray-400">
                  Your account storage is shared across Elearning services
                </p>

                <p className="text-medium-purple mt-10"> Get Started </p>
              </div>
              {/* <div className="flex col-start-2 ml-4 md:col-start-auto md:ml-0 md:justify-end">
        <p className="rounded-lg text-sky-500 font-bold bg-sky-100  py-1 px-3 text-sm w-fit h-fit"> $ 5 </p>
      </div> */}
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}
export default ProfilePrivacy;
