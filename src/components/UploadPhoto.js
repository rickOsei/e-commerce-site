import React, { useState } from "react";
import { photoUpload } from "../data";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";

function UploadPhoto() {
  const [index, setIndex] = useState(2);

  const handleNext = () => {
    setIndex((prev) => {
      if (index === photoUpload.length - 1) {
        return 0;
      } else {
        return index + 1;
      }
    });
  };

  const handlePrev = () => {
    setIndex((prev) => {
      if (index === 0) {
        return photoUpload.length - 1;
      } else {
        return index - 1;
      }
    });
  };
  return (
    <section className="upload_center">
      <div className="upload_info">
        <h4 className="upload_title">Show us your Fashion !!</h4>
        <p className="instruction">
          Mention <span className="bold">@laFashion</span> in your post or
          upload your look straight to our gallery for a chance to be featured.
        </p>
      </div>
      <section className="upload">
        <div className="cards">
          {photoUpload.map((photo, photoIndex) => {
            const { img, user } = photo;

            let position = "before";
            if (index === photoIndex) {
              position = "active";
            }
            if (
              photoIndex === index + 1 ||
              (index === photoUpload.length - 1 && photoIndex === 0)
            ) {
              position = "new";
            }
            if (
              photoIndex === index - 1 ||
              (index === 0 && photoIndex === photoUpload.length - 1)
            ) {
              position = "old";
            }

            return (
              <article key={photoIndex} className={position}>
                <img src={img} alt="uploads" className="upload_img" />
                <div className="upload_overlay">
                  <span className="user">{user}</span>
                </div>
              </article>
            );
          })}
        </div>
      </section>
      <div className="upload_arrow">
        <FaArrowLeft onClick={handlePrev} className="upload_arrow_btn" />
        <FaArrowRight onClick={handleNext} className="upload_arrow_btn" />
      </div>
    </section>
  );
}

export default UploadPhoto;
