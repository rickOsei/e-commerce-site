import { FiChevronDown, FiChevronUp } from "react-icons/fi";
// import { removeItem, increase, decrease } from "../features/cart/cartSlice";
import { useDispatch } from "react-redux";
import {
  removeItem,
  decreaseAmount,
  increaseAmount,
  // getTotal,
  // clearCart,
} from "./cartSlice";

const CartItem = ({ id, img, type, brand, price, amount }) => {
  const dispatch = useDispatch();
  const { main } = img;
  return (
    <article className="cart-item">
      <img src={main} alt={brand} />
      <div>
        <h4>{brand}</h4>
        <h4 className="type">{type}</h4>
        <h4 className="item-price">${price}</h4>
        <button
          className="remove-btn"
          onClick={() => {
            dispatch(removeItem(id));
          }}
        >
          remove
        </button>
      </div>
      <div>
        <button
          className="amount-btn"
          onClick={() => {
            dispatch(increaseAmount(id));
          }}
        >
          <FiChevronUp />
        </button>
        <p className="amount">{amount}</p>
        <button
          className="amount-btn"
          onClick={() => {
            if (amount === 1) {
              dispatch(removeItem(id));
              return;
            }
            dispatch(decreaseAmount(id));
          }}
        >
          <FiChevronDown />
        </button>
      </div>
    </article>
  );
};
export default CartItem;
