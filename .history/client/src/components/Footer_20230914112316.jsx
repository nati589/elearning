import React, { useState } from "react";
import Logo from "../assets/Logo.png";
import instagramIcon from "../assets/instagram.svg";
import fbIcon from "../assets/facebook.svg";
import linkedinIcon from "../assets/linkedin.svg";
import emailIcon from "../assets/email.svg";
import twitterIcon from "../assets/twitter.svg";
import { FormProvider, useForm } from "react-hook-form";
import InputError from "./InputError";
import { AnimatePresence, motion } from "framer-motion";
import axios from "axios";
import InputComponent from "./InputComponent";
import { GoMail } from "react-icons/go";
import { email_validation } from "../utils/inputValidations";

function Footer() {
  const methods = useForm();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = methods;

  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [failure, setFailure] = useState(false);
  const [success_msg, setMsg] = useState("");

  const handleClick = handleSubmit((data) => {
    console.log("handleClick");
    axios
      .post("/auth/login", data)
      .then((res) => {
        setSubmitSuccess(true);
        setMsg(res.data.message);
        setFailure(false);
        setTimeout(() => {
          setSubmitSuccess(false);
        }, 2000);
      })
      .catch((error) => {
        setSubmitSuccess(true);
        setMsg(error.response.data.message);
        setFailure(true);
        setTimeout(() => {
          setSubmitSuccess(false);
        }, 2000);
      });
  });

  return (
    <footer
      style={{ borderTopLeftRadius: "20px", borderTopRightRadius: "20px" }}
      className="py-4 px-8 mt-1  bg-light-purple"
    >
      <div className="text-sm md:text-base lg:text-base container mx-auto flex flex-wrap items-center">
        <div className="w-1/2 md:w-1/3 lg:w-1/4 flex flex-col px-4 mb-5  justify-center ">
          <ul className="text-subscribe-purple text-sm md:text-base lg:text-lg ml-10">
            <li className="mb-1 hover:text-medium-purple font-bold">
              <a href="/">LOGO</a>
            </li>
            <li className="mb-1 hover:text-medium-purple">
              <a href="/">
                <img
                  src={linkedinIcon}
                  alt="linkedin_logo"
                  className="w-7 h-7 mt-2 transform hover:scale-125 transition-transform duration-500 ease-in-out"
                />
              </a>
            </li>
            <li className="mb-1 hover:text-medium-purple">
              <a href="/">
                {" "}
                <img
                  src={emailIcon}
                  alt="email_logo"
                  className="w-7 h-7 mt-2 transform hover:scale-125 transition-transform duration-500 ease-in-out"
                />
              </a>
            </li>
            <li className="mb-1 hover:text-medium-purple">
              <a href="/">
                {" "}
                <img
                  src={fbIcon}
                  alt="fb_logo"
                  className="w-7 h-7 mt-2 transform hover:scale-125 transition-transform duration-500 ease-in-out"
                />
              </a>
            </li>
            <li className="mb-1 hover:text-medium-purple">
              <a href="/">
                {" "}
                <img
                  src={instagramIcon}
                  alt="insta_logo"
                  className="w-7 h-7 mt-2 transform hover:scale-125 transition-transform duration-500 ease-in-out"
                />
              </a>
            </li>
            <li className="mb-1 hover:text-medium-purple">
              <a href="/">
                {" "}
                <img
                  src={twitterIcon}
                  alt="twitter_logo"
                  className="w-7 h-7 mt-2 transform hover:scale-125 transition-transform duration-500 ease-in-out"
                />
              </a>
            </li>
          </ul>
        </div>

        {/* <div className="w-1/2 md:w-1/3 lg:w-1/4 mb-4 flex flex-col items-center justify-center  ">
          <img src={Logo} alt="logo" className="w-7 h-7 " />
          <h1 class="font-bold text-3xl">Logo</h1>

          <img
            src={linkedinIcon}
            alt="linkedin_logo"
            className="w-8 h-8 mt-2 hover:animate-spin"
          />
          <img
            src={emailIcon}
            alt="email_logo"
            className="w-8 h-8 mt-2 transform hover:bg-white hover:scale-125 transition-transform duration-300  filter hover:brightness-150"
          />
          <img
            src={fbIcon}
            alt="fb_logo"
            className="w-8 h-8 mt-2 hover:rotate-180 transition-transform duration-500 ease-in-out "
          />
          <img
            src={instagramIcon}
            alt="insta_logo"
            className="w-8 h-8 mt-2 hover:rotate-180 transition-transform duration-500 ease-in-out "
          />
          <img
            src={twitterIcon}
            alt="twitter_logo"
            className="w-8 h-8 mt-2 hover:rotate-180 transition-transform duration-500 ease-in-out "
          />
        </div> */}
        <div className="w-1/2 md:w-1/3 lg:w-1/4 flex flex-col px-4 mb-4  justify-center ">
          <ul className="text-subscribe-purple text-sm md:text-base lg:text-lg ml-10">
            <li className="mb-1 hover:text-medium-purple hover:font-semibold">
              <a href="/">FAQ & Help</a>
            </li>
            <li className="mb-1 hover:text-medium-purple hover:font-semibold">
              <a href="/">Courses</a>
            </li>
          </ul>
          <ul className="text-subscribe-purple text-sm md:text-base lg:text-lg ml-10">
            <li className="mb-1 hover:text-medium-purple hover:font-semibold">
              <a href="/">Books </a>
            </li>
            <li className="mb-1 hover:text-medium-purple hover:font-semibold">
              <a href="/">Support </a>
            </li>
          </ul>
        </div>
        <div className="w-full max-w-xs md:w-1/3 lg:w-1/3 px-4 mb-3">
          <h2 className="text-subscribe-purple mb-0.1 font-bold  text-lg">
            Contact Us
          </h2>
          <FormProvider {...methods}>
            <form>
              <div className="mb-0.1">
                <InputComponent
                  logo={
                    <GoMail className="relative top-7 left-3  text-gray-500" />
                  }
                  label="Email"
                  name="login_email"
                  placeholder="Enter your email"
                  type="email"
                  required="required"
                  submitClicked={handleClick}
                  {...email_validation}
                />
              </div>
              <div className="flex flex-col flex-nowrap w-10/12 m-auto mb-1 mt-0.1">
                <AnimatePresence mode="wait" initial={false}>
                  {errors.description && (
                    <InputError
                      message={errors.description.message}
                      key={errors.description.message}
                    />
                  )}
                </AnimatePresence>
                <label htmlFor="description" className="text-subscribe-purple">
                  Description
                  <textarea
                    id="description"
                    name="description"
                    className="w-full font-sans font-thin text-sm bg-opacity-10 border-2 border-gray-200  pt-1 pb-1 pr-3 pl-9 mb-0.1 min-h-[100px] max-h-80 max-w-xl h-28 px-4 py-2 rounded-lg bg-white-700 border-b"
                    placeholder="Enter your description"
                    rows="4"
                    {...register("description", {
                      required: "required",
                    })}
                  />
                </label>
                <button
                  onClick={handleClick}
                  className="button-component self-start w-2/12 my-0.1 py-1 px-4"
                >
                  Send
                </button>
              </div>
            </form>
          </FormProvider>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

// import React from "react";
// import Image from "../assets/Logo.png";

// function Footer({ courseName, teacherName, rating, hoursNeeded, price }) {
//   return (
//     <div className="relative bg-white rounded-lg p-2 w-64" style={{ boxShadow: '0 0 5px rgba(0, 0, 0, 0.3)' }}>
//       <div className="absolute top-0 left-0 w-full h-4 bg-indigo-500 rounded-t-lg"></div>
//       <div className="flex justify-center mb-4">
//         <img src={Image} alt="Course" className="w-32 h-32 rounded-lg" />
//       </div>
//       <div className="grid md:grid-cols-2 gap-4">
//         <div className="md:mb-0">
//           <div className="mb-2">
//             <span className="ml-2">{courseName}</span>
//           </div>
//           <div className="mb-2">
//             <span className="ml-2">{teacherName}</span>
//           </div>
//           <div className="mb-2">
//             <span className="ml-2">{rating}</span>
//           </div>
//         </div>
//         <div>
//           <div className="mb-2">
//             <span className="ml-2">{hoursNeeded}</span>
//           </div>
//           <div className="mb-2">
//             <span className="ml-2">{price}</span>
//           </div>
//         </div>
//       </div>
//       <div className="flex justify-center mt-4">
//         <button className=" button-component-stroke bg-indigo-500 text-white py-2 px-4 rounded-lg">
//           Add to Cart
//         </button>
//       </div>
//     </div>
//   );
//     }
// // export default CourseCard;
// export default Footer;

// // import React from "react";
// // import Image from "../assets/Logo.png";

// // function Footer({ courseName, teacherName, rating, hoursNeeded, price }) {
// //   return (
// //     <div className="bg-white rounded-lg p-4 max-w-xl shadow-xl">
// //       <div className="flex items-center justify-between mb-4">
// //         <div className="flex items-center">
// //           <div className="bg-purple-500 rounded-full h-8 w-8 flex items-center justify-center text-white font-bold text-lg">CN</div>
// //           <h2 className="text-xl font-bold ml-2">Course Name</h2>
// //         </div>
// //       </div>
// //       <div className="mb-4">
// //         <div className="flex items-center">
// //           <span className="font-bold text-gray-700 mr-2">Progress:</span>
// //           <div className="bg-gray-200 h-2 flex-grow rounded-full">
// //             <div className="bg-indigo-500 h-2 rounded-full" style={{ width: '70%' }}></div>
// //           </div>
// //         </div>
// //       </div>
// //       <div className="mb-2">
// //         <h3 className="font-bold text-gray-700">Assessments</h3>
// //       </div>
// //       <div className="grid grid-cols-2 gap-2">
// //         <div className="flex items-center">
// //           <p className="font-bold mr-2">Quiz:</p>
// //           <p className="text-gray-500">15/20</p>
// //         </div>
// //         <div className="flex items-center">
// //           <p className="font-bold mr-2">Assignment:</p>
// //           <p className="text-gray-500">90%</p>
// //         </div>
// //         <div className="flex items-center">
// //           <p className="font-bold mr-2">Mid:</p>
// //           <p className="text-gray-500">18/25</p>
// //         </div>
// //         <div className="flex items-center">
// //           <p className="font-bold mr-2">Final:</p>
// //           <p className="text-gray-500">82%</p>
// //         </div>
// //         <div className="flex items-center">
// //           <p className="font-bold mr-2">Total:</p>
// //           <p className="text-gray-500">320/400</p>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // }
// // export default Footer;

//   //   return (
//   //     <footer className="w-full text-gray-700 bg-green-100 mt-8 body-font rounded-t-3xl">
//   //       {/* <div className="flex items-end w-full min-h-screen bg-white">

//   //       </div> */}
//   //         <div
//   //             className="container flex flex-col flex-wrap px-5 py-24 mx-auto md:items-center lg:items-start md:flex-row md:flex-no-wrap">
//   //             <div className="flex-shrink-0 w-64 mx-auto text-center md:mx-0 md:text-left">
//   //                 <a className="flex items-center justify-center font-medium text-gray-900 title-font md:justify-start" href='/'>
//   //                     <svg className="w-auto h-5 text-gray-900 fill-current" viewBox="0 0 202 69"
//   //                         xmlns="http://www.w3.org/2000/svg">
//   //                         <path
//   //                             d="M57.44.672s6.656 1.872 6.656 5.72c0 0-1.56 2.6-3.744 6.552 8.424 1.248 16.744 1.248 23.816-1.976-1.352 7.904-12.688 8.008-26.208 6.136-7.696 13.624-19.656 36.192-19.656 42.848 0 .416.208.624.52.624 4.576 0 17.888-14.352 21.112-18.824 1.144-1.456 4.264.728 3.12 2.392C56.608 53.088 42.152 69 36.432 69c-4.472 0-8.216-5.928-8.216-10.4 0-6.552 11.752-28.08 20.28-42.952-9.984-1.664-20.176-3.64-27.976-3.848-13.936 0-16.64 3.536-17.576 6.032-.104.312-.52.52-.832.312-3.744-7.072-1.456-14.56 14.144-14.56 9.36 0 22.048 4.576 34.944 7.592C54.736 5.04 57.44.672 57.44.672zm46.124 41.08c1.144-1.456 4.264.728 3.016 2.392C100.236 53.088 85.78 69 80.06 69c-4.576 0-8.32-5.928-8.32-10.4v-.208C67.58 64.32 63.524 69 61.34 69c-4.472 0-8.944-4.992-8.944-11.856 0-10.608 15.704-33.072 24.96-33.072 4.992 0 7.384 2.392 8.528 4.576l2.6-4.576s6.656 1.976 6.656 5.824c0 0-13.312 24.336-13.312 30.056 0 .208 0 .624.52.624 4.472 0 17.888-14.352 21.216-18.824zm-40.56 18.72c2.184 0 11.752-13.312 17.368-22.048l4.16-7.488c-8.008-7.904-27.248 29.536-21.528 29.536zm57.564-38.168c-2.184 0-4.992-2.808-4.992-4.784 0-2.912 5.824-14.872 7.28-14.872 2.6 0 6.136 2.808 6.136 6.344 0 2.08-7.176 12.064-8.424 13.312zm-17.68 46.592c-4.472 0-8.216-5.928-8.216-10.4 0-6.656 16.744-34.528 16.744-34.528s6.552 1.976 6.552 5.824c0 0-13.312 24.336-13.312 30.056 0 .208.104.624.624.624 4.472 0 17.888-14.352 21.112-18.824 1.144-1.456 4.264.728 3.12 2.392-6.448 8.944-20.904 24.856-26.624 24.856zM147.244.672s6.656 1.872 6.656 5.72c0 0-25.792 43.784-25.792 53.56 0 .416.208.624.52.624 4.576 0 17.888-14.352 21.112-18.824 1.144-1.456 4.264.728 3.12 2.392C146.412 53.088 131.956 69 126.236 69c-4.472 0-8.216-5.928-8.216-10.4 0-10.4 29.224-57.928 29.224-57.928zM169.7 60.16c3.848-2.392 7.904-6.864 10.816-10.92 6.656-9.464 11.544-20.696 10.504-27.352-.312-3.432-.104-4.056 3.12-2.704 5.2 2.392 11.336 8.632 2.184 22.88-5.2 8.008-12.48 15.288-19.344 19.76-2.704 1.768-6.344 3.328-9.984 4.16-.52.416-1.04.728-1.456.936-1.872 1.352-4.264 2.08-7.592 2.08-14.664 0-16.848-12.272-16.848-16.016 0-2.392 3.224-4.68 4.784-3.744.208.104.312.416.312.624 0 2.808 1.872 13.104 9.984 13.104 7.904 0 3.432-18.304 2.288-27.144-1.456 2.288-3.432 4.992-5.616 8.32-2.6 3.744-5.72 1.456-4.784 0 5.824-8.424 9.152-13.832 11.856-18.616 1.248-2.08 3.328-3.328 6.448-3.328 2.704 0 5.824 3.016 6.864 4.784.312.52 0 1.04-.52 1.144a5.44 5.44 0 00-4.368 5.408c0 6.968 2.6 17.16 1.664 24.856l-.312 1.768z"
//   //                             fillRule="nonzero" /></svg>
//   //                 </a>
//   //                 <p className="mt-2 text-sm text-gray-500">Design, Code and Ship!</p>
//   //                 <div className="mt-4">
//   //                     <span className="inline-flex justify-center mt-2 sm:ml-auto sm:mt-0 sm:justify-start">
//   //                         <a className="text-gray-500 cursor-pointer hover:text-gray-700" href='/'>
//   //                             <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
//   //                                 className="w-5 h-5" viewBox="0 0 24 24">
//   //                                 <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
//   //                             </svg>
//   //                         </a>
//   //                         <a className="ml-3 text-gray-500 cursor-pointer hover:text-gray-700" href='/'>
//   //                             <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
//   //                                 className="w-5 h-5" viewBox="0 0 24 24">
//   //                                 <path
//   //                                     d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z">
//   //                                 </path>
//   //                             </svg>
//   //                         </a>
//   //                         <a href='/' className="ml-3 text-gray-500 cursor-pointer hover:text-gray-700">
//   //                             <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"
//   //                                 strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
//   //                                 <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
//   //                                 <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
//   //                             </svg>
//   //                         </a>
//   //                         <a href='/' className="ml-3 text-gray-500 cursor-pointer hover:text-gray-700">
//   //                             <svg fill="currentColor" stroke="currentColor" strokeLinecap="round"
//   //                                 strokeLinejoin="round" strokeWidth="0" className="w-5 h-5" viewBox="0 0 24 24">
//   //                                 <path stroke="none"
//   //                                     d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z">
//   //                                 </path>
//   //                                 <circle cx="4" cy="4" r="2" stroke="none"></circle>
//   //                             </svg>
//   //                         </a>
//   //                     </span>
//   //                 </div>
//   //             </div>
//   //             <div className="flex flex-wrap flex-grow mt-10 -mb-10 text-center md:pl-20 md:mt-0 md:text-left">
//   //                 <div className="w-full px-4 lg:w-1/4 md:w-1/2">
//   //                     <h2 className="mb-3 text-sm font-bold tracking-widest text-gray-900 uppercase title-font">About</h2>
//   //                     <nav className="mb-10 list-none">
//   //                         <li className="mt-3">
//   //                             <a href='/' className="text-gray-500 cursor-pointer hover:text-gray-900">Company</a>
//   //                         </li>
//   //                         <li className="mt-3">
//   //                             <a href='/' className="text-gray-500 cursor-pointer hover:text-gray-900">Careers</a>
//   //                         </li>
//   //                         <li className="mt-3">
//   //                             <a href='/' className="text-gray-500 cursor-pointer hover:text-gray-900">Blog</a>
//   //                         </li>
//   //                     </nav>
//   //                 </div>
//   //                 <div className="w-full px-4 lg:w-1/4 md:w-1/2">
//   //                     <h2 className="mb-3 text-sm font-bold tracking-widest text-gray-900 uppercase title-font">Support</h2>
//   //                     <nav className="mb-10 list-none">
//   //                         <li className="mt-3">
//   //                             <a href='/' className="text-gray-500 cursor-pointer hover:text-gray-900">Contact Support</a>
//   //                         </li>
//   //                         <li className="mt-3">
//   //                             <a href='/' className="text-gray-500 cursor-pointer hover:text-gray-900">Help Resources</a>
//   //                         </li>
//   //                         <li className="mt-3">
//   //                             <a href='/' className="text-gray-500 cursor-pointer hover:text-gray-900">Release Updates</a>
//   //                         </li>
//   //                     </nav>
//   //                 </div>
//   //                 <div className="w-full px-4 lg:w-1/4 md:w-1/2">
//   //                     <h2 className="mb-3 text-sm font-bold tracking-widest text-gray-900 uppercase title-font">Platform
//   //                     </h2>
//   //                     <nav className="mb-10 list-none">
//   //                         <li className="mt-3">
//   //                             <a href='/' className="text-gray-500 cursor-pointer hover:text-gray-900">Terms &amp; Privacy</a>
//   //                         </li>
//   //                         <li className="mt-3">
//   //                             <a href='/' className="text-gray-500 cursor-pointer hover:text-gray-900">Pricing</a>
//   //                         </li>
//   //                         <li className="mt-3">
//   //                             <a href='/' className="text-gray-500 cursor-pointer hover:text-gray-900">FAQ</a>
//   //                         </li>
//   //                     </nav>
//   //                 </div>
//   //                 <div className="w-full px-4 lg:w-1/4 md:w-1/2">
//   //                     <h2 className="mb-3 text-sm font-bold tracking-widest text-gray-900 uppercase title-font">Contact</h2>
//   //                     <nav className="mb-10 list-none">
//   //                         <li className="mt-3">
//   //                             <a href='/' className="text-gray-500 cursor-pointer hover:text-gray-900">Send a Message</a>
//   //                         </li>
//   //                         <li className="mt-3">
//   //                             <a href='/' className="text-gray-500 cursor-pointer hover:text-gray-900">Request a Quote</a>
//   //                         </li>
//   //                         <li className="mt-3">
//   //                             <a href='/' className="text-gray-500 cursor-pointer hover:text-gray-900">+123-456-7890</a>
//   //                         </li>
//   //                     </nav>
//   //                 </div>
//   //             </div>
//   //         </div>
//   //         {/* <div className="bg-gray-300">
//   //             <div className="container px-5 py-4 mx-auto">
//   //                 <p className="text-sm text-gray-700 capitalize xl:text-center">© 2020 All rights reserved </p>
//   //             </div>
//   //         </div> */}
//   //     </footer>
//   //   );
