import FavoriteItem from "./FavoriteItem";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { clearFavorite } from "./favoriteSlice";
import { ImHeartBroken } from "react-icons/im";

const Favorite = () => {
  const dispatch = useDispatch();
  const { favorite } = useSelector((state) => state.favorite);

  if (favorite.length === 0) {
    return (
      <section className="favorite">
        <header>
          <h2>your list</h2>
          <h4 className="empty-favorite">is currently empty</h4>
        </header>
        <div className="empty_favorite_img">
          <ImHeartBroken style={{ fontSize: "70px" }} />
        </div>
      </section>
    );
  }

  console.log(favorite);

  return (
    <section className="favorite">
      <header>
        <h2>your list</h2>
      </header>
      <div>
        {favorite.map((item, index) => {
          return <FavoriteItem key={index} item={item} />;
        })}
      </div>
      <footer>
        <hr />
        <button
          className="btn clear-btn"
          onClick={() => {
            dispatch(clearFavorite());
          }}
        >
          clear list
        </button>
      </footer>
    </section>
  );
};
export default Favorite;
