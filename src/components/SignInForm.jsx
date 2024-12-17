import React from "react";
import MyButton from "./MyButton";

const SignInForm = ({ onSignUpClicked }) => {
  return (
    <div>
      <h1 className="font-[500] text-[36px] leading-[30px] mb-6 ">
        Log in to Exclusive
      </h1>
      <p className="text-[16px]">Enter your details below</p>
      <form
        action=""
        className="mt-12 text-[16px] text-black/40 flex flex-col gap-[40px]"
      >
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
        <div className="flex justify-between items-center">
          <MyButton className="" onClick={() => {}}>
            Log In
          </MyButton>
          <p className="text-secondary2 text-[16px] underline underline-offset-4 ">Forget Password?</p>
        </div>
        <div className="flex justify-center gap-4 text-[16px] text-black/70 ">
          Don't have an account?
          <span
            className="font-[500] underline underline-offset-4 cursor-pointer"
            onClick={onSignUpClicked}
          >
            Sign Up
          </span>
        </div>
      </form>
    </div>
  );
};

export default SignInForm;
