import CartItem from "./CartItem";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import Modal from "../modal/Modal";
import { openModal } from "../modal/modalSlice";

// Icons
import { BsFillBagXFill } from "react-icons/bs";

const Cart = () => {
  const dispatch = useDispatch();
  const { cart, total } = useSelector((state) => state.cart);
  const { isOpen } = useSelector((store) => store.modal);

  if (cart.length === 0) {
    return (
      <section className="cart_empty">
        <header>
          <h2>your bag</h2>
          <h4 className="empty-cart">is currently empty</h4>
        </header>
        <div className="empty_cart_img">
          <BsFillBagXFill style={{ fontSize: "70px" }} />
        </div>
      </section>
    );
  }

  return (
    <section className="cart">
      <header>
        <h2>your bag</h2>
      </header>
      <div>
        {cart.map((item, index) => {
          return <CartItem key={index} {...item} />;
        })}
      </div>
      <footer>
        <hr />
        <div className="cart-total">
          <h4>
            total <span>${total.toFixed(2)}</span>
          </h4>
        </div>
        <button
          className="btn clear-btn"
          onClick={() => {
            dispatch(openModal());
          }}
        >
          clear cart
        </button>
        <Link to="/checkout">
          <button className="btn checkout-btn">proceed to checkout</button>
        </Link>
        {isOpen && <Modal />}
      </footer>
    </section>
  );
};
export default Cart;
