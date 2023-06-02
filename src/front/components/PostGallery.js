import React from "react";

class PostGallery extends React.Component {
  render() {
    return (
      <div className="post-single-gallery">
        {}
        <div className="slider-style5 ">
          <div className="swiper-wrapper">
            {}
            <div
              className="slider-item  swiper-slide"
              style={{
                backgroundImage: "url(assets/img/blog/30.jpg)"
              }}
            />
            {}
            <div
              className="slider-item  swiper-slide"
              style={{
                backgroundImage: "url(assets/img/blog/1.jpg)"
              }}
            />
            {}
            <div
              className="slider-item  swiper-slide"
              style={{
                backgroundImage: "url(assets/img/blog/3.jpg)"
              }}
            />
          </div>
          {}
          <div className="swiper-button-next" />
          <div className="swiper-button-prev" />
        </div>
      </div>
    );
  }
}

export default PostGallery;
