import React from "react";
import GoogleIcon from "../assets/icons/google_icon.svg";
import MyButton from "./MyButton";

const SignUpForm = ({ onLoginClicked }) => {
  return (
    <div>
      <h1 className="font-[500] text-[36px] leading-[30px] mb-6 ">
        Create an account
      </h1>
      <p className="text-[16px]">Enter your details below</p>
      <form
        action=""
        className="mt-12 text-[16px] text-black/40 flex flex-col gap-[40px] "
      >
        <input
          className="border-b focus:outline-none"
          name="name"
          type="text"
          placeholder="Name"
        />
        <input
          className="border-b focus:outline-none"
          name="email_or_number"
          type="text"
          placeholder="Email or Phone Number"
        />
        <input
          className="border-b focus:outline-none"
          name="password"
          type="password"
          placeholder="Password"
        />
        <MyButton onClick={() => {}}>Create Account</MyButton>
      </form>
      <MyButton
        bgColor="white"
        textColor="black"
        fontWeight="400"
        className="mt-4 border border-black/40 w-full flex items-center justify-center gap-4 mb-8 "
        onClick={() => {}}
      >
        <span>
          <img src={GoogleIcon} alt="google icon" />
        </span>
        Sign up with Google
      </MyButton>
      <div className="flex justify-center gap-4 text-[16px] text-black/70 ">
        Already have account?
        <span
          className="font-[500] underline underline-offset-4 cursor-pointer"
          onClick={onLoginClicked}
        >
          Log in
        </span>
      </div>
    </div>
  );
};

export default SignUpForm;
