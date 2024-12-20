import React from "react";
import EmailIcon from "../assets/icons/email_icon.svg";
import PhoneIcon from "../assets/icons/phone_icon.svg";
import Breadcrumbs from "../components/Breadcrumbs";
import ContactService from "../components/ContactService";
import MyButton from "../components/MyButton";

const Contact = () => {
  return (
    <>
      <Breadcrumbs path="Contact" />
      <div className="flex gap-[30px] mb-[140px] mx-[135px]">
        <div className="rounded-[4px] px-8 py-[40px] shadow-[0px_1px_13px_0px_#0000000D] ">
          <ContactService icon={PhoneIcon} title="Call To Us">
            <p>We are available 24/7, 7 days a week.</p>
            <p>Phone: +8801611112222</p>
          </ContactService>
          <hr className="my-8 bg-black/50 h-0.5" />
          <ContactService icon={EmailIcon} title="Write To Us">
            <p>Fill out our form and we will contact you within 24 hours.</p>
            <p>Emails: customer@exclusive.com</p>
            <p>Emails: support@exclusive.com</p>
          </ContactService>
        </div>
        <div className="w-full px-8 py-[40px] shadow-[0px_1px_13px_0px_#0000000D]">
          <form action="">
            <div className="grid grid-cols-3 gap-4">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                required={true}
                className="focus:outline-none px-4 py-3 bg-secondary rounded-[4px]"
              />
              <input
                type="text"
                name="email"
                placeholder="Your Email*"
                required={true}
                className="focus:outline-none px-4 py-3 bg-secondary rounded-[4px] "
              />
              <input
                type="text"
                name="phone"
                placeholder="Your Phone"
                required={true}
                className="focus:outline-none px-4 py-3 bg-secondary rounded-[4px]"
              />
              <textarea
                name="message"
                className="col-span-3 h-[200px] focus:outline-none bg-secondary px-4 py-3 rounded-[4px] resize-none "
                placeholder="Your Message"
              ></textarea>
            </div>
            <div className="flex justify-end">
              <MyButton className="mt-12 place-self-end ">
                Send Message
              </MyButton>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Contact;
