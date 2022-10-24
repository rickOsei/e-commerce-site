import React from "react";

// Icons
import { IoMdPaperPlane } from "react-icons/io";
import { TiLocationOutline } from "react-icons/ti";
import { CgProfile } from "react-icons/cg";
import { TbTruckDelivery } from "react-icons/tb";
import { BiHelpCircle } from "react-icons/bi";
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
            track order
          </button>
        </div>
        <div className="account">
          <button className="annouce_btn">
            <CgProfile style={style} />
            my account
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
          <CgProfile style={style} className="leftee" />
          <button className="annouce_btn">my account</button>
        </div>
      </div>
      {/**************************************** annoucement screen large ************************************************************/}
    </>
  );
}

export default Annoucement;
