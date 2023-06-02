import React from "react";

class LatestPostsWidget extends React.Component {
  render() {
    return (
      <div className="widget ">
        <div className="section-title">
          <h5>Latest Posts</h5>
        </div>
        <ul className="widget-latest-posts">
          <li className="post-item">
            <div className="image">
              <a href="post-default.html">
                {" "}
                <img src="assets/img/latest/1.jpg" alt="..." />
              </a>
            </div>
            <div className="count">1</div>
            <div className="content">
              <p className="entry-title">
                <a href="post-default.html">
                  5 Things I Wish I Knew Before Traveling to Malaysia
                </a>
              </p>
              <small className="post-date">
                <i className="fas fa-clock" /> January 15, 2022
              </small>
            </div>
          </li>
          <li className="post-item">
            <div className="image">
              <a href="post-default.html">
                <img src="assets/img/latest/2.jpg" alt="..." />
              </a>
            </div>
            <div className="count">2</div>
            <div className="content">
              <p className="entry-title">
                <a href="post-default.html">
                  Everything you need to know about visiting the Amazon.
                </a>
              </p>
              <small className="post-date">
                <i className="fas fa-clock" /> January 15, 2022
              </small>
            </div>
          </li>
          <li className="post-item">
            <div className="image">
              <a href="post-default.html">
                <img src="assets/img/latest/3.jpg" alt="..." />
              </a>
            </div>
            <div className="count">3</div>
            <div className="content">
              <p className="entry-title">
                <a href="post-default.html">
                  How to spend interesting vacation after hard work?
                </a>
              </p>
              <small className="post-date">
                {" "}
                <i className="fas fa-clock" /> January 15, 2022
              </small>
            </div>
          </li>
          <li className="post-item">
            <div className="image">
              <a href="post-default.html">
                <img src="assets/img/latest/4.jpg" alt="..." />
              </a>
            </div>
            <div className="count">4</div>
            <div className="content">
              <p className="entry-title">
                <a href="post-default.html">
                  10 Best and Most Beautiful Places to Visit in Italy
                </a>
              </p>
              <small className="post-date">
                {" "}
                <i className="fas fa-clock" /> January 15, 2022
              </small>
            </div>
          </li>
        </ul>
      </div>
    );
  }
}

export default LatestPostsWidget;
