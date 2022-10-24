import React, { useState } from "react";
import {
  MdOutlineMarkEmailUnread,
  MdArrowDropDown,
  MdArrowDropUp,
} from "react-icons/md";
import { RiArrowDropDownLine, RiArrowDropUpLine } from "react-icons/ri";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

function Footer() {
  const [showHelp, setShowHelp] = useState(false);
  const [showLink, setShowLink] = useState(false);
  const [showSocials, setShowSocials] = useState(false);
  return (
    <>
      <section className="footer_mini">
        <div className="signup_sec">
          <p className="signup_info">
            signup to hear about our latest offers and promotions
          </p>
          <div className="signup">
            <input type="text" placeholder="Please Enter Your Email Address" />
            <button className="signup_btn">sign up</button>
          </div>
          <p className="terms">terms and conditions</p>
        </div>
        <div className="extra_info_dropdown">
          <div className="dropdown_sec">
            {" "}
            <div
              className="dropdown"
              onClick={() => setShowHelp(showHelp === false ? true : false)}
            >
              <h1>need help?</h1>
              {showHelp ? (
                <RiArrowDropUpLine
                  style={{
                    color: "white",
                    fontSize: "25px",
                  }}
                />
              ) : (
                <RiArrowDropDownLine
                  style={{
                    color: "white",
                    fontSize: "25px",
                  }}
                />
              )}
            </div>
            {showHelp && (
              <ul className="dropdown_menu">
                <li>help</li>
                <li>Track Order</li>
                <li>Delivery Info</li>
                <li>Returns Policy</li>
              </ul>
            )}
          </div>

          <div className="dropdown_sec">
            {" "}
            <div
              className="dropdown"
              onClick={() => setShowLink(showLink === false ? true : false)}
            >
              <h1>useful links</h1>
              {showLink ? (
                <RiArrowDropUpLine
                  style={{ color: "white", fontSize: "25px" }}
                />
              ) : (
                <RiArrowDropDownLine
                  style={{ color: "white", fontSize: "25px" }}
                />
              )}
            </div>
            {showLink && (
              <ul className="dropdown_menu">
                <li>giftcards</li>
                <li>jobs at lafashion</li>
                <li>account logins</li>
                <li>locate us</li>
                <li>social code of conduct</li>
              </ul>
            )}
          </div>

          <div className="dropdown_sec">
            <div
              className="dropdown"
              onClick={() =>
                setShowSocials(showSocials === false ? true : false)
              }
            >
              <h1>about us</h1>
              {showSocials ? (
                <RiArrowDropUpLine
                  style={{ color: "white", fontSize: "25px" }}
                />
              ) : (
                <RiArrowDropDownLine
                  style={{ color: "white", fontSize: "25px" }}
                />
              )}
            </div>
            {showSocials && (
              <ul className="dropdown_menu">
                <li>
                  <FaFacebookF className="socials" />
                  <FaInstagram className="socials" />
                  <FaTwitter className="socials" />
                </li>
                <li>fashion journal - lafashion</li>
                <li>vacancy</li>
              </ul>
            )}
          </div>
        </div>
      </section>

      {/*********************************  Max **********************************/}
      <section className="footer">
        <div className="signup_sec">
          <p className="signup_info">
            signup to hear about our latest offers and promotions
          </p>
          <div className="signup">
            <MdOutlineMarkEmailUnread className="email" />
            <input type="text" placeholder="Please Enter Your Email Address" />
            <button className="signup_btn">sign up</button>
          </div>
          <p className="terms">terms and conditions</p>
        </div>

        <div className="extra_info_sec">
          <div className="extra_info">
            <ul className="extra_info_list">
              <h1>need help?</h1>
              <li>help</li>
              <li>Track Order</li>
              <li>Delivery Info</li>
              <li>Returns Policy</li>
            </ul>
            <ul className="extra_info_list">
              <h1>useful links</h1>
              <li>giftcards</li>
              <li>jobs at lafashion</li>
              <li>account logins</li>
              <li>locate us</li>
              <li>social code of conduct</li>
            </ul>
            <ul className="extra_info_list">
              <h1>about us</h1>
              <li>
                <FaFacebookF className="socials" />
                <FaInstagram className="socials" />
                <FaTwitter className="socials" />
              </li>
              <li>fashion journal - lafashion</li>
              <li>vacancy</li>
            </ul>
          </div>
          <div className="reviews">
            <p>
              overall <br />
              <span>90%</span> <br />
              of customers are happy with our services <br />
              {/* <a href="#">Read reviews</a> */}
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default Footer;
