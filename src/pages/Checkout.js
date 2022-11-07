import React from "react";
import { useSelector } from "react-redux";
import "../styling/checkout.css";

function Checkout() {
  const { amount, total } = useSelector((state) => state.cart);
  return (
    <>
      <div className="space_products"></div>
      <div className="checkout_container">
        <div className="form_section">
          <h4 className="form_title">billing information</h4>
          <form>
            <input type="text" placeholder="Enter your name" />
            <input type="text" placeholder="Enter your email" />
            <input type="text" placeholder="Phone number" />
            <input type="text" placeholder="Street address" />
            <input type="text" placeholder="City" />
            <input type="text" placeholder="Postal code" />
            <input type="text" placeholder="Country" />
          </form>
        </div>

        <div className="checkout_card">
          <div className="card_item">
            <p className="item_description">Total Qty:</p>
            <p className="item_amount">{amount}</p>
          </div>
          <div className="card_item">
            <p className="item_description">Subtotal:</p>
            <p className="item_amount">${total}</p>
          </div>
          <div className="card_item">
            <p className="item_description">
              Shipping: <br />
              free shipping
            </p>
            <p className="item_amount">$0</p>
          </div>
          <div className="card_item cost">
            <p className="item_description">Total Cost:</p>
            <p className="item_amount">${total}</p>
          </div>
          <button className="checkout_btn">Place an order</button>
        </div>
      </div>
    </>
  );
}

export default Checkout;
