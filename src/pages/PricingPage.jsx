import React from "react";

export default function PricingPage() {
  return (
    <section
      className="
   bg-white
   pt-20
   lg:pt-[120px]
   pb-12
   lg:pb-[90px]
   relative
   z-20
   overflow-hidden mx-8
   "
    >
      <div className="container">
        <div className="flex flex-wrap -mx-4">
          <div className="w-full px-4">
            <div className="text-center mx-auto mb-[60px] lg:mb-20 max-w-[510px]">
              <span className="font-semibold text-lg text-indigo-500 mb-2 block">
                Pricing Table
              </span>
              <h2
                className="
                  font-bold
                  text-3xl
                  sm:text-4xl
                  md:text-[40px]
                  text-dark
                  mb-4
                  "
              >
                Our Pricing Plan
              </h2>
              <p className="text-base text-body-color">
                There are many variations of passages of Lorem Ipsum available
                but the majority have suffered alteration in some form.
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap justify-center -mx-4">
          <div className="w-full md:w-1/2 lg:w-1/3 px-4">
            <div
              className="
               bg-white
               rounded-xl
               relative
               z-10
               overflow-hidden
               border border-indigo-500 border-opacity-20
               shadow-pricing
               py-10
               px-8
               sm:p-12
               lg:py-10 lg:px-6
               xl:p-12
               mb-10
               "
            >
              <span className="text-indigo-500 font-semibold text-lg block mb-4">
                Personal
              </span>
              <h2 className="font-bold text-dark mb-5 text-[42px]">
                $59
                <span className="text-base text-body-color font-medium">
                  / year
                </span>
              </h2>
              <p
                className="
                  text-base text-body-color
                  pb-8
                  mb-8
                  border-b border-[#F2F2F2]
                  "
              >
                Perfect for using in a personal website or a client project.
              </p>
              <div className="mb-7">
                <p className="text-base text-body-color leading-loose mb-1">
                  1 User
                </p>
                <p className="text-base text-body-color leading-loose mb-1">
                  All UI components
                </p>
                <p className="text-base text-body-color leading-loose mb-1">
                  Lifetime access
                </p>
                <p className="text-base text-body-color leading-loose mb-1">
                  Free updates
                </p>
                <p className="text-base text-body-color leading-loose mb-1">
                  Use on 1 (one) project
                </p>
                <p className="text-base text-body-color leading-loose mb-1">
                  3 Months support
                </p>
              </div>
              <a
                href="/"
                className="
                  w-full
                  block
                  text-base
                  font-semibold
                  text-indigo-500
                  bg-transparent
                  border border-[#D4DEFF]
                  rounded-md
                  text-center
                  p-4
                  hover:text-white hover:bg-indigo-500 hover:border-primary
                  transition
                  "
              >
                Choose Personal
              </a>
              <div>
                <span className="absolute right-0 top-7 z-[-1]">
                  <svg
                    width="77"
                    height="172"
                    viewBox="0 0 77 172"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="86" cy="86" r="86" fill="url(#paint0_linear)" />
                    <defs>
                      <linearGradient
                        id="paint0_linear"
                        x1="86"
                        y1="0"
                        x2="86"
                        y2="172"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stop-color="#ff80b5" stop-opacity="0.09" />
                        <stop
                          offset="1"
                          stop-color="#9089fc"
                          stop-opacity="0"
                        />
                      </linearGradient>
                    </defs>
                  </svg>
                </span>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/3 px-4">
            <div
              className="
               bg-white
               rounded-xl
               relative
               z-10
               overflow-hidden
               border border-indigo-500 border-opacity-20
               shadow-pricing
               py-10
               px-8
               sm:p-12
               lg:py-10 lg:px-6
               xl:p-12
               mb-10
               sm:  hover:text-white hover:bg-indigo-500 hover:border-primary

               "
            >
              <span className="text-indigo-500 font-semibold text-lg block mb-4">
                Business
              </span>
              <h2 className="font-bold text-dark mb-5 text-[42px]">
                $199
                <span className="text-base text-body-color font-medium">
                  / year
                </span>
              </h2>
              <p
                className="
                  text-base text-body-color
                  pb-8
                  mb-8
                  border-b border-[#F2F2F2]
                  "
              >
                Perfect for using in a Business website or a client project.
              </p>
              <div className="mb-7">
                <p className="text-base text-body-color leading-loose mb-1">
                  5 Users
                </p>
                <p className="text-base text-body-color leading-loose mb-1">
                  All UI components
                </p>
                <p className="text-base text-body-color leading-loose mb-1">
                  Lifetime access
                </p>
                <p className="text-base text-body-color leading-loose mb-1">
                  Free updates
                </p>
                <p className="text-base text-body-color leading-loose mb-1">
                  Use on 3 (Three) project
                </p>
                <p className="text-base text-body-color leading-loose mb-1">
                  4 Months support
                </p>
              </div>
              <a
                href="/"
                className="
                  w-full
                  block
                  text-base
                  font-semibold
                  text-white
                  bg-indigo-500
                  border border-primary
                  rounded-md
                  text-center
                  p-4
                  hover:bg-opacity-90
                  transition
                  "
              >
                Choose Business
              </a>
              <div>
                <span className="absolute right-0 top-7 z-[-1]">
                  <svg
                    width="77"
                    height="172"
                    viewBox="0 0 77 172"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="86" cy="86" r="86" fill="url(#paint0_linear)" />
                    <defs>
                      <linearGradient
                        id="paint0_linear"
                        x1="86"
                        y1="0"
                        x2="86"
                        y2="172"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stop-color="#3056D3" stop-opacity="0.09" />
                        <stop
                          offset="1"
                          stop-color="#9089fc"
                          stop-opacity="0"
                        />
                      </linearGradient>
                    </defs>
                  </svg>
                </span>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/3 px-4">
            <div
              className="
               bg-white
               rounded-xl
               relative
               z-10
               overflow-hidden
               border border-indigo-500 border-opacity-20
               shadow-pricing
               py-10
               px-8
               sm:p-12
               lg:py-10 lg:px-6
               xl:p-12
               mb-10
               "
            >
              <span className="text-indigo-500 font-semibold text-lg block mb-4">
                Professional
              </span>
              <h2 className="font-bold text-dark mb-5 text-[42px]">
                $256
                <span className="text-base text-body-color font-medium">
                  / year
                </span>
              </h2>
              <p
                className="
                  text-base text-body-color
                  pb-8
                  mb-8
                  border-b border-[#F2F2F2]
                  "
              >
                Perfect for using in a Professional website or a client project.
              </p>
              <div className="mb-7">
                <p className="text-base text-body-color leading-loose mb-1">
                  Unlimited Users
                </p>
                <p className="text-base text-body-color leading-loose mb-1">
                  All UI components
                </p>
                <p className="text-base text-body-color leading-loose mb-1">
                  Lifetime access
                </p>
                <p className="text-base text-body-color leading-loose mb-1">
                  Free updates
                </p>
                <p className="text-base text-body-color leading-loose mb-1">
                  Use on Unlimited project
                </p>
                <p className="text-base text-body-color leading-loose mb-1">
                  12 Months support
                </p>
              </div>
              <a
                href="/"
                className="
                  w-full
                  block
                  text-base
                  font-semibold
                  text-indigo-500
                  bg-transparent
                  border border-[#D4DEFF]
                  rounded-md
                  text-center
                  p-4
                  hover:text-white hover:bg-indigo-500 hover:border-indigo-500
                  transition
                  "
              >
                Choose Professional
              </a>
              <div>
                <span className="absolute right-0 top-7 z-[-1]">
                  <svg
                    width="77"
                    height="172"
                    viewBox="0 0 77 172"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="86" cy="86" r="86" fill="url(#paint0_linear)" />
                    <defs>
                      <linearGradient
                        id="paint0_linear"
                        x1="86"
                        y1="0"
                        x2="86"
                        y2="172"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stop-color="#3056D3" stop-opacity="0.09" />
                        <stop
                          offset="1"
                          stop-color="#9089fc"
                          stop-opacity="0"
                        />
                      </linearGradient>
                    </defs>
                  </svg>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
