import React, { useState } from "react";
import { RiArrowDropDownLine, RiArrowDropUpLine } from "react-icons/ri";
import { winter } from "../product_data";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { addToCart, increaseAmount } from "../features/cart/cartSlice";
import { addToFavorite } from "../features/favorite/favoriteSlice";

import { BsHeart, BsCart, BsEmojiFrown } from "react-icons/bs";

function Winter({ search }) {
  // States
  const [more, setMore] = useState(false);
  const [changeIcon, setChangeIcon] = useState(false);
  const [sorting, setSorting] = useState("recommended");
  // States

  const dispatch = useDispatch();
  const { cart } = useSelector((state) => state.cart);
  const { favorite } = useSelector((state) => state.favorite);

  const filteredProduct = winter.filter((product) => {
    if (search) {
      return (
        product.type.toLocaleLowerCase().includes(search.toLocaleLowerCase()) ||
        product.brand.toLocaleLowerCase().includes(search.toLocaleLowerCase())
      );
    } else {
      return product;
    }
  });

  const sortedProduct = filteredProduct.sort((a, b) => {
    switch (sorting) {
      case "lowest to highest":
        return a.price - b.price;
      case "highest to lowest":
        return b.price - a.price;
      case "product name":
        const x = a.brand.toLocaleUpperCase();
        const y = b.brand.toLocaleUpperCase();
        if (x < y) {
          return -1;
        }
        if (x > y) {
          return 1;
        }
        return 0;
      default:
        return (a = b);
    }
  });

  return (
    <>
      <div className="space_products"></div>
      <section className="products_container">
        <div className="about_category">
          <div className="products_info">
            <h1 className="products_title">winter collection</h1>

            <p
              className="more"
              onClick={() => setMore(more === false ? true : false)}
            >
              {more ? "read less" : "find out more"}
              <span>
                {more ? (
                  <RiArrowDropUpLine style={{ fontSize: "25px" }} />
                ) : (
                  <RiArrowDropDownLine style={{ fontSize: "25px" }} />
                )}
              </span>
            </p>
            {more && (
              <p className="more_about_category">
                {winter.length} products found <br />
                <br /> Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Excepturi iure quae deleniti repellendus qui ipsa expedita, amet
                deserunt doloremque alias, harum delectus omnis. At inventore
                libero vel illum recusandae voluptates.
              </p>
            )}
          </div>
          <div className="sort_products">
            <label htmlFor="select-sort">Sort By:</label>
            <select
              id="select-sort"
              value={sorting}
              onChange={(e) => {
                setSorting(e.target.value);
              }}
            >
              <option value="recommended">Recommended</option>
              <option value="lowest to highest">Price-low-high</option>
              <option value="highest to lowest">Price-high-low</option>
              <option value="product name">Product name</option>
            </select>
          </div>
        </div>

        {/****************  Product Section  ***********************/}
        <div className="products_sec">
          <div className="sizes">
            <h2>Size</h2>
            <div className="size_btn_sec">
              <button type="button" className="size_btn">
                XS
              </button>
              <button type="button" className="size_btn">
                S
              </button>
              <button type="button" className="size_btn">
                M
              </button>
              <button type="button" className="size_btn">
                ML
              </button>
              <button type="button" className="size_btn">
                X
              </button>
              <button type="button" className="size_btn">
                XL
              </button>
              <button type="button" className="size_btn">
                XXL
              </button>
            </div>
          </div>
          <div
            className={
              filteredProduct.length === 0 ? "no_products" : "products"
            }
          >
            {filteredProduct.length === 0 ? (
              <p>
                we couldn't find a match for <b>"{search}"</b>{" "}
                <BsEmojiFrown style={{ marginLeft: "10px", color: "red" }} />
                . <br /> please try another.
              </p>
            ) : (
              sortedProduct.map((item, index) => {
                const { brand, type, price, img, id } = item;
                return (
                  <article className="card" key={index}>
                    <div className="card_img">
                      <Link to={`/winterproduct/${id}`}>
                        <img src={img.main} alt="winter collection" />
                      </Link>
                      <div className="product_overlay">
                        <div className="overlay_item">
                          <div className="product_favorite">
                            <BsHeart
                              className="icon_item"
                              onClick={() => {
                                const exist = favorite.find(
                                  (item) => item.id === id
                                );
                                if (exist) {
                                  return;
                                } else {
                                  dispatch(addToFavorite(item));
                                }
                              }}
                            />
                          </div>
                          <div className="add_cart">
                            <BsCart
                              className="icon_item"
                              onClick={() => {
                                const exist = cart.find(
                                  (item) => item.id === id
                                );
                                if (exist) {
                                  dispatch(increaseAmount(id));
                                  return;
                                } else {
                                  dispatch(addToCart(item));
                                  dispatch(increaseAmount(id));
                                }
                              }}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="cart_fav_btn">
                      <button
                        className="add_cart_btn"
                        onClick={() => {
                          const exist = cart.find((item) => item.id === id);
                          if (exist) {
                            dispatch(increaseAmount(id));
                            return;
                          } else {
                            dispatch(addToCart(item));
                            dispatch(increaseAmount(id));
                          }
                        }}
                      >
                        add to cart
                      </button>
                      <button
                        className="add_fav_btn"
                        onClick={() => {
                          const exist = favorite.find((item) => item.id === id);
                          if (exist) {
                            return;
                          } else {
                            dispatch(addToFavorite(item));
                          }
                        }}
                      >
                        <BsHeart className="fav_icon_item" />
                      </button>
                    </div>
                    {/* <button className="quick_buy">Quick Buy</button> */}
                    <Link to={`/winterproduct/${id}`}>
                      <div className="product_info">
                        <div className="price">${price}</div>
                        <div className="brand">{brand}</div>
                        <div className="product_name">{type}</div>
                      </div>
                    </Link>
                  </article>
                );
              })
            )}
          </div>
        </div>
      </section>
    </>
  );
}

export default Winter;
