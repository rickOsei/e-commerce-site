import React from "react";
import Slider from "../components/Slider.js";
import Categories from "../components/Categories.js";
import UploadPhoto from "../components/UploadPhoto.js";

function Home() {
  return (
    <>
      <Slider />
      <Categories />
      <UploadPhoto />
    </>
  );
}

export default Home;
