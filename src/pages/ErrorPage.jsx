import React from "react";
import { useNavigate } from "react-router-dom";
import Breadcrumbs from "../components/Breadcrumbs";
import MyButton from "../components/MyButton";

const ErrorPage = () => {
  const navigate = useNavigate();
  return (
    <div>
      <Breadcrumbs path="404 Error" />
      <div className="flex flex-col justify-center items-center ">
        <h1 className="font-[500] text-[110px] mb-10 leading-[115px] ">
          404 Not Found
        </h1>
        <p className="text-[16px] mb-20 leading-6">
          Your visited page not found. You may go home page.
        </p>
        <MyButton
          className="mb-[140px]"
          onClick={() => {
            navigate("/");
          }}
        >
          Back to home page
        </MyButton>
      </div>
    </div>
  );
};

export default ErrorPage;
