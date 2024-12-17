import { useState } from "react";
import LoginCartImage from "../assets/images/login_cart.png";
import SignInForm from "../components/SignInForm";
import SignUpForm from "../components/SignUpForm";

const SignUp = () => {
  const [isSignUp, setIsSignUp] = useState(true);

  return (
    <main className="mt-[60px] mb-[140px] mr-[135px] flex gap-[130px] items-center">
      <img
        className="w-[805px] h-[780px]"
        src={LoginCartImage}
        alt="login cart"
      />

      {isSignUp ? (
        <SignUpForm onLoginClicked={() => setIsSignUp(false)} />
      ) : (
        <SignInForm onSignUpClicked={() => setIsSignUp(true) } />
      )}
    </main>
  );
};

export default SignUp;
