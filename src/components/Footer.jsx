import React from "react";
import CopyrightIcon from "../assets/icons/copyright_icon.svg";
import SendIcon from "../assets/icons/send_icon.svg";
import AppStore from "../assets/images/app_store.png";
import GooglePlay from "../assets/images/google_play.png";
import Qrcode from "../assets/images/qrcode.png";

import FacebookIcon from "../assets/icons/facebook_icon.svg";
import InstagramIcon from "../assets/icons/instagram_icon.svg";
import LinkedinIcon from "../assets/icons/linkedin_icon.svg";
import TwitterIcon from "../assets/icons/twitter_icon.svg";

const Footer = () => {
  return (
    <footer className="bg-black h-[440px] mt-[140px] pt-[80px] flex flex-col justify-between">
      <div className="px-[135px] text-white grid grid-cols-[repeat(2,1fr)_repeat(3,auto)] gap-x-[87px] ">
        <div>
          <h1 className="font-bold text-[24px]">Exclusive</h1>
          <h2 className="font-[500] text-[20px] my-6">Subscribe</h2>
          <p className="text-[16px] mb-4">Get 10% off your first order</p>
          <div className="w-[217px] h-[48px] border border-white rounded-[4px] flex items-center justify-between ">
            <input
              className="focus:outline-none bg-transparent text-[16px] w-[170px] h-full py-[7px] pl-[16px]"
              type="email"
              placeholder="Enter your email"
            />
            <img src={SendIcon} className="size-6 mr-4" alt="send" />
          </div>
        </div>
        <div>
          <h1 className="font-[500] text-[20px] mb-6">Support</h1>
          <p className="text-[16px] mb-4">
            111 Bijoy sarani, Dhaka, DH 1515, Bangladesh.
          </p>
          <p className="text-[16px] mb-4">exclusive@gmail.com</p>
          <p className="text-[16px]">+88015-88888-9999</p>
        </div>
        <div className="">
          <h1 className="font-[500] text-[20px] mb-6 ">Account</h1>
          <p className="text-[16px] mb-4">My Account</p>
          <p className="text-[16px] mb-4">Login / Register</p>
          <p className="text-[16px] mb-4">Cart</p>
          <p className="text-[16px] mb-4">Wishlist</p>
          <p className="text-[16px]">Shop</p>
        </div>
        <div className="">
          <h1 className="font-[500] text-[20px] mb-6">Quick Link</h1>
          <p className="text-[16px] mb-4">Privacy Policy</p>
          <p className="text-[16px] mb-4">Terms Of Use</p>
          <p className="text-[16px] mb-4">FAQ</p>
          <p className="text-[16px] mb-4">Contact</p>
        </div>
        <div className="">
          <h1 className="font-[500] text-[20px] mb-6">Download App</h1>
          <p className="text-[12px] font-[500] mb-4 opacity-[70%] ">
            Save $3 with App New User Only
          </p>
          <div className="flex gap-[10px] items-center mb-[24px] ">
            <img className="size-[76px]" src={Qrcode} alt="qrcode" />
            <div>
              <img
                className="mb-[10px] cursor-pointer "
                src={GooglePlay}
                alt="google play"
              />
              <img className="cursor-pointer" src={AppStore} alt="app store" />
            </div>
          </div>
          <div className="flex gap-6">
            <img src={FacebookIcon} alt="facebook" />
            <img src={TwitterIcon} alt="twitter" />
            <img src={InstagramIcon} alt="instagram" />
            <img src={LinkedinIcon} alt="linked in" />
          </div>
        </div>
      </div>
      <div className="text-white flex gap-[6px] w-full border-t pt-4 mb-6 justify-center opacity-[40%]">
        <img className="size-6" src={CopyrightIcon} alt="copyright icon" />
        Copyright Rimel 2022. All right reserved
      </div>
    </footer>
  );
};

export default Footer;
