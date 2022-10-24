import React from "react";
import { categories } from "../data";

function Categories() {
  return (
    <section className="categories">
      {categories.map((item, index) => {
        const { img, title } = item;
        return (
          <div key={index} className="category">
            <div className="overlay_category">
              <h4 className="category_title">{title}</h4>
              <button className="category_btn">shop now</button>
            </div>
            <img src={img} alt="category" className="category_image" />
          </div>
        );
      })}
    </section>
  );
}

export default Categories;
