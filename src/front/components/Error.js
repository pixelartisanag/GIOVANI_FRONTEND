import React from "react";

class Error extends React.Component {
  render() {
    return (
      <div className="page404">
        <div className="page404-image">
          <img src="assets/img/pic/error.png" alt />
        </div>
        <div className="page404-content">
          <h3>Oops! This page can’t be found </h3>
          <p>
            The page which you are looking for does not exist galley of type and
            scrambled it to make a type specimen book.{" "}
          </p>
          <a href="index.html" className="btn-custom">
            Go back to Home
          </a>
        </div>
      </div>
    );
  }
}

export default Error;
