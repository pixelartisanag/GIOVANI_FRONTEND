import React from "react";

class Pagination extends React.Component {
  render() {
    return (
      <div className="row">
        <div className="col-lg-12">
          <div className="pagination ">
            <ul className="list-inline">
              <li className="active">
                {" "}
                <a href="blog-masonry.html#">1</a>
              </li>
              <li>
                <a href="blog-masonry.html#">2</a>
              </li>
              <li>
                <a href="blog-masonry.html#">3</a>
              </li>
              <li>
                <a href="blog-masonry.html#">4</a>
              </li>
              <li>
                <a href="blog-masonry.html#">
                  <i className="fas fa-arrow-right" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default Pagination;
