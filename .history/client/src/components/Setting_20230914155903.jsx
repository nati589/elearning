import React, { useState } from "react";
import "alpinejs";
import ProfilePictureChanger from "./ProfilePictureChanger";

function Setting() {
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
          <div class="text-dark-purple">
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
          </div>
          <div class="tracking-wide">About</div>
        </div>
        <div className=" w-4/12">
          {/* Profile Picture Changer */}
          <div className="py-5 ">
            {" "}
            <ProfilePictureChanger />
          </div>{" "}
          {/* Name Changer */}
          <input
          type="password"
          className="w-full p-2 border rounded"
          placeholder="Current Password"
          value={currentPassword}
          onChange={(e) => setCurrentPassword(e.target.value)}
        />
      </div>
      <div className="mb-4">
        <input
          type="password"
          className="w-full p-2 border rounded"
          placeholder="New Password"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
        />
      </div>
      <div className="mb-4">
        <input
          type="password"
          className="w-full p-2 border rounded"
          placeholder="Confirm New Password"
          value={confirmation}
          onChange={(e) => setConfirmation(e.target.value)}
        />
      </div>
      <button
        className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
        onClick={handleChangePassword}
      >
        Change Password
      </button>
      {message && <div className="text-red-500 mt-2">{message}</div>}
    </div>
  );
}

export default ChangePassword;

You can include these components in your application where you need them and handle the server-side logic for changing email and password within the respective handleChangeEmail and handleChangePassword functions.

Remember to implement server-side validation and authentication to ensure the security of these operations. Additionally, you may want to style these components further using Tailwind CSS classes according to your design requirements.
User
write a code to change name of user react & tailwiinf
ChatGPT

To create a feature that allows users to change their name in a React application with Tailwind CSS, you can follow these steps:

    Create a React Component:

    First, create a new React component that will handle the name change. Here's an example of how to do it:

jsx

import React, { useState } from "react";
import "tailwindcss/tailwind.css"; // Make sure you've imported Tailwind CSS

function ChangeName() {
  const [newName, setNewName] = useState("");
  const [message, setMessage] = useState("");

  const handleChangeName = () => {
    // Send a request to change the name on the server here
    // You can use Axios or any other HTTP library for this
    // After successful change, update the message state
    setMessage("Name changed successfully.");
  };

  return (
    <div className="w-1/2 mx-auto mt-8">
      <h2 className="text-2xl font-bold mb-4">Change Name</h2>
      <div className="mb-4">
        <input
          type="text"
          className="w-full p-2 border rounded"
          placeholder="New Name"
          value={newName}
          onChange={(e) => setNewName(e.target.value)}
        />
      </div>
      <button
        className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
        onClick={handleChangeName}
      >
        Change Name
      </button>
      {message && <div className="text-green-500 mt-2">{message}</div>}
    </div>
 
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
  );
}
export default Setting;
