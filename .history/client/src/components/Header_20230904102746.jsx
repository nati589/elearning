import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import { Dialog } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import logo from "../assets/Logo.png";
import LoginModal from "./LoginModal";
import SignupModal from "./SignupModal";
import { Link, NavLink, useNavigate } from "react-router-dom";
import "../styles/Header.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import { useForm } from "react-hook-form";
import axios from "axios";

const navigation = [
  { name: "Home", to: "/" },
  { name: "Books", to: "/books" },
  { name: "Courses", to: "/courses" },
];

const subNavigation = [
  { name: "All Courses", to: "/" },
  { name: "My Books", to: "/" },
  { name: "Learning", to: "/" },
  { name: "My Status", to: "/" },
  { name: "My Courses", to: "/" },
];

const avatarNavigation = [
  { name: "All Courses", to: "/" },
  { name: "My Books", to: "/" },
  { name: "Learning", to: "/" },
  { name: "My Status", to: "/" },
  { name: "My Courses", to: "/" },
];

function Header() {
  const methods = useForm();
  const navigate = useNavigate();

<<<<<<< Updated upstream
  const images = require.context('../assets', true)
  const profileUrl= images("./default_profile.svg")


  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [signinModal, setSigninModal] = useState(false);
  const [signupModal, setSignupModal] = useState(false);
  const [forgotpsdModal,setForgotpsdModal]= useState(false);
  const [resetpsdModal,setResetpsdModal]= useState(false);
  const [userProfileImg,setUserprofileImg] = useState(profileUrl);
  const [avatarState, setAvatarState]= useState(false)
=======
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [failure, setFailure] = useState(false);
  const [success_msg, setMsg] = useState("");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [signinModal, setSigninModal] = useState(false);
  const [signupModal, setSignupModal] = useState(false);
  const [userProfileImg, setUserprofileImg] = useState(
    "https://www.material-tailwind.com/img/face-2.jpg"
  );
  const [avatarState, setAvatarState] = useState(false);
>>>>>>> Stashed changes

  const { handleSubmit } = methods;
  const avatarMenu = avatarState
    ? "z-10 absolute right-10 top-[72px] bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700"
    : "hidden";

<<<<<<< Updated upstream
  const avatarMenu = avatarState? 'z-10 absolute right-10 top-[72px] bg-white divide-y divide-gray-100 rounded-lg shadow-lg w-44':'hidden';

 
  const setModalsArray = [setSigninModal,setSignupModal,setForgotpsdModal,setResetpsdModal,setMobileMenuOpen];

  const openAvatar = ()=>{
    setAvatarState(!avatarState)
  }
=======
  const submitInputs = handleSubmit((data) => {
    axios
      .post("/auth/login", data)
      .then((res) => {
        setSubmitSuccess(true);
        setMsg(res.data.message);
        setFailure(false);
        setTimeout(() => {
          setSubmitSuccess(false);
          navigate("/");
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

  const openAvatar = () => {
    setAvatarState(!avatarState);
  };
>>>>>>> Stashed changes

  const disableScroll = () => {
    document.body.style.overflow = "hidden";
  };

  const enableScroll = () => {
    document.body.style.overflow = "auto";
  };

  const closeOthersExcept= (exceptionModal) =>{

    const closingModals = setModalsArray.filter( modal => modal !== exceptionModal)
    closingModals.map(modal => modal(false))

  }

  const toggleSignin = () => {
    setSigninModal(!signinModal);
<<<<<<< Updated upstream
    closeOthersExcept(setSigninModal)
=======
    setSignupModal(false);
    setMobileMenuOpen(false);
>>>>>>> Stashed changes

    !signinModal ? disableScroll() : enableScroll();
  };

  const toggleSignup = () => {
    setSignupModal(!signupModal);
<<<<<<< Updated upstream
    closeOthersExcept(setSignupModal)
    
=======
    setSigninModal(false);
    setMobileMenuOpen(false);
    setUserprofileImg("https://www.material-tailwind.com/img/face-2.jpg");

>>>>>>> Stashed changes
    !signupModal ? disableScroll() : enableScroll();
  };

  return (
    <>
      {signinModal && (
        <LoginModal toggle={toggleSignin} toggleSignup={toggleSignup} />
      )}
      {signupModal && (
        <SignupModal toggle={toggleSignup} toggleSignin={toggleSignin} />
      )}

      <header className="sticky flex flex-col flex-nowrap inset-x-0 top-0 z-30 bg-white">
        <div>
          <div
<<<<<<< Updated upstream
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg]  bg-gradient-to-tr from-[#ff80b5] to-[#9089fc]"
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
          />
        </div>
        <nav className=" text-writing-dark flex items-center justify-between px-6 py-3 lg:px-8" aria-label="Global">
          
          <div className="flex lg:flex-1">
            <button to="/" className="-m-1.5 p-1.5">
              <img className="h-10 w-auto" src={logo} alt="company logo" />
            </button>
          </div>


          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(true)}>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>

          <div className="top-nav-holder hidden lg:flex lg:gap-x-12">
            {navigation.map((item) => (
              <NavLink
                key={item.name}
                to={item.to}
                className='text-writing-dark'
                >
                {item.name}
              </NavLink>
            ))}
          </div>

          <div className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end">
            <button  onClick={toggleSignin} className="button-component h-12">Log in </button>
            <button  onClick={toggleSignup} className="button-component-stroke h-12">Sign Up</button>

              {/* profile avatar */}
              <button id="dropdownDefaultButton" className="text-white cursor-default bg-light-purple h-14 px-3 font-medium  rounded-[32px] text-center flex flex-row flex-nowrap items-center justify-center" type="button">
                 <Link to='/profile'>
                    <img className=" cursor-pointer relative mr-1 inline-block h-10 w-auto rounded-[50%] object-cover object-center" alt="avatar placeholder" src={userProfileImg}></img>
                  </Link>
                  <span className="mx-3 font-sans text-dark-purple">user name</span> 
                  <FontAwesomeIcon onClick={openAvatar} icon={faCaretDown} className="text-dark-purple hover:text-writing-dark cursor-pointer w-auto h-5"/>
              </button>
            <div id="dropdown" className={avatarMenu}>
                <ul className="py-2 text-sm text-writing-dark bg-light-purple" aria-labelledby="dropdownDefaultButton">

                {
                  avatarNavigation.map((item) => (
                  <li key={item.name}>
                    <a  href={item.to} className="block px-4 py-2 hover:bg-medium-purple hover:text-white hover:font-bold">{item.name}</a>
                  </li>
                  ))
                }
                  
                </ul>
=======
            className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
            aria-hidden="true"
          >
            <div
              className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg]  bg-gradient-to-tr from-[#ff80b5] to-[#9089fc]"
              style={{
                clipPath:
                  "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
              }}
            />
          </div>
          <nav
            className=" text-writing-dark flex items-center justify-between px-6 py-3 lg:px-8"
            aria-label="Global"
          >
            <div className="flex lg:flex-1">
              <Link to="/" className="-m-1.5 p-1.5">
                <img className="h-8 w-auto" src={logo} alt="company logo" />
              </Link>
>>>>>>> Stashed changes
            </div>

            <div className="flex lg:hidden">
              <button
                type="button"
                className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                onClick={() => setMobileMenuOpen(true)}
              >
                <Bars3Icon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>

            <div className="top-nav-holder hidden lg:flex lg:gap-x-12">
              {navigation.map((item) => (
                <NavLink
                  key={item.name}
                  to={item.to}
                  className="text-writing-dark"
                >
                  {item.name}
                </NavLink>
              ))}
            </div>

            <div className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end">
              <div onClick={toggleSignin} className="button-component h-12">
                Log in{" "}
              </div>
              <div
                onClick={toggleSignup}
                className="button-component-stroke h-12"
              >
                Sign Up
              </div>

              {/* profile avatar */}
              <button
                id="dropdownDefaultButton"
                className="text-white cursor-default bg-light-purple h-14 px-3 font-medium  rounded-[32px] text-center flex flex-row flex-nowrap items-center justify-center"
                type="button"
              >
                <span className="mx-3 font-sans text-dark-purple">
                  user name
                </span>
                <Link to="/profile">
                  <img
                    className=" cursor-pointer relative mr-1 inline-block h-10 w-auto rounded-[50%] object-cover object-center"
                    alt="avatar placeholder"
                    src={userProfileImg}
                  ></img>
                </Link>
                <FontAwesomeIcon
                  onClick={openAvatar}
                  icon={faCaretDown}
                  className="text-dark-purple hover:text-writing-dark cursor-pointer w-auto h-5"
                />
              </button>
              <div id="dropdown" className={avatarMenu}>
                <ul
                  className="py-2 text-sm text-writing-dark bg-light-purple"
                  aria-labelledby="dropdownDefaultButton"
                >
                  {avatarNavigation.map((item) => (
                    <li>
                      <a
                        key={item.name}
                        href={item.to}
                        className="block px-4 py-2 hover:bg-medium-purple hover:text-white hover:font-bold"
                      >
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </nav>

          <Dialog
            as="div"
            className="lg:hidden"
            open={mobileMenuOpen}
            onClose={setMobileMenuOpen}
          >
            <div className="fixed inset-0 z-50" />

            <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
              <div className="flex items-center justify-between">
                <NavLink to="/" className="-m-1.5 p-1.5">
                  <img className="h-8 w-auto" src={logo} alt="" />
                </NavLink>
                <button
                  type="button"
                  className="-m-2.5 rounded-md p-2.5 text-gray-700"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                </button>
              </div>

              <div className="mt-6 flow-root">
                <div className="-my-6 divide-y divide-gray-500/10">
                  <div className="space-y-2 py-6">
                    {navigation.map((item) => (
                      <NavLink
                        key={item.name}
                        to={item.to}
                        className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                      >
                        {item.name}
                      </NavLink>
                    ))}
                  </div>

                  {/* mobile nav login */}

                  <div className="py-6">
                    <div
                      onClick={toggleSignin}
                      className="button-component my-2"
                    >
                      Log in{" "}
                    </div>
                    <div
                      onClick={toggleSignup}
                      className="button-component-stroke my-2"
                    >
                      Sign Up
                    </div>
                  </div>
                </div>
              </div>
            </Dialog.Panel>
          </Dialog>
        </div>

<<<<<<< Updated upstream
{/* sub navigation */}
        <div className="w-full lg:h-14 md:h-12 h-9 bg-light-purple flex flex-row flex-nowrap justify-center items-center p-0">
          <nav className="sub-nav-holder flex flex-row flex-nowrap justify-center items-center w-full h-full p-0">
            {
              subNavigation.map((item) => (
                 <NavLink exact='true' 
                          key={item.name}
                          to={item.to} 
                          className='sub-navs' >
                            {item.name}
                 </NavLink>
                 ))
            }
=======
        {/* sub navigation */}
        <div className="w-full h-14 bg-light-purple flex flex-row flex-nowrap justify-center items-center p-0">
          <nav className="sub-nav-holder flex flex-row flex-nowrap justify-center items-center h-full p-0">
            {subNavigation.map((item) => (
              <NavLink
                exact="true"
                key={item.name}
                to={item.to}
                className="sub-navs"
              >
                {item.name}
              </NavLink>
            ))}
>>>>>>> Stashed changes
          </nav>
        </div>
      </header>
    </>
  );
}

export default Header;
