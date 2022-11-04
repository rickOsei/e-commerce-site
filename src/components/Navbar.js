import React, { useState } from "react";
import Annoucement from "./Annoucement";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

// Icons
import { BsSearch, BsHeart, BsBag } from "react-icons/bs";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { AiOutlineBars, AiOutlineClose } from "react-icons/ai";
import { IoIosSearch } from "react-icons/io";
// Icons

// Styles
const style = {
  search: { color: "white", fontSize: "1.3em" },
  searchMini: {
    color: "black",
    fontSize: "1.4em",
    marginLeft: "1.3rem",
    fontWeight: "200",
  },
  bag: {
    fontSize: "1.4rem",
    marginLeft: "1.3rem",
    marginRight: "1rem",
    fontWeight: "200",
  },
  like: { fontSize: "1.3em", fontWeight: "200", marginLeft: "1rem" },
  bar: { fontSize: "1.3rem", marginLeft: "1rem", fontWeight: "100" },
};
// Styles

function Navbar({ search, setSearch }) {
  // const [search, setSearch] = useState("");

  const [show, setShow] = useState(false);

  const { amount } = useSelector((state) => state.cart);

  return (
    <>
      <div className="nav_an">
        <Annoucement />
        <section className="container">
          {/**************************************** SideBar Starts *************************************************************/}
          <div className="toggle_bar" style={{ left: !show && "-270%" }}>
            <IoIosSearch className="toggle_search" />
            <AiOutlineClose
              className="toggle_cancel_btn"
              onClick={() => {
                setShow(false);
              }}
            />
            <div className="toggle_top">
              <a href="#*">
                <button className=" toggle_top_btn">men's</button>
              </a>
              <a href="#*">
                <button className=" toggle_top_btn ">women's</button>
              </a>
              <a href="#*">
                <button className=" toggle_top_btn ">kids</button>
              </a>
            </div>
            <div className="toggle_sec">
              <a href="#*">
                <button className=" toggle_btn">new</button>
              </a>
              <a href="#*">
                <button className=" toggle_btn">clothes</button>
              </a>
              <a href="#*">
                <button className=" toggle_btn">shoes</button>
              </a>
              <a href="#*">
                <button className=" toggle_btn">accessories</button>
              </a>
              <a href="#*">
                <button className=" toggle_btn">brands</button>
              </a>
              <a href="#*">
                <button className=" toggle_btn">sports</button>
              </a>
              <a href="#*">
                <button className=" toggle_btn">premium</button>
              </a>
              <a href="#*">
                <button className=" toggle_btn">beauty</button>
              </a>
              <a href="#*">
                <button className=" toggle_btn red">sale%</button>
              </a>
            </div>
            <hr />
            <div className="toggle_login">
              <a href="#*">
                <button className=" toggle_btn">login</button>
              </a>
            </div>
          </div>
          {/**************************************** SideBar Ends **********************************************************/}

          {/**************************************** Navbar-upper************************************************************/}
          <nav className="navbar">
            <div className="bars_search">
              <AiOutlineBars
                style={style.bar}
                id="bar"
                onClick={() => setShow(true)}
              />
              <IoIosSearch style={style.searchMini} id="search" />
            </div>
            <div className="left">
              <a href="#*">
                <button className=" nav_btn">men's</button>
              </a>
              <a href="#*">
                <button className=" nav_btn leftee">women's</button>
              </a>
              <a href="#*">
                <button className=" nav_btn leftee">kids</button>
              </a>
            </div>
            <div className="center">
              <Link to="/">
                <img src="/images/logo.png" alt="logo" />
              </Link>
            </div>
            <div className="right">
              <p>login</p>{" "}
              <Link to="/favorite">
                <BsHeart style={style.like} id="favorite" />
              </Link>
              <Link to="/cart">
                <BsBag style={style.bag} className="leftee" />
              </Link>
            </div>
            <Link to="/cart">
              <p className="cart_amount">{amount}</p>
            </Link>

            <div className="favorite_bag">
              <Link to="/favorite">
                <BsHeart style={style.like} id="favorite" />
              </Link>
              <Link to="/cart">
                <BsBag style={style.bag} id="bag" />
              </Link>
            </div>
          </nav>

          {/**************************************** Navbar-upper ************************************************************/}

          {/**************************************** Navbar-lower ************************************************************/}
          <nav className="low_navbar">
            <div className="link_btn">
              <a href="#*">
                <button className=" nav_btn">new</button>
              </a>
              <a href="#*">
                <button className=" nav_btn leftee">clothes</button>
              </a>
              <a href="#*">
                <button className=" nav_btn leftee">shoes</button>
              </a>
              <a href="#*">
                <button className=" nav_btn leftee">accessories</button>
              </a>
              <a href="#*">
                <button className=" nav_btn leftee">brands</button>
              </a>
              <a href="#*">
                <button className=" nav_btn leftee">sports</button>
              </a>
              <a href="#*">
                <button className=" nav_btn leftee">premium</button>
              </a>
              <a href="#*">
                <button className=" nav_btn leftee">beauty</button>
              </a>
              <a href="#*">
                <button className=" nav_btn leftee red">sale%</button>
              </a>
            </div>

            <div className="input_sec">
              <input
                type="text"
                placeholder="Search"
                value={search}
                onChange={(e) => {
                  setSearch(e.target.value);
                }}
              />
              <button className="search_btn">
                <BsSearch style={style.search} />
              </button>
            </div>
          </nav>
          {/**************************************** Navbar-lower ************************************************************/}
        </section>
      </div>
      <div className="space"></div>
    </>
  );
}

export default Navbar;
