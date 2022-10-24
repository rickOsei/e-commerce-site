import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import { removeItem } from "./favoriteSlice";
import { addToCart, increaseAmount } from "../cart/cartSlice";
import { Link } from "react-router-dom";

const FavoriteItem = ({ item }) => {
  const { id, img, type, brand, price, amount } = item;
  const dispatch = useDispatch();
  const { cart } = useSelector((state) => state.cart);
  const { main } = img;
  return (
    <article className="favorite-item">
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
      <div className="favorite_item_cart">
        <button
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
          add to bag
        </button>
      </div>
    </article>
  );
};
export default FavoriteItem;
