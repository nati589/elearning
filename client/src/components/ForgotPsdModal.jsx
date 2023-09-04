import React, { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import Xmark from "../assets/icons/Xmark.svg";
import EduviLogo from "../assets/eduvi_logo.svg";
import ForgotImage from "../assets/forgotPsd.svg";
import DividerVertical from "../assets/divider_line.svg";
import InputComponent from "./InputComponent";
import GoogleIcon from "../assets/google_icon2.svg";
import { GoLock, GoMail } from "react-icons/go";
import { FormProvider, useForm } from "react-hook-form";
import axios from "axios";
import {
  email_validation,
  password_validation,
} from "../utils/inputValidations";
import { AnimatePresence } from "framer-motion";
import InputError from "./InputError";

function ForgotPsdModal({ toggle, toggleSignin }) {
  const methods = useForm();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = methods;
  const navigate = useNavigate();

  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [failure, setFailure] = useState(false);
  const [success_msg, setMsg] = useState("");

  const submitInputs = handleSubmit((data) => {
    alert(data, "data");
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

  return (
    <>
      <div className="modal-overlay h-screen w-full bg-black bg-opacity-60 fixed top-0 bottom-0 left-0 right-0 flex flex-col flex-nowrap justify-center items-center z-50">
        <div className="modal-body flex flex-col h-fit bg-white w-10/12 lg:w-8/12 rounded-xl p-2 md:p-4 lg:p-4">
          <img
            src={Xmark}
            onClick={toggle}
            alt="close button "
            className="block self-end cursor-pointer w-6 h-auto"
          />
          <div className="modal-body flex flex-row">
            <div className="hidden lg:flex flex-col flex-nowrap justify-center items-left w-1/2 p-8 pl-24 font-sans">
              <img src={EduviLogo} alt="eduvi logo" className="w-2/12 mb-4" />
              <span className=" leading-normal font-extrabold text-4xl mb-5">
                Forgot Password?
              </span>
              <img
                src={ForgotImage}
                alt="login asset"
                className="w-8/12 h-auto m-auto mb-3 mt-3"
              />
            </div>
            <img
              src={DividerVertical}
              alt="vertical divider"
              className="hidden lg:block  h-[500px] m-auto"
            />
            <div className="flex flex-col flex-nowrap justify-center items-center w-full lg:w-1/2 p-8 font-sans">
              <FormProvider {...methods}>
                <form
                  className="login-form w-full flex flex-col flex-nowrap justify-center items-center"
                  onSubmit={(e) => e.preventDefault()}>
                  <InputComponent
                    logo={
                      <GoMail className="relative top-7 left-3  text-gray-500" />
                    }
                    label="Email"
                    name="login_email"
                    placeholder="Enter your email"
                    type="email"
                    required="required"
                    {...email_validation}
                  />

                  <button
                    onClick={submitInputs}
                    className="w-9/12 h-10 my-3 bg-medium-purple hover:bg-medium-purple-hover rounded-md text-white">
                    Reset Password
                  </button>
                </form>
              </FormProvider>

              <span onClick={toggleSignin} className="text-medium-purple ">
                back to login
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ForgotPsdModal;
