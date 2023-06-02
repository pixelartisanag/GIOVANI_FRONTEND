import React from "react";

const Author = ({ user }) => (
    <section className="section  ">
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-6 col-md-8 col-sm-11 m-auto">
    <div className="widget-author  ">
      <div className="author-img">
        <a href="author.html" className="image">
          <img src="assets/img/author/1.jpg" alt />
        </a>
      </div>
      <div className="author-content">
        <h6 className="name"> Welcome {user.data.name}</h6>
        <div className="btn-link">13 Articles</div>
        <p className="bio">
          I'm David Smith, husband and father , I love Photography,travel and
          nature. I'm working as a writer and blogger with experience of 5
          years until now.
        </p>
        <div className="social-media">
          <ul className="list-inline">
            <li>
              <a href="author.html#" className="color-facebook">
                <i className="fab fa-facebook" />
              </a>
            </li>
            <li>
              <a href="author.html#" className="color-instagram">
                <i className="fab fa-instagram" />
              </a>
            </li>
            <li>
              <a href="author.html#" className="color-twitter">
                <i className="fab fa-twitter" />
              </a>
            </li>
            <li>
              <a href="author.html#" className="color-youtube">
                <i className="fab fa-youtube" />
              </a>
            </li>
            <li>
              <a href="author.html#" className="color-pinterest">
                <i className="fab fa-pinterest" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
          </div>
        </div>
      </div>
    </section>
);

export default Author;