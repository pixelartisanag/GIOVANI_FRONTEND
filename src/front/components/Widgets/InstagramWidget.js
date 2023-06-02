import React from "react";

class InstagramWidget extends React.Component {
  render() {
    return (
      <div className="widget">
        <div className="section-title">
          <h5>Instagram</h5>
        </div>
        <ul className="widget-instagram">
          <li>
            <a className="image" href="post-video.html#">
              <img src="assets/img/instagram/1.jpg" alt />
            </a>
          </li>
          <li>
            <a className="image" href="post-video.html#">
              <img src="assets/img/instagram/2.jpg" alt />
            </a>
          </li>
          <li>
            <a className="image" href="post-video.html#">
              <img src="assets/img/instagram/3.jpg" alt />
            </a>
          </li>
          <li>
            <a className="image" href="post-video.html#">
              <img src="assets/img/instagram/4.jpg" alt />
            </a>
          </li>
          <li>
            <a className="image" href="post-video.html#">
              <img src="assets/img/instagram/5.jpg" alt />
            </a>
          </li>
          <li>
            <a className="image" href="post-video.html#">
              <img src="assets/img/instagram/6.jpg" alt />
            </a>
          </li>
        </ul>
      </div>
    );
  }
}

export default InstagramWidget;
