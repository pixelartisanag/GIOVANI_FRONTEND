import React from "react";

class PostFooter extends React.Component {
  render() {
    return (
      <div className="post-single-footer">
        <div className="tags">
          <ul className="list-inline">
            <li>
              <a href="blog-grid.html">Travel</a>
            </li>
            <li>
              <a href="blog-grid.html">Nature</a>
            </li>
            <li>
              <a href="blog-grid.html">tips</a>
            </li>
            <li>
              <a href="blog-grid.html">forest</a>
            </li>
            <li>
              <a href="blog-grid.html">beach</a>
            </li>
          </ul>
        </div>
        <div className="social-media">
          <ul className="list-inline">
            <li>
              <a href="post-video.html#" className="color-facebook">
                <i className="fab fa-facebook" />
              </a>
            </li>
            <li>
              <a href="post-video.html#" className="color-instagram">
                <i className="fab fa-instagram" />
              </a>
            </li>
            <li>
              <a href="post-video.html#" className="color-twitter">
                <i className="fab fa-twitter" />
              </a>
            </li>
            <li>
              <a href="post-video.html#" className="color-youtube">
                <i className="fab fa-youtube" />
              </a>
            </li>
            <li>
              <a href="post-video.html#" className="color-pinterest">
                <i className="fab fa-pinterest" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default PostFooter;
