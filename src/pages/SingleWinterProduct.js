import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { winter } from "../product_data";
import { BsHeart } from "react-icons/bs";
import { GiStorkDelivery } from "react-icons/gi";
import { AiFillStar } from "react-icons/ai";
import { GoVerified } from "react-icons/go";
import { RiArrowDropDownLine, RiArrowDropUpLine } from "react-icons/ri";
import { useSelector, useDispatch } from "react-redux";
import { addToCart, increaseAmount } from "../features/cart/cartSlice";

function SingleWinterProduct() {
  const [moreAbout, setMoreAbout] = useState(false);
  const [moreQues, setMoreQues] = useState(false);

  const dispatch = useDispatch();
  const { cart } = useSelector((state) => state.cart);

  let { id } = useParams();
  const [index, setIndex] = useState(0);
  const product = winter.find((item) => item.id === id);
  const { img, brand, price, type } = product;
  const { main, back, closer } = img;

  let picArr = [];
  picArr.push(main, back, closer);

  return (
    <>
      <div className="space_single_product"></div>
      <div className="product_offer">
        <div className="product_offer_title">
          <h2>
            Free Delivery For Orders Above $200
            <GiStorkDelivery
              style={{
                fontSize: "25px",
                marginLeft: "10px",
                color: "rgba(0, 0, 0)",
              }}
            />
          </h2>
        </div>
      </div>
      <section className="product_container">
        <div className="image_info_mini">
          <div className="image_name">
            <p className="image_brand">{brand}</p>
            <p className="image_type">{type}</p>
            <AiFillStar style={{ color: "red" }} />
            <AiFillStar style={{ color: "red" }} />
            <AiFillStar style={{ color: "red" }} />
            <AiFillStar style={{ color: "red" }} />
            <AiFillStar style={{ color: "red" }} />
            {/* <p className="product_reviews">read reviews</p> */}
          </div>
          <p className="image_price">${price}</p>
        </div>
        <div className="image_zone">
          <div className="side_image_zone">
            {picArr.map((pic, id) => {
              let current = "side_image";
              if (id === index) {
                current = "side_image active";
              }
              return (
                <img
                  src={pic}
                  alt="small size winter collection"
                  onClick={() => setIndex(id)}
                  className={current}
                  key={id}
                />
              );
            })}
          </div>

          <img
            src={picArr[index]}
            alt="winter collection"
            className="main_image"
          />
        </div>

        <div className="image_info_zone">
          <div className="image_info">
            <div className="image_name">
              <p className="image_brand">{brand}</p>
              <p className="image_type">{type}</p>
              <AiFillStar style={{ color: "red" }} />
              <AiFillStar style={{ color: "red" }} />
              <AiFillStar style={{ color: "red" }} />
              <AiFillStar style={{ color: "red" }} />
              <AiFillStar style={{ color: "red" }} />
              <p className="product_reviews">read reviews</p>
            </div>
            <p className="image_price">${price}</p>
          </div>
          <div className="add_bag">
            <p>
              <GoVerified style={{ marginRight: "8px", fontSize: "15px" }} />
              Earn points by joining our PREMIUM CLUB. Join or Sign in!
            </p>

            <div className="size_options">
              <select name="size" id="sizes">
                <option value="instruction">Please Select Size</option>
                <option value="xs">Extra Small</option>
                <option value="s">Small</option>
                <option value="m">Medium</option>
                <option value="ml">Medium Large</option>
                <option value="x">Large</option>
                <option value="xl">Extra Large</option>
                <option value="xxl">Extra-Extra Large</option>
              </select>
              <button className="heart_btn">
                <BsHeart className="heart" style={{ fontSize: "15px" }} />
              </button>

              <button
                className="add_bag_btn"
                onClick={() => {
                  const exist = cart.find((item) => item.id === id);
                  if (exist) {
                    dispatch(increaseAmount(id));
                    return;
                  } else {
                    dispatch(addToCart(product));
                    dispatch(increaseAmount(id));
                  }
                }}
              >
                Add To Bag
              </button>
            </div>
          </div>
          <div className="more_info">
            <div className="about_product_zone">
              <div
                className="about_product"
                onClick={() => setMoreAbout(moreAbout === false ? true : false)}
              >
                <p>About Product</p>
                {moreAbout ? (
                  <RiArrowDropUpLine className="product_drop" />
                ) : (
                  <RiArrowDropDownLine className="product_drop" />
                )}
              </div>

              {moreAbout && (
                <p className="more_about">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Excepturi unde aliquam rem dolor quam, alias laudantium
                  eveniet illum veritatis ratione saepe quis amet cumque atque
                  debitis officia voluptate nostrum aperiam?
                </p>
              )}
            </div>

            <div className="product_ques_zone">
              <div
                className="product_ques"
                onClick={() => setMoreQues(moreQues === false ? true : false)}
              >
                <p>Frequently Asked Questions</p>
                {moreQues ? (
                  <RiArrowDropUpLine className="product_drop" />
                ) : (
                  <RiArrowDropDownLine className="product_drop" />
                )}
              </div>

              {moreQues && (
                <ul className="more_ques">
                  <li>How long does a typical delivery take?</li>
                  {/* <li>about 2 to 3 days</li> */}
                  <li>Where can we find your shops?</li>
                  {/* <li>Still in construction</li> */}
                  <li>How do we get bonuses?</li>
                  {/* <li>Simply sign up and read our newsletters</li> */}
                </ul>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default SingleWinterProduct;
