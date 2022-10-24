import CartItem from "./CartItem";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { clearCart, getTotals } from "./cartSlice";
import { BsFillBagXFill } from "react-icons/bs";

// import { openModal } from "../features/modal/modalSlice";
// import { getTotal, clearCart } from "../slices/cartSlice";
// import Modal from "./Modal";
const Cart = () => {
  const dispatch = useDispatch();
  const { cart, total } = useSelector((state) => state.cart);
  // const { isOpen } = useSelector((store) => store.modal);
  // useEffect(() => {
  //   dispatch(getTotal());
  // }, [cart, dispatch]);

  if (cart.length === 0) {
    return (
      <section className="cart">
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
          // onClick={() => {
          //   dispatch(openModal());
          // }}
          onClick={() => {
            dispatch(clearCart());
          }}
        >
          clear cart
        </button>
        {/* {isOpen && <Modal />} */}
      </footer>
    </section>
  );
};
export default Cart;
