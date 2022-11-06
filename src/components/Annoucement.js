import React from "react";
import useAuth from "./useAuth";
import { signOut } from "firebase/auth";
import { auth } from "../firebase/config";
import { Link } from "react-router-dom";

// Icons
import { IoMdPaperPlane } from "react-icons/io";
import { TiLocationOutline } from "react-icons/ti";
import { CgProfile } from "react-icons/cg";
import { TbTruckDelivery } from "react-icons/tb";
import { BiHelpCircle, BiLogIn, BiLogOut } from "react-icons/bi";
import { RiLogoutBoxFill } from "react-icons/ri";
import { useState } from "react";
// Icons

// Styles
const style = {
  color: "white",
  fontSize: "1.3em",
  marginRight: "3px",
  position: "relative",
  top: "3px",
};
// Styles

function Annoucement() {
  const { currentUser } = useAuth();
  const [showLogin, setShowLogin] = useState(false);

  const logout = async () => {
    try {
      const signout = await signOut(auth);
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <>
      {/**************************************** Annoucement screen mini ************************************************************/}
      <div className="annouce_mini">
        <div className="help">
          <button className="annouce_btn">
            <BiHelpCircle style={style} /> help
          </button>
        </div>
        <div className="track border">
          <button className="annouce_btn">
            <TbTruckDelivery style={style} />
            order
          </button>
        </div>
        <div className="account">
          {currentUser ? (
            <img
              src={currentUser.photoURL}
              alt="profile"
              className="profile_pic leftee"
            />
          ) : (
            <CgProfile
              style={{ color: "white", position: "relative", top: "9px" }}
              className="leftee"
            />
          )}
          <button className="annouce_btn">
            {currentUser ? currentUser.displayName : "account"}
          </button>
        </div>
      </div>

      {/**************************************** Annoucement screen mini ************************************************************/}

      {/**************************************** annoucement screen large ************************************************************/}
      <div className="cont_annoucement">
        <div className="annouce_left">
          <IoMdPaperPlane style={style} />
          <button className="annouce_btn"> get $5 off - sign up</button>{" "}
          <TbTruckDelivery style={style} className="leftee" />
          <button className="annouce_btn">track order</button>
        </div>

        <div className="annouce_right">
          <TiLocationOutline style={style} />
          <button className="annouce_btn">store finder</button>
          {currentUser ? (
            <img
              src={currentUser.photoURL}
              alt="profile"
              className="profile_pic leftee"
            />
          ) : (
            <CgProfile style={style} className="leftee" />
          )}

          <button
            className="annouce_btn"
            onClick={() => setShowLogin(showLogin === false ? true : false)}
          >
            {currentUser ? currentUser.displayName : "my account"}
          </button>
        </div>
      </div>
      {showLogin && (
        <div className="auth_page">
          {currentUser ? (
            <>
              <BiLogOut className="auth_icon" />
              <p className="auth_btn" onClick={logout}>
                Logout
              </p>
            </>
          ) : (
            <>
              <BiLogIn className="auth_icon" />
              <Link to="/login">
                <p className="auth_btn">Login</p>
              </Link>
            </>
          )}
        </div>
      )}
      {/**************************************** annoucement screen large ************************************************************/}
    </>
  );
}

export default Annoucement;
