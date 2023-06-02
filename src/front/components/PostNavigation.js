import React from "react";

class PostNavigation extends React.Component {
  render() {
    return (
      <div className="row">
        <div className="col-md-6">
          <div className="widget">
            <div className="widget-next-post">
              <div className="post-item">
                <div className="image">
                  <a href="post-default.html">
                    {" "}
                    <img src="assets/img/latest/1.jpg" alt="..." />
                  </a>
                </div>
                <div className="content">
                  <a className="btn-link" href="post-default.html">
                    <i className="fas fa-arrow-left" />
                    Preview post
                  </a>
                  <p className="entry-title">
                    <a href="post-default.html">
                      5 Things I Wish I Knew Before Traveling to Malaysia
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="widget">
            <div className="widget-previous-post">
              <div className="post-item">
                <div className="image">
                  <a href="post-default.html">
                    {" "}
                    <img src="assets/img/latest/2.jpg" alt="..." />
                  </a>
                </div>
                <div className="content">
                  <a className="btn-link" href="post-default.html">
                    <i className="fas fa-arrow-right" />
                    next post
                  </a>
                  <p className="entry-title">
                    <a href="post-default.html">
                      5 Things I Wish I Knew Before Traveling to Malaysia
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default PostNavigation;
