import React from "react";

class CategoriesWidget extends React.Component {
  render() {
    return (
      <div className="widget">
        <div className="section-title">
          <h5>Categories</h5>
        </div>
        <ul className="widget-categories">
          <li>
            <a href="post-video.html#" className="categorie">
              Livestyle
            </a>
            <span className="ml-auto">22 Posts</span>
          </li>
          <li>
            <a href="post-video.html#" className="categorie">
              Travel
            </a>
            <span className="ml-auto">18 Posts</span>
          </li>
          <li>
            <a href="post-video.html#" className="categorie">
              Food
            </a>
            <span className="ml-auto">14 Posts</span>
          </li>
          <li>
            <a href="post-video.html#" className="categorie">
              fashion
            </a>
            <span className="ml-auto">10 Posts</span>
          </li>
          <li>
            <a href="post-video.html#" className="categorie">
              interior
            </a>
            <span className="ml-auto">14 Posts</span>
          </li>
          <li>
            <a href="post-video.html#" className="categorie">
              art & design
            </a>
            <span className="ml-auto">10 Posts</span>
          </li>
        </ul>
      </div>
    );
  }
}

export default CategoriesWidget;
